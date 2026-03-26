import type {ProductModel} from "./ProductModel.ts";


export interface ResponseDummyjson {
    products: ProductModel[];
    total: number,
    skip: number,
    limit: number,
}
