import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBrand } from "../../../services/brandService";
import ProductLists from "../../shared/products/ProductLists";
import { ProductInfo } from "../../../store/types/productInterfaces";
import PageNums from "../Listings/filters/PageNums";
import "../../../assets/styles/listings.css";
import Filtering from "../Listings/filters/Filtering";
import SortBy from "../Listings/filters/SortBy";

const Brand = () => {
  const { brand } = useParams();
  const [productData, setProductData] = useState<ProductInfo[]>([]);
  const [currentPage, setCurrentPage] = useState<string>("1");
  const [pageSize, setPageSize] = useState<string>("20");
  const [sort, setSort] = useState<string>();
  const [order, setOrder] = useState<string>();
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    getBrand(brand, currentPage, pageSize, sort, order)
      .then((res) => {
        setTotalPages(res.totalPages);
        setProductData(res.products);
      })
      .catch((err) => console.log(err));
  }, [brand, currentPage, pageSize, sort, order]);

  return (
    <>
      <h1 style={{ textAlign: "center", color: "white" }}>{brand} products</h1>
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
};

export default Brand;
