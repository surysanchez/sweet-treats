import { useParams } from "react-router-dom";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import './TreatDetailPage.css'

export default function TreatDetailPage({ treats }) {

  let { treatName } = useParams();
  let treat = treats.find((t) => t.name === treatName);
  return (
    <>
      <Container fluid>
        <Card
          // style={{ width: "18rem", height: "18rem" }}
         className="card-detail"
        >
          <Figure.Caption>{treat.name.toUpperCase()}</Figure.Caption>
          <Card.Img
            style={{
              // width: "14rem", height: "18rem",
              background: "no-repeat center",
              WebkitBackgroundSize: "cover",
            }}
            className="img"
            alt=""
            src={treat.picture}
          />
          
          {/* <Figure>
       {treat.description}
      </Figure> */}
          <Figure>${treat.price}</Figure>
          <br />
          {/* <Button variant="outline-success">Add To Cart</Button> */}
          {/* <button onClick={() => onAdd(treat)}>Add To Cart </button> */}
        </Card>
      </Container>

      {/* <h1>Reviews</h1>
    <PostForm /> */}
    </>
  );
}
