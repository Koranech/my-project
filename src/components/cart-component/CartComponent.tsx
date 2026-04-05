import type {FC} from "react";
import type ICart from "../../models/ICart.ts";
import './CartComponent.css'

type CartPropsType = {
    cart: ICart
}

const CartComponent: FC<CartPropsType> = ({cart}) => {
    return (
        <div>
            <h1>Cart №{cart.id}, owner - {cart.userId}</h1>
            {
                cart.products.map(product =>
                <div key={product.id}>
                    <p><b>{product.id} - {product.title}</b></p>
                    <p>Price - {product.price}</p>
                    <p>Quantity - {product.quantity}</p>
                    <p>Total - {product.total}</p>
                    <p><b>Discount percentage -{product.discountPercentage}</b></p>
                    <img src={product.thumbnail} alt={product.title}/>
                    <hr/>
                </div>)
            }
            <p>Total -{cart.total}</p>
            <p>Total products - {cart.totalProducts}</p>
            <p>Total quantity - {cart.totalQuantity}</p>
        </div>
    );
};

export default CartComponent;

