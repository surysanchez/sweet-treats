import { Component } from "react";
import { signUp } from '../../utilities/users-service';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button, Container } from "react-bootstrap";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  // The object passed to setState is merged with the current state object
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
        // We don't want to send the 'error' or 'confirm' property,
  //  so let's make a copy of the state object, then delete them
  const {name, email, password} = this.state
  const formData = {name, email, password}
    // The promise returned by the signUp service method 
  // will resolve to the user object included in the
  // payload of the JSON Web Token (JWT)
  const user = await signUp(formData);
    this.props.setUser(user);
    } catch {
      // An error occurred 
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }

  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <>
      <Container fluid>
        <Form autoComplete="off" onSubmit={this.handleSubmit}>
          {/* <Form.Label column sm="2">
            Name
          </Form.Label> */}
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"></InputGroup.Text>
            <Form.Control
              name="name"
              type="text"
              placeholder="Name"
              aria-describedby="basic-addon1"
              required
              value={this.state.name}
              onChange={this.handleChange}
              as="textarea"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              name="email"
              type="email"
              placeholder="Email"
              aria-describedby="basic-addon2"
              required
              value={this.state.email}
              onChange={this.handleChange}
              as="textarea"
            />
            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
          </InputGroup>

          <Form.Group className="mb-3" controlId="formPlaintextPassword">
            <Form.Control
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPlaintextPassword">
            <Form.Control
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              type="password"
              placeholder="Confirm Password"
              required
            />
          </Form.Group>
          <Button type="submit">SIGN UP</Button>
        </Form>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </Container>
    </>
     
    );
  }
}
