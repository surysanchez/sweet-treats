import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button, Container } from "react-bootstrap";
export default function ContactPage() {

  return (
    <>
      <Container fluid>
        <h1>Contact us</h1>
        <h2 class="mb-4">Let's get in touch</h2>
        <Form
          action="https://getform.io/f/b12da849-c850-479e-9d92-3971380b9254"
          target="_blank"
          rel="noopener noreferrer"
          method="POST"
        >
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"></InputGroup.Text>
            <Form.Control
              name="name"
              placeholder="Name"
              aria-describedby="basic-addon1"
              required
              as="textarea"
            />
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <Form.Control
              name="email"
              placeholder="Email"
              aria-describedby="basic-addon2"
              required
              as="textarea"
            />
            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Text>(xxx) xxx-xxx</InputGroup.Text>
            <Form.Control
              name="phone number"
              pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
              type="tel"
              as="textarea"
              maxlength="12"
              required
              aria-describedby="basic-addon3"
            />
            <br />
          </InputGroup>
          <Form.Label htmlFor="basic-url">Details</Form.Label>

          <Form.Control
            as="textarea"
            name="message"
            placeholder="Message"
            aria-describedby="basic-addon1"
            required
            pattern=".{3,}"
            rows={4}
          />
          <br />
          <Button type="submit">Send</Button>
        </Form>
      </Container>
    </>
  );
}
