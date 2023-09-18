import { useEffect, useState } from "react";
import { productSearch } from "../../../services/productServices";
import { useParams } from "react-router-dom";
import Loading from "../../shared/Loading";
import Form from "react-bootstrap/Form";
import SearchResultsList from "./SearchResultsList";
const cats = require("../../../constants/categories.json");

const SearchResults = () => {
  const { searchValue } = useParams<string>();
  const [productData, setProductData] = useState([]);
  const [pageSize, setPageSize] = useState<string | any>();
  const [category, setCategory] = useState<string | any>();

  useEffect(() => {
    productSearch(searchValue, pageSize, category).then((res) => {
      console.log(res);
      setProductData(res.products);
    });
  }, [searchValue, pageSize, category]);

  if (productData === undefined) {
    return (
      <div style={{ color: "white" }}>
        <Loading />
      </div>
    );
  } else {
    return (
      <>
        <h2 style={{ color: "white" }}>"{searchValue}" results:</h2>
        <h4 style={{ color: "white" }}>Filter Category:</h4>
        {cats.allCats.map((cat: string) => {
          return (
            <Form.Check
              style={{ color: "white" }}
              inline
              label={Object.keys(cat)}
              name="group1"
              type="radio"
              id="inline-radio-1"
              onClick={() =>
                setCategory(`&(categoryPath.id=${Object.values(cat)})`)
              }
            />
          );
        })}
        <SearchResultsList
          productData={productData}
          searchValue={searchValue}
        />
      </>
    );
  }
};

export default SearchResults;
