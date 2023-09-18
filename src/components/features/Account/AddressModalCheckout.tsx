import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setDeliveryAddress } from "../../../store/redux/userStore";

export const AddressModalCheckout = ({ setDeliverAddress }: any) => {
  const [postcode, setPostcode] = useState("");
  const [streetname, setStreetname] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [town, setTown] = useState("");
  const dispatch = useDispatch();

  return (
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
        <InputGroup.Text id="inputGroup-sizing-sm">Street name</InputGroup.Text>
        <Form.Control
          aria-label="street name"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e) => setStreetname(e.target.value)}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Postcode</InputGroup.Text>
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
      <Button
        onClick={() => {
          setDeliverAddress(
            `${houseNumber}, ${streetname}, ${postcode}, ${town}`
          );
          dispatch(
            setDeliveryAddress(
              `${houseNumber}, ${streetname}, ${postcode}, ${town}`
            )
          );
        }}
      >
        Update
      </Button>
    </Form>
  );
};
