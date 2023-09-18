import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "../../assets/styles/nav.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/redux/userStore";
import LogoutButton from "../shared/buttons/LogoutButton";
import SearchBar from "./SearchBar";
const image = require("../../assets/images/GL.jpg");

interface Category {
  [key: string]: string;
}

const categories: {
  allCats: Category[];
} = require("../../constants/categories.json");

const Navi: React.FC = () => {
  const username = useSelector((state: RootState) => state.user.username);

  return (
    <Navbar
      id="nav"
      expand="lg"
      style={{
        maxWidth: "100vw",
        position: "sticky",
        borderBottom: "2px white solid",
      }}
    >
      <Container>
        <Navbar.Brand
          id="brand"
          role="brand"
          href="/"
          style={{ float: "left", maxWidth: "100vw" }}
        >
          <img src={image} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ backgroundColor: "white", maxWidth: "100vw" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
            style={{
              maxWidth: "100%",
              color: "black",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            <SearchBar />
            <div id="details">
              <NavDropdown
                title="MENU"
                id="nav-dropdown"
                style={{
                  justifyContent: "center",
                  marginTop: "auto",
                  marginBottom: "auto",
                  zIndex: 9999,
                }}
              >
                {categories.allCats.map((cat: Category) => (
                  <NavDropdown.Item
                    href={`/categories/${Object.values(cat)}`}
                    key={`${Object.values(cat)}`}
                  >
                    {Object.keys(cat)}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Nav.Link
                href="/storelocator"
                id="nav-dropdown"
                style={{
                  justifyContent: "center",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                STORES
              </Nav.Link>
              <Nav.Link
                href="/basket"
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                BASKET
              </Nav.Link>
              {username.length > 0 ? (
                <>
                  <Nav.Link
                    href="/account"
                    id="nav-dropdown"
                    style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  >
                    ACCOUNT
                  </Nav.Link>
                  <LogoutButton />
                </>
              ) : (
                <>
                  <Nav.Link href="/login" className="navbuts" id="nav-dropdown">
                    <Button variant="success" style={{ width: "100px" }}>
                      Login
                    </Button>
                  </Nav.Link>
                  <Nav.Link href="/signup" id="nav-dropdown">
                    <Button variant="primary" style={{ width: "100px" }}>
                      Sign Up
                    </Button>
                  </Nav.Link>
                </>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navi;
