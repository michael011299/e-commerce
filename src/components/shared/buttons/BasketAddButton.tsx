import Button from "react-bootstrap/Button";
import { addToBasket } from "../../../services/basketServices";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/redux/userStore";

const BasketAddButton = (product: any) => {
  const [color, setColor] = useState("primary");
  const [count, setCount] = useState(0);
  const user_id = useSelector((state: RootState) => state.user.user_id);

  const handleClick = (product: any) => {
    addToBasket(product, user_id);
    setCount(count + 1);
    setColor("success");
  };

  return (
    <Button variant={color} onClick={() => handleClick(product)}>
      Add To Basket {count > 0 ? <>- ({count})</> : <></>}
    </Button>
  );
};

export default BasketAddButton;
