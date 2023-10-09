import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
       <Navbar expand="lg" className=" fixed-top">
      <Container>
        <Navbar.Brand href="#home" style={{color:'white'}}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home"  style={{color:'white'}} >Home</Nav.Link>
            <Nav.Link href="#link"  style={{color:'white'}}>Link</Nav.Link>
            <Nav.Link href="#link"  style={{color:'white'}}>Contact us</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <Carousel activeIndex={index} onSelect={handleSelect} style={{paddingTop:'5px'}} >
      <Carousel.Item interval={1000}>
        <img src='https://images4.alphacoders.com/751/751911.jpg' style={{width:'100%',height:'600px'}}></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
       <img src='https://images3.alphacoders.com/131/1311609.jpg'style={{width:'100%',height:'600px'}}></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src='https://images4.alphacoders.com/127/1275362.jpg'style={{width:'100%',height:'600px'}}></img>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;