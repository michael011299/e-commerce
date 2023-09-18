import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div style={{ textAlign: "center", padding: "20%" }}>
      <Spinner animation="border" />
      <br />
      <p>Please refresh if page fails to load</p>
    </div>
  );
};

export default Loading;
