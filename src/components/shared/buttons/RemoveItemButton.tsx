import { Button } from "react-bootstrap";
import { removeItem } from "../../../services/basketServices";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/redux/userStore";

const RemoveItemButton = (product: any) => {
  const user_id = useSelector((state: RootState) => state.user.user_id);

  const handleRemove = () => {
    removeItem(user_id, product.product);
    window.location.href = "/basket";
  };
  return (
    <Button type="submit" variant="danger" onClick={handleRemove}>
      Remove from Basket
    </Button>
  );
};

export default RemoveItemButton;
