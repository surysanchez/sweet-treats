import React from 'react'
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function TreatCard({treat}) {
  return (
    <>
    <Container fluid className='cards-box'>
        <Card  className="treat-card" >
    <Link to={`/treats/${treat.name}`}>
      
          <Card.Img
            style={{  
              background: "no-repeat center",
              WebkitBackgroundSize: "cover",
            }}
            className="img"
            variant="top"
            src={treat.picture}
          />
          <Card.Body>
            <Card.Title>{treat.name}</Card.Title>
            {/* <Card.Text>
       some text
      </Card.Text> */}
          </Card.Body>
      </Link>
        </Card>
    </Container>
  </>
  )
}
