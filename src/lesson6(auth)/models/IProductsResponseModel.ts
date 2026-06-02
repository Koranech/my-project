import type {IProduct} from "./IProduct.ts";

export type IProductsResponseModel = {
    total: number,
    skip: number,
    limit: number,
    products: IProduct[],
}
