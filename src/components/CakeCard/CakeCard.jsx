import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function CakeCard({cake}) {
  return (
    <>
      <Container fluid >
        
        {/* <Link to={`/customtreat/${props.custom.name}`} className="treat-link"> */}
        <Card className="treat-card">
          <Card.Img
            style={{
              background: "no-repeat center",
              WebkitBackgroundSize: "cover",
            }}
            variant="top"
            src={cake.picture}
            className="img"
          />
          <Card.Body>
            <Card.Title>{cake.name}</Card.Title>
            {/* <Card.Text></Card.Text> */}
            {/* <Button variant="primary" */}

            {/* </Button> */}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
