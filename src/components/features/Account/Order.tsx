import { Card } from "react-bootstrap";

export const Order = ({ orderHistory }: any) => {
  if (orderHistory.length === 0 || orderHistory === undefined) <></>;
  else
    return orderHistory.map((order: any) => {
      const items = JSON.parse(order.products);
      return (
        <>
          <Card style={{ margin: "2%", padding: "2%" }} key={Math.random()}>
            <Card.Header>
              <Card.Title>Order Number: #{order.order_id}</Card.Title>
              <Card.Title>{order.date}</Card.Title>
              <Card.Text style={{ fontSize: "large" }}>
                Shipping to: {order.address}
              </Card.Text>
            </Card.Header>
            <Card.Body>
              Items:
              {items.map((prod: any) => {
                return (
                  <li
                    key={Math.random()}
                    style={{ fontSize: "medium", listStyle: "none" }}
                  >
                    {prod.name}
                  </li>
                );
              })}
            </Card.Body>
            <Card.Footer>
              <Card.Text style={{ fontSize: "large" }}>
                Total: £{order.totalprice}
              </Card.Text>
            </Card.Footer>
          </Card>
        </>
      );
    });
};
