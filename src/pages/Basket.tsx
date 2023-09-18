import { useEffect, useState } from "react";
import { getBasket } from "../services/basketServices";
import "../assets/styles/basket.css";
import { useSelector } from "react-redux";
import { RootState } from "../store/redux/userStore";
import { Container } from "react-bootstrap";
import BasketItems from "../components/features/BasketItems";
import Checkout from "../components/features/Basket/Checkout";
import { ProductInfo } from "../store/types/productInterfaces";

const Basket = () => {
  const [basketItems, setBasketItems] = useState<ProductInfo[]>([]);
  const user_id = useSelector((state: RootState) => state.user.user_id);

  useEffect(() => {
    getBasket(user_id)
      .then((data) => {
        setBasketItems(data);
      })
      .catch((error) => {
        console.error("Error fetching basket:", error);
      });
  }, [user_id]);

  if (user_id === 0) {
    return (
      <Container
        style={{ color: "white", textAlign: "center", padding: "20%" }}
      >
        <h1>Basket</h1>
        <p>
          Please <a href="/login">log in</a> or <a href="/signup">sign up</a> to
          see your basket
        </p>
      </Container>
    );
  }

  if (
    basketItems === undefined ||
    basketItems === null ||
    basketItems.length === 0
  ) {
    return (
      <div style={{ color: "white", textAlign: "center" }}>
        <h1>Basket</h1>
        <p>Browse the store and add items to your basket</p>
      </div>
    );
  } else {
    return (
      <div id="basket">
        <h1 style={{ color: "white", textAlign: "center" }}>Basket</h1>
        <div id="basketleft">
          {basketItems.map((product: any) => {
            if (product === null) {
              // eslint-disable-next-line array-callback-return
              return;
            } else return <BasketItems product={product} key={Math.random()} />;
          })}
        </div>
        <Checkout basketItems={basketItems} />
      </div>
    );
  }
};

export default Basket;
