import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { Container, Dropdown, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/redux/userStore";
import { getAddress } from "../../../services/addressService";
import { AddressModalCheckout } from "../Account/AddressModalCheckout";
import { useDispatch } from "react-redux";
import { setDeliveryAddress } from "../../../store/redux/userStore";

const Payment: React.FC = () => {
  const totalPrice = useSelector((state: RootState) => state.user.basketTotal);
  const user_id = useSelector((state: RootState) => state.user.user_id);
  const [deliverAddress, setDeliverAddress] = useState("");
  const [addressData, setAddressData] = useState([]);
  const [stripePromise, setStripePromise] =
    useState<Promise<Stripe | null> | null>(null);
  const [clientSecret, setClientSecret] = useState<string>("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/config")
      .then(async (r) => {
        const { publishableKey } = await r.json();
        setStripePromise(loadStripe(publishableKey));
      })
      .catch((error) => {
        console.error("Error fetching config:", error);
      });
  }, []);

  useEffect(() => {
    getAddress(user_id).then((data) => {
      setAddressData(data);
    });
  }, [user_id]);

  useEffect(() => {
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalPrice }),
    })
      .then(async (result) => {
        let { clientSecret } = await result.json();
        setClientSecret(clientSecret);
      })
      .catch((error) => {
        console.error("Error creating payment intent:", error);
      });
  }, [totalPrice]);

  return (
    <Container
      style={{
        width: "90%",
        backgroundColor: "white",
        padding: "2%",
        borderRadius: "5px",
        border: "solid pink 2px",
      }}
    >
      <h1 style={{ color: "black" }}>Payment Total - £{totalPrice}</h1>

      {addressData.length > 0 ? (
        <>
          <div
            style={{
              padding: "1%",
              display: "grid",
              gridTemplateColumns: "auto auto",
            }}
          >
            <Dropdown style={{ width: "100%" }}>
              <Dropdown.Toggle variant="success">
                Select Existing Address
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {addressData.map((address: any) => (
                  <Dropdown.Item
                    onClick={() => {
                      dispatch(
                        setDeliveryAddress(
                          `${address.house_num}, ${address.street_name}, ${address.town}, ${address.postcode}`
                        )
                      );
                      setDeliverAddress(
                        `${address.house_num}, ${address.street_name}, ${address.town}, ${address.postcode}`
                      );
                    }}
                  >
                    {address.house_num}, {address.street_name}, {address.town},{" "}
                    {address.postcode}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button onClick={() => setShow(!show)} style={{ width: "50%" }}>
              Add new for checkout
            </Button>
          </div>
          {show ? (
            <AddressModalCheckout setDeliverAddress={setDeliverAddress} />
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
      <h4>Delivery Address: {deliverAddress}</h4>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </Container>
  );
};

export default Payment;
