import "../../../assets/styles/nav.css";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../store/redux/userStore";
import { Button } from "react-bootstrap";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Button
      variant="danger"
      style={{
        width: "100px",
        justifyContent: "center",
        marginTop: "auto",
        marginBottom: "auto",
      }}
      onClick={() => {
        handleLogout();
        window.location.href = "http://localhost:3000/";
      }}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
