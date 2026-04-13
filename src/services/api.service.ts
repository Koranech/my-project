import axios from 'axios';
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {IProductsResponse} from "../models/IProductsResponse.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";

//1. Авторизація  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//1.1 Типізація даних які ми хочемо передати в пункті 1.3
type LoginData = {
    username: string,
    password: string,
    expiresInMins: number,
}

//1.2 Створення базової URL для наступних пунктів
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_DUMMY_AUTH_URL,
    headers: {}
});

//1.3 Функція Аутентифікації для нашого API
export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {
    // Ми використовуємо постовий метод та передаєм дані для аутентифікації
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins})
    console.log(userWithTokens)
    //Отримані дані зберігаємо localStorage
    localStorage.setItem('user', JSON.stringify(userWithTokens))
    return userWithTokens
}

//2 Входження під аутентифікованим користувачем

//2.1 Зробили голобальну функцію для витягування даних з ls з будь якого ключа
const retrieveLocalStorage = <T> (key: string) => {
    const object = localStorage.getItem(key) || '';
    if(!object){
        return {} as T
    }
    const parse = JSON.parse(object);
    return parse as T;
}

//2.2 Створення перехоплювача, який автоматично додає токен авторизації до запитів.
axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === "GET") {
        requestObject.headers.Authorization = 'Bearer ' + retrieveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return requestObject
})

//2.3 Підвантаження данних з авторизованим користувачем
export const loadAuthProducts = async (): Promise<IProduct[]> => {
    const {data: {products}} = await axiosInstance.get<IProductsResponse>('/products')
    console.log(products)
    return products
}

//2.4 Оновлення токену доступу якщо він вже не дійсний
export const refresh = async () => {
   const iUserWithTokens = retrieveLocalStorage<IUserWithTokens>('user')
    const {data: {refreshToken, accessToken}} =
        await axiosInstance.post<ITokenPair>('/refresh',
            {
                refreshToken: iUserWithTokens.refreshToken,
                expiresInMins: 1
            });
    console.log(refreshToken)
    console.log(accessToken)
    iUserWithTokens.accessToken = accessToken
    iUserWithTokens.refreshToken = refreshToken
    localStorage.setItem('user', JSON.stringify(iUserWithTokens))
}
