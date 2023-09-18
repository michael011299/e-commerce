import { useState } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/redux/userStore";
import { createAddress } from "../../../services/addressService";

const AddressModalAccount = ({ showModal, setShowModal }: any) => {
  const user_id = useSelector((state: RootState) => state.user.user_id);
  const [postcode, setPostcode] = useState("");
  const [streetname, setStreetname] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [town, setTown] = useState("");

  const handleSubmit = async (e: any) => {
    const house_num = Number(houseNumber);
    await createAddress(user_id, house_num, postcode, streetname, town);
    window.location.href = "http://localhost:3000/account";
  };

  return (
    <Modal show={showModal}>
      <Modal.Header>
        <Modal.Title>Add new address</Modal.Title>
        <Button variant="danger" onClick={() => setShowModal(false)}>
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
              aria-label="house number"
              aria-describedby="inputGroup-sizing-sm"
              onChange={(e) => setHouseNumber(e.target.value)}
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">
              Street name
            </InputGroup.Text>
            <Form.Control
              aria-label="street name"
              aria-describedby="inputGroup-sizing-sm"
              onChange={(e) => setStreetname(e.target.value)}
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">
              Postcode
            </InputGroup.Text>
            <Form.Control
              aria-label="postcode"
              aria-describedby="inputGroup-sizing-sm"
              onChange={(e) => setPostcode(e.target.value)}
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Town</InputGroup.Text>
            <Form.Control
              aria-label="town"
              aria-describedby="inputGroup-sizing-sm"
              onChange={(e) => setTown(e.target.value)}
            />
          </InputGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => setShowModal(false)}>
          Close
        </Button>
        <Button
          variant="success"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddressModalAccount;
