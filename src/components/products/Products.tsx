import {useEffect, useState} from "react";
import type {ProductModel} from "../../models/ProductModel.ts";
import {getProducts} from "../../services/api.sevice.ts";
import './Products.css'
import Product from "../product/Product.tsx";


const Products = () => {
    const [products, setProducts] = useState<ProductModel[]>([])
    useEffect(() => {
        const fetchData = async() => {
            const products = await getProducts()
            setProducts(products)
        }
        fetchData()
    }, [])
    return (
        <div className="products">
            {
                products.map(product => <Product key={product.id} product={product}/>)
            }
        </div>
    );
};

export default Products;
