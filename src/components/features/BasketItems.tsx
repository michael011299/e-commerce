import { Card } from "react-bootstrap";
import { ProductInfo } from "../../store/types/productInterfaces";
import StaticStarRating from "../shared/Rating/StaticStarRating";
import RemoveItemButton from "../shared/buttons/RemoveItemButton";

interface ProductProps {
  product: ProductInfo;
}

const BasketItems: React.FC<ProductProps> = ({ product }) => {
  if (product === undefined || product === null) {
    <p>Oops there was a problem loading your products</p>;
  }

  return (
    <Card style={{ margin: "2%" }} key={Math.random()}>
      <div id="basketcard">
        <a
          href={`/product/${product.sku}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div id="left">
            <h3>{product.name}</h3>
            <StaticStarRating
              rating={product.customerReviewAverage}
              quantity={product.customerReviewCount}
            />
          </div>
        </a>
        <img src={product.image} alt="" id="center" />
        <div id="right">
          <p>Quantity: </p>
          <p>Price: £{product.salePrice}</p>
          <RemoveItemButton product={product} />
        </div>
      </div>
    </Card>
  );
};

export default BasketItems;
