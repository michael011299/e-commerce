import { Modal, Button } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { StoresInterface } from "../../../store/types/cityInterface";

type SingleStoreProps = {
  city: StoresInterface;
  show: any;
  handleClose: () => void;
  index: number;
};

const SingleStore: React.FC<SingleStoreProps> = ({
  city,
  show,
  handleClose,
}) => {
  const openHours = city.hoursAmPm.split(";");
  const final = [];
  for (let i = 0; i < 7; i++) {
    final.push(openHours[i]);
  }
  return (
    <Modal show={show} onHide={handleClose} id="storemodal">
      <Modal.Header closeButton>
        <Modal.Title>Store: {city.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>City: {city.city}</li>
          {city.phone === "999-999-9999" ? <></> : <li>Phone: {city.phone}</li>}
          <li>Postal Code: {city.fullPostalCode}</li>
          <li>State: {city.region}</li>
          <li>Store Type: {city.storeType}</li>
        </ul>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Store Services</Accordion.Header>
            <Accordion.Body>
              {city.services !== undefined ? (
                <ul>
                  {city.services.map((service) => {
                    return <li>{service.service}</li>;
                  })}
                </ul>
              ) : (
                <p>no services</p>
              )}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Opening hours</Accordion.Header>
            <Accordion.Body>
              {final !== undefined ? (
                <ul>
                  {final.map((hours) => {
                    return <li key={Math.random()}>{hours}</li>;
                  })}
                </ul>
              ) : (
                <p>no data for this store</p>
              )}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {city.lat === null || city.lng === null ? (
          <p></p>
        ) : (
          <iframe
            title="store-iframe"
            width="100%"
            height="50%"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD_bYxbK8MQn8_dkTNfxUqNVv9NomBmfFQ&q=${city.lat},${city.lng}`}
          ></iframe>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SingleStore;
