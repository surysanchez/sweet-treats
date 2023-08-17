import { React, useState, useEffect } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useParams, useNavigate } from "react-router-dom";
import * as cakesAPI from "../../utilities/cakes-api";
import { Ocassion, size, filling, flavour } from "../../data.js";
import Container from "react-bootstrap/Container";

export default function UpdateCreatedCakeForm({ user, cakes, cakeId }) {
    const [cake, setCake] = useState({
      Ocassion: "",
      size: "",
      flavour: "",
      filling: "",
      comments: "",
    });
    const curCake = cakes.filter((cake) => cake._id !== cakeId);
  
    useEffect(function () {
      setCake(curCake);
    }, []);
  
    const navigate = useNavigate();
 
    const handleChange = (evt) => {
      // setTreat({ ...treat, [name]: value });
      setCake({ ...cake, [evt.target.name]: evt.target.value });
    };
  
    const handleSubmit = async (evt) => {
      evt.preventDefault();
      try {
        await cakesAPI.updateCake(cakeId, cake); 
  
        navigate("/mycakes"); // Redirect to the home page after successful creation
      } catch (error) {
        console.error(error);
      }
    };
    return (
      <>
        <br />
        <h2>Edit your Cake!</h2>
        <br />
        <Container fluid>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel controlId="floatingSelect" label="Select Ocassion">
              <Form.Select
                aria-label="Floating label select example"
                name="Ocassion"
                value={cake.Ocassion}
                onChange={handleChange}
              >
                <option>Open select menu</option>
                <option value={Ocassion[0]}>{Ocassion[0]}</option>
                <option value={Ocassion[1]}>{Ocassion[1]}</option>
                <option value={Ocassion[2]}>{Ocassion[2]}</option>
                <option value={Ocassion[3]}>{Ocassion[3]}</option>
                <option value={Ocassion[4]}>{Ocassion[4]}</option>
                <option value={Ocassion[5]}>{Ocassion[5]}</option>
                <option value={Ocassion[6]}>{Ocassion[6]}</option>
                <option value={Ocassion[7]}>{Ocassion[7]}</option>
                <option value={Ocassion[8]}>{Ocassion[8]}</option>
                <option value={Ocassion[9]}>{Ocassion[9]}</option>
                <option value={Ocassion[10]}>{Ocassion[10]}</option>
              </Form.Select>
            </FloatingLabel>
  
            <br />
            <FloatingLabel controlId="floatingSelect" label="Select Size">
              <Form.Select
                aria-label="Floating label select example"
                name="size"
                value={cake.size}
                onChange={handleChange}
              >
                <option>Size options</option>
                <option value={size[0]}>{size[0]}</option>
                <option value={size[1]}>{size[1]}</option>
                <option value={size[2]}>{size[2]}</option>
                <option value={size[3]}>{size[3]}</option>
                {/* <option value="{size[4]}">{size[4]}</option>
                 */}
              </Form.Select>
            </FloatingLabel>
  
            <br />
            <FloatingLabel controlId="floatingSelect" label="Select Flavour">
              <Form.Select
                aria-label="Floating label select example"
                name="flavour"
                value={cake.flavour}
                onChange={handleChange}
              >
                <option>Flavour menu</option>
                <option value={flavour[0]}>{flavour[0]}</option>
                <option value={flavour[1]}>{flavour[1]}</option>
                <option value={flavour[2]}>{flavour[2]}</option>
                <option value={flavour[3]}>{flavour[3]}</option>
                <option value={flavour[4]}>{flavour[4]}</option>
                <option value={flavour[5]}>{flavour[5]}</option>
                <option value={flavour[6]}>{flavour[6]}</option>
                <option value={flavour[7]}>{flavour[7]}</option>
              </Form.Select>
            </FloatingLabel>
  
            <br />
            <FloatingLabel controlId="floatingSelect" label="Select Filling">
              <Form.Select
                aria-label="Floating label select example"
                name="filling"
                value={cake.filling}
                onChange={handleChange}
              >
                <option>Filling menu</option>
                <option value={filling[0]}>{filling[0]}</option>
                <option value={filling[1]}>{filling[1]}</option>
                <option value={filling[2]}>{filling[2]}</option>
                <option value={filling[3]}>{filling[3]}</option>
                <option value={filling[4]}>{filling[4]}</option>
                <option value={filling[5]}>{filling[5]}</option>
                <option value={filling[6]}>{filling[6]}</option>
                <option value={filling[7]}>{filling[7]}</option>
              </Form.Select>
            </FloatingLabel>
            <br />
            {/* <FloatingLabel
          controlId="floatingInput"
          label="Details"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Specify custom shape" />
        </FloatingLabel>  */}
            <FloatingLabel
              controlId="floatingInput"
              label="Comments"
              name="comments"
              value={cake.comments}
              onChange={handleChange}
            >
              <Form.Control type="text" placeholder="Extra comments" />
            </FloatingLabel>
            <br />
            <Button type="submit" variant="primary">
              Save
            </Button>
          </Form>
        </Container>
      </>
    );
  }
  