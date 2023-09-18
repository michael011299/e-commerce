import Carousel from "react-bootstrap/Carousel";
import "../../../assets/styles/home.css";
import StaticStarRating from "../../shared/Rating/StaticStarRating";
import { Link } from "react-router-dom";
const { products } = require("../../../constants/topProds.json");

const TopProdCar = () => {
  return (
    <Carousel touch style={{ textAlign: "center", height: "100%" }} id="car">
      <h2 style={{ color: "black" }}>Trending Products:</h2>
      {products.map((product: any) => {
        return (
          <Carousel.Item className="item" key={product.sku}>
            <Link
              to={`/product/${product.sku}`}
              key={product.sku}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <img id="itemimg" src={product.image} alt="product" />
              <div id="itemdetails">
                <h4 id="itemtitle">{product.name}</h4>
                <ul style={{ listStyle: "none" }}>
                  {product.regularPrice === product.salePrice ? (
                    <li>£{product.regularPrice}</li>
                  ) : (
                    <li>
                      Was: £{product.regularPrice} -
                      <strong style={{ color: "red" }}>
                        Now: £{product.salePrice}
                      </strong>
                    </li>
                  )}
                  <li>
                    <StaticStarRating
                      rating={product.customerReviewAverage}
                      quantity={product.customerReviewCount}
                    />
                    Rank: #{product.rank}
                  </li>
                </ul>
              </div>
            </Link>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default TopProdCar;
