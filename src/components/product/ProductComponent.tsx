import type {FC} from "react";
import type {IProduct} from "../../models/IProduct.ts";

type ProductPropsType = {
    product: IProduct
}
const ProductComponent: FC<ProductPropsType> = ({product}) => {
    return (
        <div>
            <h2>{product.id} - {product.title}</h2>
            <hr/>
        </div>
    );
};

export default ProductComponent;
