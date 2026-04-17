import {useEffect, useState} from "react";
import {loadAuthProducts, refresh} from "../../services/api.service.ts";
import type {IProduct} from "../../models/IProduct.ts";
import ProductComponent from "../product/ProductComponent.tsx";

const AuthResourceComponent = () => {

    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        loadAuthProducts()
            .then(products => {
                setProducts(products);
            })
            .catch(reason => {
                console.log(reason)
                refresh()
                    .then(() => loadAuthProducts())
                    .then(products => {
                        console.log(products)
                        setProducts(products)
                    })
            })
    }, []);

    return (
        <div>
            {
                products.map(product => <ProductComponent key={product.id} product={product}/>)
            }

        </div>
    );
};

export default AuthResourceComponent;
