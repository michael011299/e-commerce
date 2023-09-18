import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../assets/styles/home.css";
const companyLogo = require("../../../constants/brands.json");

const TopBrands: React.FC = () => {
  return companyLogo.brands.map((brand: string) => (
    <Link to={`/products/${Object.keys(brand)}`} key={Math.random()}>
      <Card id="brandpic">
        <img
          src={`${Object.values(brand)}`}
          alt="company logo"
          style={{
            height: "150px",
            width: "150px",
            margin: "auto",
          }}
        />
      </Card>
    </Link>
  ));
};
export default TopBrands;
