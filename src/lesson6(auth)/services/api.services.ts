import axios from 'axios';
import type {IUserWithToken} from "../models/IUserWithToken.ts";
import type {IProductsResponseModel} from "../models/IProductsResponseModel.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";

export interface LoginData {
    username: string,
    password: string,
    expiresInMins: number
}

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_DUMMY_AUTH_URL,
    headers: {}
});

const retrieveLocalStorage = <T> (key: string) => {
    const object = localStorage.getItem(key) || '';
    if(!object) {
        return {} as T;
    }
    const parse = JSON.parse(object);
    return parse as T;

}

axiosInstance.interceptors.request.use(request => {
        if(request.method?.toUpperCase() === "GET"){
            request.headers.Authorization = 'Bearer ' + retrieveLocalStorage<IUserWithToken>('user').accessToken;
        }
    return request
})

export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithToken> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithToken>('/login', {username, password, expiresInMins});
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens
}



export const loadAuthProducts = async (): Promise<IProduct[]> => {
    const {data} = await axiosInstance.get<IProductsResponseModel>('/products');
    return data.products
}

export const refresh = async () => {
    const userWithTokens = retrieveLocalStorage<IUserWithToken>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: userWithTokens.refreshToken,
        expiresInMins: 1});
    console.log(accessToken);
    console.log(refreshToken);

    userWithTokens.accessToken = accessToken;
    userWithTokens.refreshToken = refreshToken;

    localStorage.setItem('user', JSON.stringify(userWithTokens));
}
