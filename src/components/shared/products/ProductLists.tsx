import "../../../assets/styles/listings.css";
import ProductCards from "./ProductCards";
import { ProductInfo } from "../../../store/types/productInterfaces";

type Props = {
  productData: ProductInfo[];
};

const ProductLists: React.FC<Props> = ({ productData }) => {
  return (
    <div id="productpage">
      <div id="productlist">
        {productData.map((product) => {
          return <ProductCards product={product} key={product.sku} />;
        })}
      </div>
    </div>
  );
};

export default ProductLists;
