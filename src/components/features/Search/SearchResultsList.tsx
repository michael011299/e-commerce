import "../../../assets/styles/listings.css";
import ProductCards from "../../shared/products/ProductCards";

const SearchResultsList = ({ productData, searchValue }: any) => {
  const filter = productData.filter((prod: any) => {
    if (prod.name.includes(searchValue)) {
      return prod;
    }
  });
  return (
    <div id="productpage">
      <div id="productlist">
        {filter.length > 0
          ? filter.map((product: any) => {
              return <ProductCards product={product} key={product.sku} />;
            })
          : productData.map((product: any) => {
              return <ProductCards product={product} key={product.sku} />;
            })}
      </div>
    </div>
  );
};

export default SearchResultsList;
