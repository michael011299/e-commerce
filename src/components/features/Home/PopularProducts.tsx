import Loading from "../../shared/Loading";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
const image = require("../../../assets/images/topprod.jpg");

const PopularProducts = ({ popularData }: any) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <img
        onClick={() => setShow(!show)}
        src={image}
        alt="top products"
        style={{ height: "110%", width: "60%" }}
      />
    );
  } else {
    return popularData === undefined ? (
      <Loading />
    ) : (
      popularData.map((product: any) => (
        <a
          href={`/product/${product.sku}`}
          style={{ textDecoration: "none" }}
          key={Math.random()}
        >
          <Card id="popproducts" key={product.sku}>
            {product.names.title}
          </Card>
        </a>
      ))
    );
  }
};

export default PopularProducts;
