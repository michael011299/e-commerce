import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Container, Form } from "react-bootstrap";
import { createUser, getUser } from "../services/signUpService";
import { createBasket } from "../services/basketServices";
import { setUserID, setUsername } from "../store/redux/userStore";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUser] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const dispatch = useDispatch();

  const userDetails = {
    email,
    username,
    password,
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsernameValue(storedUsername);
    }
  }, []);

  const handleSubmit = () => {
    createUser(userDetails)
      .then(() => {
        getUser(username).then((res) => {
          createBasket(res[0].user_id);
          dispatch(setUsername(res[0].username));
          localStorage.setItem("username", res[0].username);
          dispatch(setUserID(res[0].user_id));
        });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        window.location.href = "/";
      });
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUser(e.target.value);
    setUsernameValue(e.target.value);
  };

  return (
    <Container id="login">
      <Form style={{ padding: "1%" }} onSubmit={handleSubmit}>
        <h1 style={{ color: "white" }}>Sign Up</h1>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          value={email}
          onChange={(e) => handleEmailChange(e)}
        >
          <Form.Label style={{ color: "white" }}>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="username"
          onChange={(e) => handleUsernameChange(e)}
          value={username}
        >
          <Form.Label style={{ color: "white" }}>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter new username" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
          onChange={(e) => handlePassChange(e)}
          value={password}
        >
          <Form.Label style={{ color: "white" }}>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="success" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
