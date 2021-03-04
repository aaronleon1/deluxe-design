
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import {Container, Row, Col, Navbar, Nav, Jumbotron,  Button, Form, Alert, Breadcrumb, Card, Image } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar bg="light" fixed="top" expand='lg'>
            <Container>
              <Navbar.Brand href="#home"><img
        alt=""
        src="Images/ddLogo.png"
        width="36"
        height="36"
        className="d-inline-block align-top"
      />{' '}
      Deluxe Design</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav inline className='ml-auto'>
                  <Nav.Link href='#home'>Themes</Nav.Link>
                  <Nav.Link href='#home'>Apps</Nav.Link>
                  <Nav.Link href='#home'>Assets</Nav.Link>
                  <Nav.Link href='#home'>Contact Us</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          
          <Row className='hero-row mt-4'>
            <Col xs={12} md={6} className='my-auto'>
            <Jumbotron  fluid className='mb-3 pb-2'style={{background: '#fff', backgroundColor: '#fff'}}>
              <h1 className='display-4 text-left ml-1'>We Give Your Business an <span style={{color: '#6b70fd'}}>Edge</span> Over Your Competitors!</h1>
              <p className='lead text-left ml-1'>
                Everything you need for your online business: Themes, Apps, Assets, and More...
              </p>
              <Form className='ml-1'>
                <Form.Row >
                  <Col xs={8} md={10}>
                    <Form.Group controlId="formBasicEmail" >
                    <Form.Control type="email" size="lg" placeholder="Enter your email address" style={{paddingTop: '1.8rem', paddingBottom: '1.8rem'}}/>
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row>
                 
                    <Button variant="primary" size='lg' className='ml-1 px-4 py-2'>Get Started</Button>
                  
                </Form.Row>
               
              </Form>
            </Jumbotron>
            
              <p className='text-left ml-1 mt-1'>
                Recently featured on:
              </p>
            
            <Row className='ml-1 pb-2'>
              <Col xs={3}>
                <Image src='Images/wapoLogo.png' fluid />
              </Col>
              <Col xs={3}>
                <Image src='Images/forbes.png' fluid />
              </Col>
              <Col xs={4}>
               <Image src='Images/caLogo.png' fluid />
              </Col>
            </Row>
            </Col>
            <Col xs={12} md={6} className='my-auto'>
              <Image src='Images/hero-img.png' fluid />
            </Col>
          </Row>

          
          
      </Container>
        
      
    </div>
  );
}

export default App;
