import { useState } from "react";
import { updateAddress } from "../../../services/addressService";
import { Modal, InputGroup, Button, Form } from "react-bootstrap";

export const EditAddressModal = ({ show, setShow, address }: any) => {
  const [newHouseNum, setNewHouseNum] = useState(address.house_num);
  const [newStreetName, setNewStreetName] = useState(address.street_name);
  const [newPostcode, setNewPostcode] = useState(address.postcode);
  const [newTown, setNewTown] = useState(address.town);

  const handleSubmit = async () => {
    updateAddress(
      address.address_id,
      newHouseNum,
      newStreetName,
      newPostcode,
      newTown
    );
    window.location.href = "http://localhost:3000/account";
  };

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Edit Address</Modal.Title>
        <Button variant="danger" onClick={() => setShow(false)}>
          X
        </Button>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">
              House Number
            </InputGroup.Text>
            <Form.Control
              placeholder={`${address.house_num}`}
              aria-label="house number"
              aria-describedby="inputGroup-sizing-sm"
              onChange={(e) => setNewHouseNum(e.target.value)}
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">
              Street name
            </InputGroup.Text>
            <Form.Control
              placeholder={`${address.street_name}`}
              aria-label="street name"
              aria-describedby="inputGroup-sizing-sm"
              onChange={(e) => setNewStreetName(e.target.value)}
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">
              Postcode
            </InputGroup.Text>
            <Form.Control
              placeholder={`${address.postcode}`}
              aria-label="postcode"
              aria-describedby="inputGroup-sizing-sm"
              onChange={(e) => setNewPostcode(e.target.value)}
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Town</InputGroup.Text>
            <Form.Control
              placeholder={`${address.town}`}
              aria-label="town"
              aria-describedby="inputGroup-sizing-sm"
              onChange={(e) => setNewTown(e.target.value)}
            />
          </InputGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => setShow(false)}>
          Close
        </Button>
        <Button variant="success" type="submit" onClick={() => handleSubmit()}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
