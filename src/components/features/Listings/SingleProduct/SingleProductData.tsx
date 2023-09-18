import StaticStarRating from "../../../shared/Rating/StaticStarRating";
import { Props } from "../../../../store/types/productInterfaces";
import BasketAddButton from "../../../shared/buttons/BasketAddButton";

const SingleProductData: React.FC<Props> = ({ productData }) => {
  const product = productData[0];

  return (
    <div id="col2">
      <h2>{product.name}</h2>
      <ul>
        <p>
          <i>{product.longDescription}</i>
        </p>
        <li>RRP : £{product.regularPrice}</li>
        {product.regularPrice === product.salePrice ? (
          <></>
        ) : (
          <p style={{ color: "red" }}>
            <em>Sale Price: £{product.salePrice}</em>
          </p>
        )}
        <li>
          Shipping -
          {product.shippingCost === 0 ? (
            <>Free</>
          ) : (
            <>£{product.shippingCost}</>
          )}
        </li>

        <li>Manufacturer: {product.manufacturer}</li>
        <li>Color: {product.color}</li>
      </ul>
      <StaticStarRating
        rating={product.customerReviewAverage}
        quantity={product.customerReviewCount}
      />
      <BasketAddButton productData={product} />
    </div>
  );
};

export default SingleProductData;
