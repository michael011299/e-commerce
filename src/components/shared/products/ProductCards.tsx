import { Card } from "react-bootstrap";
import StaticStarRating from "../Rating/StaticStarRating";
import { ProductInfo } from "../../../store/types/productInterfaces";

interface ProductProps {
  product: ProductInfo;
}

const ProductCards: React.FC<ProductProps> = ({ product }) => {
  return (
    <>
      <a
        href={`/product/${product.sku}`}
        style={{ textDecoration: "none" }}
        key={product.sku}
      >
        <Card id="productcards" key={product.sku}>
          <div id="imgcontainer">
            <img id="productimg" src={product.image} alt="product pic" />
          </div>
          <div id="productdetails">
            <Card.Title id="producttitle">{product.name}</Card.Title>
            <ul>
              <li>RRP : £{product.regularPrice}</li>
              {product.regularPrice === product.salePrice ? (
                <li>Not currently on offer</li>
              ) : (
                <li style={{ color: "red", fontWeight: "bold" }}>
                  <em>Sale : £{product.salePrice}</em>
                </li>
              )}
              <li>
                Shipping -
                {!product.shippingCost && product.shippingCost !== 0 ? (
                  <>£{product.shippingCost}</>
                ) : (
                  <>Free</>
                )}
              </li>
            </ul>
            <StaticStarRating
              rating={product.customerReviewAverage}
              quantity={product.customerReviewCount}
            />
            <p>Click on the product for more details!</p>
          </div>
        </Card>
      </a>
    </>
  );
};
export default ProductCards;
