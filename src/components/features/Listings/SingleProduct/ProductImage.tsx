import { Props } from "../../../../store/types/productInterfaces";

const ProductImage: React.FC<Props> = ({ productData }) => {
  return (
    <div id="col1">
      <img id="prodimg" src={productData[0].image} alt="product" />
    </div>
  );
};

export default ProductImage;
