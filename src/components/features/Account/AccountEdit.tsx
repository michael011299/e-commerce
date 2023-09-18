import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/redux/userStore";
import { updateUser } from "../../../services/signUpService";
import { useState } from "react";
import { setUsername } from "../../../store/redux/userStore";
import { useDispatch } from "react-redux";

export const AccountEdit = ({ editShow, setEditShow }: any) => {
  const user_id = useSelector((state: RootState) => state.user.user_id);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    updateUser(user_id, newUsername, newPassword)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    dispatch(setUsername(newUsername));
    setNewPassword("");
    setNewUsername("");
    window.location.href = "/account";
  };

  const handlePass = (e: any) => {
    console.log(e.target.value);
    setNewPassword(e.target.value);
  };

  const handleUsername = (e: any) => {
    setNewUsername(e.target.value);
  };

  if (editShow) {
    return (
      <Modal show={editShow}>
        <Modal.Header>
          <Modal.Title>Update User Details:</Modal.Title>
          <Button variant="danger" onClick={() => setEditShow(false)}>
            X
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">
                Update Username :{" "}
              </InputGroup.Text>
              <Form.Control
                value={newUsername}
                onChange={(e) => handleUsername(e)}
                aria-label="house number"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">
                Set New Password :{" "}
              </InputGroup.Text>
              <Form.Control
                value={newPassword}
                onChange={(e) => handlePass(e)}
                aria-label="street name"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <Button variant="success" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  } else {
    return <></>;
  }
};
