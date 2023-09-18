import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import SingleStore from "./SingleStore";
import { StoresInterface } from "../../../store/types/cityInterface";

interface StoreProps {
  cityData: StoresInterface[];
}

const StoreList: React.FC<StoreProps> = ({ cityData }: any) => {
  const [show, setShow] = useState(-1);
  const handleClose = () => setShow(-1);
  const handleShow = (index: any) => setShow(index);

  return cityData.map((city: any, index: any) => {
    return (
      <Card id="storecard" key={Math.random()}>
        <Card.Title>{city.name}</Card.Title>
        <ul>
          <li key={Math.random()}>City: {city.city}</li>
          {city.phone === "999-999-9999" ? <></> : <li>Phone: {city.phone}</li>}
          <li key={Math.random()}>Postal Code: {city.fullPostalCode}</li>
          <li key={Math.random()}>State: {city.region}</li>
          <li key={Math.random()}>Store Type: {city.storeType}</li>
        </ul>
        <Button onClick={() => handleShow(index)}>See more details</Button>
        <SingleStore
          city={city}
          show={show === index}
          handleClose={handleClose}
          index={index}
        />
      </Card>
    );
  });
};

export default StoreList;
