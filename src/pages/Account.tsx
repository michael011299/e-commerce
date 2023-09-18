import { useSelector } from "react-redux";
import { RootState } from "../store/redux/userStore";
import { useEffect, useState } from "react";
import { getOrders } from "../services/orderService";
import { getAddress } from "../services/addressService";
import { Address } from "../components/features/Account/Address";
import { Order } from "../components/features/Account/Order";
import { AccountEdit } from "../components/features/Account/AccountEdit";
import { Button } from "react-bootstrap";

const Account = () => {
  const user_id = useSelector((state: RootState) => state.user.user_id);
  const username = useSelector((state: RootState) => state.user.username);
  const [orderHistory, setOrderHistory] = useState([]);
  const [addressData, setAddressData] = useState([]);
  const [show, setShow] = useState(true);
  const [editShow, setEditShow] = useState(false);

  useEffect(() => {
    getOrders(user_id).then((data) => {
      setOrderHistory(data);
    });
    getAddress(user_id).then((info) => {
      setAddressData(info);
    });
  }, [user_id]);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => setShow(true)}
          style={
            show
              ? {
                  width: "45%",
                  margin: "1%",
                  borderRadius: "20px",
                  border: "solid white 2px",
                  backgroundColor: "#e9b1cf",
                }
              : {
                  width: "45%",
                  margin: "1%",
                  borderRadius: "20px",
                  border: "solid #e9b1cf 2px",
                }
          }
        >
          <h2>Account Details</h2>
        </button>
        <button
          onClick={() => setShow(false)}
          style={
            show
              ? {
                  color: "rgba(0, 0, 0, 0.825)",
                  width: "45%",
                  margin: "1%",
                  borderRadius: "20px",
                  border: "solid #e9b1cf 2px",
                }
              : {
                  color: "rgba(0, 0, 0, 0.825)",
                  backgroundColor: "#e9b1cf",
                  width: "45%",
                  margin: "1%",
                  borderRadius: "20px",
                  border: "solid white 2px",
                }
          }
        >
          <h2>Order History</h2>
        </button>
      </div>
      {show ? (
        <>
          <div style={{ color: "white", margin: "1%" }}>
            <h3>Account Details: </h3>
            <p>Current Username: {username}</p>
            <p>Password: ******</p>
            <Button onClick={() => setEditShow(true)}>Edit Account</Button>
            {editShow ? (
              <AccountEdit editShow={editShow} setEditShow={setEditShow} />
            ) : (
              <></>
            )}
          </div>
          <div style={{ margin: "1%" }}>
            <Address addressData={addressData} />
          </div>
        </>
      ) : (
        <Order orderHistory={orderHistory} />
      )}
    </>
  );
};
export default Account;
