import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type ICart from "../../models/ICart.ts";
import type {ICartResponseModel} from "../../models/ICartResponseModel.ts";
import {cartService} from "../../services/api.service.ts";
import CartComponent from "../cart-component/CartComponent.tsx";


const CartsComponent = () => {
    const {id} = useParams()

    const [carts, setCarts] = useState<ICart[]>([])

    useEffect(() => {
        if(id){
            cartService.getCartsOfUsers(id)
                .then(({carts}: ICartResponseModel) => {
                    setCarts(carts);
                })
        }
    }, [id]);
    return (
        <div>
            {
                carts.map(cart => <CartComponent key={cart.id} cart={cart}/>)
            }
        </div>
    );
};

export default CartsComponent;
