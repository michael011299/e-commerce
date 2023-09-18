import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleProductFetch } from "../../../../services/singleProductService";
import "../../../../assets/styles/singleproduct.css";
import Accord from "./Accord";
import SingleProductData from "./SingleProductData";
import ProductImage from "./ProductImage";
import Loading from "../../../shared/Loading";
import { ProductInfo } from "../../../../store/types/productInterfaces";

const SingleProduct = () => {
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState<ProductInfo[]>([]);
  const { productID } = useParams();

  useEffect(() => {
    getSingleProductFetch(productID)
      .then((product: any) => {
        setProductData(product);
        setLoading(false);
      })
      .catch((err: any) => console.log(err));
  }, [productID]);

  if (loading || productData === undefined) {
    return (
      <div style={{ color: "white" }}>
        <Loading />
      </div>
    );
  } else {
    return (
      <div id="singleproductpage">
        <p style={{ color: "white" }}>
          {productData[0].categoryPath.map((cat: any) => {
            return `${Object.values(cat)} > `;
          })}
        </p>
        <div id="product">
          <ProductImage productData={productData} />
          <SingleProductData productData={productData} />
        </div>
        <Accord productData={productData} />
      </div>
    );
  }
};
export default SingleProduct;
