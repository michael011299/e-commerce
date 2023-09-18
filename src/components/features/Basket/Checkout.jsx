import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setBasketTotal } from "../../../store/redux/userStore";

const Checkout = ({ basketItems }) => {
  const dispatch = useDispatch();
  const total = [];

  const basketSum = () => {
    basketItems.map((product) => {
      total.push(product.salePrice);
    });
    const sum = total.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const roundedSum = sum.toFixed(2);
    dispatch(setBasketTotal(roundedSum));
    localStorage.setItem("basketTotal", roundedSum);
    return roundedSum;
  };

  return (
    <Card id="basketright">
      <Card.Header>Checkout</Card.Header>
      <Card.Body>
        <p>Number of Items: {basketItems.length}</p>
        <p>Shipping - free</p>
      </Card.Body>
      <p>Total: £{basketSum()}</p>
      <Card.Footer>
        <a href="/payment">
          <Button variant="success" style={{ width: "100%" }}>
            Complete checkout
          </Button>
        </a>
      </Card.Footer>
    </Card>
  );
};

export default Checkout;
