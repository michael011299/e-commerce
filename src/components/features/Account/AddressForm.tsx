import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const AddressForm = ({
  setPostcode,
  setStreetname,
  setHouseNumber,
  setTown,
}: any) => {
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
    </Form>
  );
};

export default AddressForm;
