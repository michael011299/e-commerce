import Form from "react-bootstrap/Form";
import { useState } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    window.location.href = `http://localhost:3000/search/${searchValue}`;
  };

  return (
    <Form
      onSubmit={(e) => handleSubmit(e)}
      id="search"
      style={{
        marginTop: "auto",
        marginBottom: "auto",
        width: "90%",
        borderRadius: "5px",
      }}
    >
      <Form.Control
        type="text"
        id="search"
        placeholder="Search for products"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </Form>
  );
};

export default SearchBar;
