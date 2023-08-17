import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./ShowCakesForm.css";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";

export default function ShowCakesForm({
  user,
  setcakes,
  cake,
  cakeId,
  cakeOne,
  cakes,
  handleDelete,
}) {
//   console.log(cakeId);
  return (
    <>
      <Container fluid className="container">
        <Card
          style={{ width: "20rem", height: "18rem" }}
          className="create-card"
        >
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Badge bg="info">Ocassion/Celebration:</Badge> <br />
              {cake.Ocassion}
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <Badge bg="info"> Cake Size:</Badge> <br /> {cake.size}
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <Badge bg="info"> Cake Flavour: </Badge> <br />
              {cake.flavour}
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <Badge bg="info"> Cake Filling: </Badge> <br /> {cake.filling}
            </ListGroup.Item>
            <ListGroup.Item>  <Badge bg="info"> Comments: </Badge> <br /> {cake.comments}</ListGroup.Item>
          </ListGroup>
          <Button variant="warning">
            {" "}
            <Link to={`/update/${cakeId}`} cakes={cakes} setcakes={setcakes} cake={cake} >
              {" "}
              Edit
            </Link>
          </Button>
          <Button variant="danger" onClick={() => handleDelete(cake._id)}>
            Delete{" "}
          </Button>
        </Card>
      </Container>
    </>
  );
}
