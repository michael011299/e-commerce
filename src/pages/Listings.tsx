import { useEffect, useState } from "react";
import { getProducts } from "../services/productServices";
import { ProductInfo } from "../store/types/productInterfaces";
import { useParams } from "react-router-dom";
import ProductLists from "../components/shared/products/ProductLists";
import Loading from "../components/shared/Loading";
import Filtering from "../components/features/Listings/filters/Filtering";
import PageNums from "../components/features/Listings/filters/PageNums";
import SortBy from "../components/features/Listings/filters/SortBy";

const Listings = () => {
  const { categoryID } = useParams();
  const [productData, setProductData] = useState<ProductInfo[]>();
  const [currentPage, setCurrentPage] = useState<string>();
  const [pageSize, setPageSize] = useState<string>();
  const [sort, setSort] = useState<string>();
  const [order, setOrder] = useState<string>();

  useEffect(() => {
    getProducts(categoryID, currentPage, pageSize, sort, order)
      .then((data) => {
        setProductData(data.products);
      })
      .catch((err) => console.log(err));
  }, [categoryID, currentPage, pageSize, sort, order]);

  if (productData === undefined) {
    return (
      <div style={{ color: "white" }}>
        <Loading />
      </div>
    );
  } else {
    const catPath = productData[0].categoryPath.map((path) => {
      return Object.values(path);
    });

    return (
      <>
        <h1 style={{ color: "white", textAlign: "center" }}>{catPath[1]}</h1>
        <div id="filters">
          <Filtering setPageSize={setPageSize} />
          <SortBy setSort={setSort} setOrder={setOrder} />
        </div>
        <ProductLists productData={productData} />
        <div id="pageNums">
          <PageNums setCurrentPage={setCurrentPage} currentPage={currentPage} />
          <br />
        </div>
      </>
    );
  }
};

export default Listings;
