import { Card } from "react-bootstrap";
import "../../../assets/styles/home.css";
const categories = require("../../../constants/categories.json");

const CategoryCards = () => {
  return categories.topCats.map((cat: any) => (
    <a
      href={`/categories/${Object.values(cat)}`}
      key={`${Object.values(cat)}`}
      style={{ textDecoration: "none" }}
    >
      <Card id="cards">{Object.keys(cat)}</Card>
    </a>
  ));
};

export default CategoryCards;
