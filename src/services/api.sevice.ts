import type {ProductModel} from "../models/ProductModel.ts";

const productsURL = import.meta.env.VITE_API_URL + '/products'

export const getProducts = async (): Promise<ProductModel[]> => {
    const response = await fetch(productsURL)
        .then(value => value.json())
    return response.products;
}
