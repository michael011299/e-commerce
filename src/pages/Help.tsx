import { Button, Container, Form } from "react-bootstrap";
import "../assets/styles/contact.css";

const Help = () => (
  <Container style={{ textAlign: "center" }}>
    <h1 style={{ color: "white", margin: "1%" }}>Contact Form</h1>
    <Form
      id="fs-frm"
      name="simple-contact-form"
      accept-charset="utf-8"
      action="https://formspree.io/f/xaygqonn"
      method="post"
    >
      <div>
        <label
          htmlFor="full-name"
          style={{ color: "white", margin: "1%", borderRadius: "5px" }}
        >
          Full Name
        </label>
        <br />
        <input
          style={{ width: "50%", borderRadius: "5px" }}
          type="text"
          name="name"
          id="full-name"
          placeholder="First and Last"
        />
      </div>
      <div>
        <label
          htmlFor="email-address"
          style={{ color: "white", margin: "1%", borderRadius: "5px" }}
        >
          Email Address
        </label>
        <br />
        <input
          style={{ width: "50%", borderRadius: "5px" }}
          type="email"
          name="_replyto"
          id="email-address"
          placeholder="email@domain.tld"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          style={{ color: "white", margin: "1%", borderRadius: "5px" }}
        >
          Message
        </label>
        <br />
        <textarea
          style={{ width: "50%", borderRadius: "5px" }}
          rows={5}
          name="message"
          id="message"
          placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
        />
        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="Contact Form Submission"
        />
      </div>
      <Button variant="success" type="submit" style={{ margin: "1%" }}>
        Submit
      </Button>
    </Form>
  </Container>
);

export default Help;
