import { Accordion } from "react-bootstrap";
import { Props } from "../../../../store/types/productInterfaces";

const Accord: React.FC<Props> = ({ productData }) => {
  const product = productData[0];
  return (
    <>
      <Accordion id="features">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Description</Accordion.Header>
          <Accordion.Body>{product.longDescription}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Features</Accordion.Header>
          <Accordion.Body>
            {product.features.map((allFeatures) => {
              return <li key={Math.random()}>{allFeatures.feature}</li>;
            })}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Included Items</Accordion.Header>
          <Accordion.Body>
            {product.includedItemList.map((item) => {
              return <li key={Math.random()}>{item.includedItem}</li>;
            })}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br />
    </>
  );
};

export default Accord;
