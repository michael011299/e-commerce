import { useSelector } from "react-redux";
import { RootState } from "../../../store/redux/userStore";
import { useEffect } from "react";
import { clearBasket, getBasket } from "../../../services/basketServices";
import { newOrder } from "../../../services/orderService";
import { v4 as uuidv4 } from "uuid";
import { Container } from "react-bootstrap";

const Completion = () => {
  const user_id = useSelector((state: RootState) => state.user.user_id);
  const totalPrice = useSelector((state: RootState) => state.user.basketTotal);
  const address = useSelector((state: RootState) => state.user.deliveryAddress);
  const order_id = uuidv4();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getBasket(user_id);
      const basketString = JSON.stringify(response);
      const date = new Date();
      const formattedDate = date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      });
      newOrder(user_id, order_id, basketString, totalPrice, formattedDate, address);
      clearBasket(user_id);
    };
    fetchData();
  }, []);

  return (
    <Container style={{ textAlign: "center", color: "white" }}>
      <h1>Order Complete! 🎉</h1>
      <p>Thank you for ordering with GL Store your Order ID is - {order_id}.</p>
      <p>
        To view your recent orders go to <a href='http://localhost:3000/account'> My Account</a>
      </p>
    </Container>
  );
};

export default Completion;
