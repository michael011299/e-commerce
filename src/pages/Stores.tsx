import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getStores } from "../services/citySearchServices";
import StoreList from "../components/features/Stores/StoreList";
import { StoresInterface } from "../store/types/cityInterface";
import "../assets/styles/stores.css";

const Stores = () => {
  const [citySearch, setCitySearch] = useState<string>("");
  const [cityData, setCityData] = useState<StoresInterface[]>();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setCitySearch(e.target.value);
  };

  useEffect(() => {
    getStores(citySearch)
      .then((data) => {
        setCityData(data);
      })
      .catch((err) => console.log(err));
  }, [citySearch]);

  if (cityData === undefined || cityData.length === 0) {
    return (
      <div id="stores">
        <Form onSubmit={(e) => handleSubmit(e)} id="storesearch">
          <Form.Label htmlFor="mapsearch" style={{ color: "white" }}>
            <h3>Search for your city</h3>
          </Form.Label>
          <Form.Control
            type="text"
            id="mapsearch"
            value={citySearch}
            onChange={handleSubmit}
          />
          <p style={{ color: "white" }}>Please enter a valid city</p>
        </Form>
      </div>
    );
  } else {
    return (
      <div id="stores">
        <Form onSubmit={(e) => handleSubmit(e)} id="completeSearch">
          <Form.Label htmlFor="mapsearch" style={{ color: "white" }}>
            Search for your city
          </Form.Label>
          <Form.Control
            type="text"
            id="mapsearch"
            value={citySearch}
            onChange={handleSubmit}
          />
          <p style={{ color: "white", margin: "5px" }}>
            Your search has {cityData.length} results :
          </p>
        </Form>
        <StoreList cityData={cityData} />
      </div>
    );
  }
};

export default Stores;
