import type {FC} from "react";
import type {ProductModel} from "../../models/ProductModel.ts";
import './Product.css'

type ProductPropsType = {
    product: ProductModel;
}

const Product: FC<ProductPropsType> = ({product}) => {
    return (
        <div className={'product'}>
            <h2>{product.title} - {product.id}</h2>
            <h3>Description: {product.description}</h3>
            <p>Category: {product.category}</p>
            <p>Price: {product.price} UAH</p>
            <p>Discount: {product.discountPercentage}%</p>
            <p>Rating {product.rating}</p>
            <p>Stock: {product.stock}</p>
            <h3>Tags</h3>
            <ul>
                {
                    product.tags.map(tag => <li>{tag}</li>)
                }
            </ul>
            <p>Brand: {product.brand}</p>
            <p>SKU: {product.sku}</p>
            <p>Weight: {product.weight}</p>
            <h3>Dimensions</h3>
            <h4>Width - {product.dimensions.width}</h4>
            <h4>Height - {product.dimensions.height}</h4>
            <h4>Depth - {product.dimensions.depth}</h4>
            <p>Warranty Information: {product.warrantyInformation}</p>
            <p>Shipping Information: {product.shippingInformation}</p>
            <p>Availability Status: {product.availabilityStatus}</p>
            <h3>Reviews</h3>
            {
                product.reviews.map((review, index) =>
                <div className={'review'} key={index}>
                    <h3>Rating: {review.rating}</h3>
                    <p>{review.comment}</p>
                    <p>{review.reviewerName}</p>
                    <p>{review.reviewerEmail}</p>
                </div>)
            }
            <p>Return Policy: {product.returnPolicy}</p>
            <p>Minimum Order Quantity: {product.minimumOrderQuantity}</p>
            <h3>Meta</h3>
            <h4>Created At: {product.meta.createdAt}</h4>
            <h4>Updated At: {product.meta.updatedAt}</h4>
            <h4>Barcode: {product.meta.barcode}</h4>
            <img src={product.meta.qrCode} alt="qerCode"/>
            {
                product.images.map((img, index) => <img key={index} src={img} alt={product.title}/>)
            }
            <img src={product.thumbnail} alt={product.title}/>
        </div>
    );
};

export default Product;
