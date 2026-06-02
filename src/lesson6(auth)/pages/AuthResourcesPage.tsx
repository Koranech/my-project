import {useEffect, useState} from "react";
import {loadAuthProducts, refresh} from "../services/api.services.ts";
import type {IProduct} from "../models/IProduct.ts";

const AuthResourcesPage = () => {

    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        loadAuthProducts()
            .then(products => setProducts(products))
            .catch(reason => {
            console.log(reason);
            refresh()
                .then( () => {
                    loadAuthProducts()
                        .then(value => setProducts(value))
                })
            })
    }, []);
    return (
        <>
            {
                products.map(product => <div key={product.id}>
                    <h2>{product.id} - {product.title}</h2>
                </div>)
            }
        </>
    );
};

export default AuthResourcesPage;
