import { getPopularProducts } from "../services/trendingServices";
import { useEffect, useState } from "react";
import "../assets/styles/home.css";
import CategoryCards from "../components/features/Home/CategoryCards";
import { U } from "../store/types/homeInterface";
import TopProdCar from "../components/features/Home/TopProdCar";
import PopularProducts from "../components/features/Home/PopularProducts";
import TopBrands from "../components/features/Home/TopBrands";

const Home = () => {
  const [popularData, setPopularData] = useState<U[]>([]);

  useEffect(() => {
    getPopularProducts()
      .then((res) => {
        setPopularData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home">
      <div id="topleft">
        <CategoryCards />
      </div>
      <div id="topright">
        <TopProdCar />
      </div>
      <div id="bottomleft">
        <TopBrands />
      </div>
      <div id="bottomright">
        <PopularProducts popularData={popularData} />
      </div>
    </div>
  );
};

export default Home;
