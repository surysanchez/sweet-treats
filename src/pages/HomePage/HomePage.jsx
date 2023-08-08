
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function HomePage(){
    return (
        <>
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/02/25/22/58/strawberries-1223153_1280.jpg"  height= "450px"
          alt=""
        />
         </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/rKEkvSj.jpg"  height= "450px" 
          alt=""
          />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/plo9N1r.jpg" height= "450px" 
          alt=""
        />
        <Carousel.Caption>
         
          <p>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    {/* <Figure className="flex">
      <Figure.Image
        width={300}
        height={260}
        alt=""
        src={treat.picture}
      />
      <Figure.Caption>
       {treat.name.toUpperCase()}
      </Figure.Caption>
      <Figure>
       {treat.description}
      </Figure>
      <Figure>$  
       {treat.price}
      </Figure>
      <br />
    <Button variant="outline-success">Add To Cart</Button>
    </Figure> */}

    {/* {treats.map((item, index) => {
       return (
        <TreatCard item={item} />
       )
    }) } */}

{/* <div className="cards-container">
      {props.treats.map((treat) => {
        return <TreatCard key={treat.name} treat={treat} />;
      })}
    </div> */}

        
{/* <Card style={{ width: '16rem',background: 'no-repeat center' , WebkitBackgroundSize: "cover" }} className='treat-card'> 
<Card.Img variant="top" src='https://i.imgur.com/whgGOwl.jpg' /> */}
{/* <Card.Body> 
  <Card.Title>{treats.name}</Card.Title>
  <Card.Text>
  </Card.Text>
  <Button variant="primary"></Button>
</Card.Body> */}
{/* </Card  >
<Card className='treat-card'>
<Card.Img variant="top" src='https://i.imgur.com/mByvFr2.jpg' /> */}
{/* <Card.Body>

  <Card.Title></Card.Title>
  <Card.Text>
  </Card.Text>
  <Button variant="primary"></Button>
</Card.Body> */}
{/* </Card>

<Card style={{ width: '16rem',background: 'no-repeat center' , WebkitBackgroundSize: "cover" }} className='treat-card'>
<Card.Img variant="top" src='https://i.imgur.com/fOKSsQx.png' />
{/* <Card.Body>

  <Card.Title></Card.Title>
  <Card.Text>
  </Card.Text>
  <Button variant="primary"></Button>
</Card.Body> */}
{/* </Card>

<Card style={{ width: '16rem',background: 'no-repeat center' , WebkitBackgroundSize: "cover" }} className='treat-card'>
<Card.Img variant="top" src='https://i.imgur.com/swyvfQQ.jpg' /> */}
{/* <Card.Body>

  <Card.Title></Card.Title>
  <Card.Text>
  </Card.Text>
  <Button variant="primary"></Button>
</Card.Body> */}
{/* </Card> */}

 <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a> */}
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a> */}
          <a href='https://www.tiktok.com/@sweet.treats.creation?_t=8cWqZ6QQbmd&_r=1 ' target="_blank"
                            rel="noopener noreferrer"className='me-4 text-reset'>
            <MDBIcon fab icon="tiktok" />
          </a>
          <a href='https://www.instagram.com/sweet.treats.creation/' target="_blank"
                            rel="noopener noreferrer" className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a> */}
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a> */}
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="" className="me-3" />
                Sweet.Treats.Creations 🍓
              </h6>
              <p>
              Creating fresh and unique homemaded products.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='/ordertreats' className='text-reset'>
                Treats
                </a>
              </p>
              <p>
                <a href='/customtreat' className='text-reset'>
                  Cakes
                </a>
              </p>
              <p>
                <a href='/createOwn' className='text-reset'>
                  Create your Cake Design
                </a>
              </p>
              {/* <p>
                <a href='/authpage' className='text-reset'>
                  Custom Treats
                </a>
              </p> */}
              {/* <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p> */}
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/contact' className='text-reset'>
                  Contact us
                </a>
              </p>
              <p>
                <a href='/about' className='text-reset'>
                  About us
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Hollywood, FL , US
              </p>
              <p> 
              <MDBIcon icon="envelope" className="me-2" />
                sweet.treats.creation1@gmail.com
              </p>
              <Button variant="info"> <a
                    href="mailto:sweet.treats.creation1@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    > Direct email</a
                > </Button>
             

              <p>
                <MDBIcon icon="phone" className="me-3" />+1 123-456-7890
              </p>
            
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        All Rights Reserved, &copy; 2023  &nbsp;
        <h6 className='text-reset fw-bold'>  Sweet Treats Creations
        </h6>
      </div>
    </MDBFooter>

</>
      
    )
    

}