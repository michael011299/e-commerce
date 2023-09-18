//pages
import Account from "./pages/Account";
import Basket from "./pages/Basket";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Stores from "./pages/Stores";
//common
import Footer from "./components/common/Footer";
import Navi from "./components/common/Navi";
//features
import Login from "./pages/Login";
import SingleProduct from "./components/features/Listings/SingleProduct/SingleProduct";
import SignUp from "./pages/SignUp";
//functionality
import "./assets/styles/app.css";
import { Route, Routes } from "react-router-dom";
import Brand from "./components/features/Brand/Brand";
import Payment from "./components/features/Basket/Payment";
import Completion from "./components/features/Basket/Completion";
import SearchResults from "./components/features/Search/SearchResults";
import Help from "./pages/Help";

const App = () => {
  return (
    <>
      <Navi />
      <div id="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productID" element={<SingleProduct />} />
          <Route path="/categories/:categoryID" element={<Listings />} />
          <Route path="/storelocator" element={<Stores />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
          <Route path="/products/:brand" element={<Brand />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/completion" element={<Completion />} />
          <Route path="/search/:searchValue" element={<SearchResults />} />
          <Route path="/contact" element={<Help />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
