import { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setUserID, setUsername } from "../store/redux/userStore";
import { getUser } from "../services/signUpService";

const Login = () => {
  const [username, setUsernameValue] = useState("");
  const [password, setPassword] = useState("");
  const [userNotExist, setUserNotExist] = useState(false);
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsernameValue(storedUsername);
    }
  }, []);

  const handleLogin = () => {
    console.log(username);
    getUser(username)
      .then((response) => {
        console.log(response);
        if (!response[0]) {
          setUserNotExist(true);
          console.log("no user");
        } else if (response[0].password !== password) {
          setUserNotExist(false);
          setPasswordIncorrect(true);
          console.log("pass");
        } else {
          setUserNotExist(false);
          setPasswordIncorrect(false);
          dispatch(setUsername(response[0].username));
          localStorage.setItem("username", response.username);
          dispatch(setUserID(response[0].user_id));
          console.log("here");
          window.location.href = "/";
        }
      })
      .catch((error) => console.error(error));
  };

  if (userNotExist || passwordIncorrect) {
    return (
      <Container id="login">
        <Form>
          <h1 style={{ color: "white" }}>Log in</h1>
          <Form.Group controlId="username">
            <Form.Label style={{ color: "white" }}>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsernameValue(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            controlId="formBasicPassword"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          >
            <Form.Label style={{ color: "white" }}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Label style={{ color: "red" }}>
              This user does not exist or password is incorrect, try again or
              please sign up
            </Form.Label>
          </Form.Group>
          <Button
            variant="success"
            onClick={() => handleLogin()}
            style={{ margin: "2px" }}
          >
            Log In
          </Button>
          <Button href="/signup">Sign Up</Button>
        </Form>
      </Container>
    );
  } else {
    return (
      <Container id="login">
        <Form>
          <h1 style={{ color: "white" }}>Log in</h1>
          <Form.Group controlId="username">
            <Form.Label style={{ color: "white" }}>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsernameValue(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            controlId="formBasicPassword"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          >
            <Form.Label style={{ color: "white" }}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Label style={{ color: "white" }}>
              Please log in or sign up
            </Form.Label>
          </Form.Group>

          <Button
            variant="success"
            onClick={handleLogin}
            style={{ margin: "2px" }}
          >
            Log In
          </Button>
          <Button href="/signup">Sign Up</Button>
        </Form>
      </Container>
    );
  }
};
export default Login;
