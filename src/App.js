
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import {Container, Row, Col, Navbar, Nav, Jumbotron,  Button, Form, Alert, Breadcrumb, Card, Image, Avatar } from 'react-bootstrap'

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
          
          <Row className='hero-row my-4'>
            <Col xs={12} md={6} className='my-auto'>
            <Jumbotron  fluid className='mb-3 pb-2'style={{background: '#fff', backgroundColor: '#fff'}}>
              <h1 className='display-4 text-left ml-1 text-primary' style={{fontFamily: 'Inter'}}>Give Your Business the <span className='text-secondary' style={{fontWeight: '400'}}>Edge</span> It Needs!</h1>
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
                 
                    <Button variant="secondary" size='lg' className='ml-1 px-4 py-2'>Get Started</Button>
                  
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

        <Row className='mt-5'>
          <Col xs={12}>
            <p className="text-center text-primary h1 mb-5" style={{fontWeight: '700'}}>What Our Clients Think</p>
          </Col>
        </Row>

        <Row className='testimonial-row mb-5'>
          <Col md={4} className='py-0 px-2'>
              <Card class="d-flex mx-auto">
              <Card.Img src="Images/owner.jpg" className='testimonial-img  mx-auto' /> 
                  <Card.Text >
                      <Card.Title>I get so much more business now!</Card.Title> I used to use a service where I could make my own website, but it just took too much work. When I contacted Deluxe Design and told them what I wanted, they had an idea in mind immediately and got back to me with everything I needed in two days. Incredible!
                  </Card.Text>
                  <div class="footer"> <span id="name">Giselle Godínez<br/></span> <span id="position">Owner of Bushwick Diner</span> </div>
              </Card>
          </Col>
          <Col md={4} className='py-0 px-2'>
              <Card class="d-flex mx-auto">
                  <Card.Img src="Images/owner2.jpg" className='testimonial-img  mx-auto' /> 
                  <Card.Text>
                      <Card.Title>They really helped put us on the map!</Card.Title> In our neighborhood, there are a ton of breweries around and it can be hard to stand out. The team at Deluxe Design really helped us out and worked with our budget at the time. If we ever need anything else, we'll be sure to call them for some upgrades!
                  </Card.Text>
                  <div class="footer"> <span id="name">Jeffrey Sheeran<br/></span> <span id="position">Owner of 10 Barrel Brewing</span> </div>
              </Card>
          </Col>
          <Col md={4} className='py-0 px-2'>
              <Card class="d-flex mx-auto">
              <Card.Img fluid src="Images/owner3.jpg" className='testimonial-img  mx-auto'/> 
                  <Card.Text>
                      <Card.Title>Business picked up more than I expected!</Card.Title> We used to just have our menu and address posted up on our website, but I felt that we could do better. I noticed Deluxe Design's ad and sent them an email on Thursday. By Monday morning, we were ready to post the new website! I LOVE all the animations and colors they added.
                  </Card.Text>
                  <div class="footer"> <span id="name">Joseph Alfaro Agosto<br/></span> <span id="position">Owner of Agosto Coffee Co. </span> </div>
              </Card>
          </Col>
        </Row>

        <Row className='about-us my-5 pt-5'>
          <Col xs={12} md={5}>
            <p className='text-secondary h4 text-left mb-3'>About Us</p>
            <h2 className='text-primary display-4 text-left' style={{fontWeight: '700'}}>Welcome to Deluxe Design</h2>
          </Col>
          <Col xs={12} md={7}>
            <p className=' h4 text-left mb-4 ' style={{lineHeight: '2.3rem', color: '#8B9CB6'}}>We are not a multi award winning agency but our creative, digital and support solutions can be tailored to your unique requirements, whether you’re looking for a comprehensive rebrand, a brand-new mobile app design or any creative print design.</p>
            <p className=' h5 text-left mb-4 ' style={{lineHeight: '2rem', color: '#8B9CB6'}}>With over 5 years of expertise and a forward-thinking team has resulted in a very strategic design and web development agency that understands the need of its clients. We conduct research & design digital experiences to make companies more customer-centric and help increase their customer loyalty. Here, at Deluxe Design, the team are new breed of mastermind, driven to create, be innovative and produce results in the best way possible within an agreed timeframe.</p>
            <p className=' h5 text-left mb-4 ' style={{lineHeight: '2rem', color: '#8B9CB6'}}>Our Vision: <br/> At Deluxe Design, we desire to become a frontrunner in advancing businesses through digital demands. Creative design, customer satisfaction, innovation, and teamwork, are the fundamental principles behind our company, and persist to reflect on who we are, how we work, and what we endeavor for.</p>
            <Row>
              <Button variant="outline-secondary" size='lg' className='ml-3' style={{borderRadius: '999px', padding: '16px 20px'}}>Start a Project <i class="fas fa-chevron-right"></i></Button>
            </Row>
          </Col>
        </Row>

        <Row className='my-5'>
          <Col xs={12} md={6}className='my-5'>
          <Row>
              <Col xs={12} md={6}>
              <Card style={{width: '16rem'}}>
                <Card.Body>
                  <Card.Title><i class="fas fa-comments-dollar" style={{fontSize: '4rem', color:'#233d63'}}></i><br/>Budget Friendly</Card.Title>
                  <Card.Text className='text-left' style={{fontWeight: '500'}}>
                  We offer budget-friendly all in one comprehensive designing services including UX/UI that meet all your business requirements.
                  </Card.Text>
                 
                </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card style={{width: '16rem'}} className='mt-5'>
                  <Card.Body>
                    <Card.Title><i class="fas fa-clipboard-check" style={{fontSize: '4rem', color:'#233d63'}}></i><br/>Fast and Reliable</Card.Title>
                    <Card.Text className='text-left' style={{fontWeight: '500'}}>
                      Our team of expert designers provide fast and reliable services using modern tools that you can always rely on.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className='mt-5'>
              <Col xs={12} md={6}>
              <Card style={{width: '16rem'}}>
                <Card.Body>
                  <Card.Title><i class="far fa-laugh-beam" style={{fontSize: '4rem', color:'#233d63'}}></i><br/>User Friendly</Card.Title>
                  <Card.Text className='text-left' style={{fontWeight: '500'}}>
                    We aim to make designing and developing as simple as possible. Our team of experts will stay in touch with you from initial concepts to final stages, you will have the complete control over the process, and your views will be given top priority.
                  </Card.Text>
                 
                </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card style={{width: '16rem'}} className='mt-5'>
                  <Card.Body>
                    <Card.Title><i class="far fa-thumbs-up" style={{fontSize: '4rem', color:'#233d63'}}></i><br/>Quality Work</Card.Title>
                    <Card.Text className='text-left' style={{fontWeight: '500'}}>
                      We do all our best to provide quality services with consultation also keeping in mind to offer the best customer experiences possible.
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={6} className='my-auto'>
            <p className='text-left h1 text-primary' style={{fontWeight: '600'}}>Some Of The Benefits Of Working With Us</p>
            <p className=' text-left mb-4' style={{color: '#8B9CB6', lineHeight: '2rem', fontSize: '1.3rem', fontWeight: '500'}}>Deluxe Design has a strong reputation as being one of the best web design agencies in the performance marketing industry… and that’s good news for you.</p>
            <p className=' text-left mb-4' style={{color: '#8B9CB6', lineHeight: '2rem', fontSize: '1.3rem', fontWeight: '500'}}>Our highly skilled team of marketers, designers, developers, and brand experts know exactly what it takes to ensure your website grabs your visitor’s attention, ensuring your online business is in the top 10% that succeeds.</p>
            <Row>
              <Button variant="outline-secondary" size='lg' className='ml-3' style={{borderRadius: '999px', padding: '16px 20px'}}>Get In Touch <i class="fas fa-chevron-right"></i></Button>  
            </Row>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <p className="text-center text-primary h1 mt-5" style={{fontWeight: '700'}}>We Hold Expertise In All <br/> Your Digital needs</p>
          </Col>
        </Row>

        <Row className='expertise-row'>
          <Col xs={12} md={6}>

          <Card border='secondary' className='my-5'>
            <Card.Body>
              <Card.Title style={{fontSize: '4rem'}}><i class="fas fa-ruler-combined text-primary"></i></Card.Title>
              <Card.Title>Responsive Website Design</Card.Title>
              <Card.Text>
                We design fully responsive websites to ensure that they adapt seemlessly to phones, tablets or PCs/Laptops.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card border='secondary' className='my-5'>
            <Card.Body>
            <Card.Title style={{fontSize: '4rem'}}><i class="fas fa-drafting-compass text-primary"></i></Card.Title>
              <Card.Title>Logos & Branding</Card.Title>
              <Card.Text>
                Our creative team will design innovative and attractive logos for your business that becomes your brand’s identity.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card border='secondary' className='my-5'>
            <Card.Body>
            <Card.Title style={{fontSize: '4rem'}}><i class="fab fa-wordpress text-primary"></i></Card.Title>
              <Card.Title>WordPress Development</Card.Title>
              <Card.Text>
                We will make sure that you have an error-free interface, effective navigation and a user-friendy experience on your WordPress site.
              </Card.Text>
            </Card.Body>
          </Card>

          </Col>
          <Col xs={12} md={6}>

          <Card border='secondary' className='my-5'>
            <Card.Body>
            <Card.Title style={{fontSize: '4rem'}}><i class="far fa-object-group text-primary"></i></Card.Title>
              <Card.Title>UI/UX Design</Card.Title>
              <Card.Text>
                We provide out of the box UI/UX design services by following the latest design trends and considering the client requirements carefully.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card border='secondary' className='my-5'>
            <Card.Body>
              <Card.Title style={{fontSize: '4rem'}}><i class="fas fa-home text-primary"></i></Card.Title>
              <Card.Title>Landing Page Design</Card.Title>
              <Card.Text>
                With our vast expertise we will design an awesome landing page for your business which converts visitors to leads.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card border='secondary' className='my-5'>
            <Card.Body>
            <Card.Title style={{fontSize: '4rem'}}><i class="far fa-newspaper text-primary"></i></Card.Title>
              <Card.Title>Print Design</Card.Title>
              <Card.Text>
                We design awesome marketing materials for printing on business cards, fliers, posters, and beyond.
              </Card.Text>
            </Card.Body>
          </Card>

          </Col>
        </Row>

        <Row className='our-promise my-5'>
          <Col xs={12} md={6} className='my-auto'>
            <Image fluid src='Images/team.jpg' style={{borderRadius: '8px'}}/>
          </Col>
          <Col xs={12} md={6}>
            <p className='text-left h2 text-primary' style={{fontWeight: '600'}}>Our Promises</p>
            <p className='text-left' style={{color: '#8B9CB6', lineHeight: '2rem', fontSize: '1.3rem', fontWeight: '500'}}>Our designers and developers help you build innovative digital solutions and applications and allow you to deliver captivating user experiences across all channels.</p>
            <p className='text-left'><i class="fas fa-check-circle" style={{color: '#6b70fd'}}></i> Visual Design and Branding</p>
            <p className='text-left'><i class="fas fa-check-circle" style={{color: '#6b70fd'}}></i> Graphics Detailing</p>
            <p className='text-left'><i class="fas fa-check-circle" style={{color: '#6b70fd'}}></i> Prototyping</p>
            <p className='text-left'><i class="fas fa-check-circle" style={{color: '#6b70fd'}}></i> Review and Validation</p>
            <p className='text-left'><i class="fas fa-check-circle" style={{color: '#6b70fd'}}></i> User Acceptance</p>
            <p className='text-left'><i class="fas fa-check-circle" style={{color: '#6b70fd'}}></i> Launch the Project</p>
            <p className='text-left' style={{color: '#8B9CB6'}}>We take our years of experience and apply them to create truly innovative digital solutions for clients across different sectors.</p>
          </Col>
        </Row>
        
        <Row className='my-5'>
          <Col xs={12}>
            <p className="text-center text-primary h1 mt-5" style={{fontWeight: '700'}}>We Have Successfully Completed <br/> Over 500 Projects</p>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4}>
            <p className='text-secondary text-center h1'>500+</p>
            <p className='text-primary text-center h3'>Projects Completed</p>
          </Col>
          <Col xs={12} md={4}>
            <p className='text-secondary text-center h1'>490+</p>
            <p className='text-primary text-center h3'>Positive Reviews</p>
          </Col>
          <Col xs={12} md={4}>
            <p className='text-secondary text-center h1'>400+</p>
            <p className='text-primary text-center h3'>Customers Worldwide</p>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className='lets-talk my-5 py-5'>
          <Col xs={12} md={{ span: 3, offset: 3 }}>
            <p className='text-left h1 mb-5' style={{color: '#fff'}}>Let’s Talk About Your Project.</p>
            <p className='text-left h5 mb-5' style={{color: '#fff', lineHeight: '1.8rem'}}>No matter where your business currently stands in the marketplace, Deluxe Design offers a full suite of services that will take your business to the next level and help reach your goals.</p>
            <Row>
              <Button variant='outline-light' size='lg' className='ml-3 mb-5'>Let's Talk <i class="fas fa-chevron-right"></i></Button>
            </Row>
          </Col>
          <Col xs={12} md={3}>
            <Image fluid src='Images/letsTalk.jpg' style={{borderRadius: '8px'}}/>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12}>
            <p className='text-center h1 text-primary mt-5 mb-3'>Meet the Team</p>
          </Col>
          
        </Row>
        <Row className='team my-5'>
          <Col xs={12} md={4}>

            <Card class="d-flex mx-auto">
              <Card.Img src="Images/member1.jpg" className='team-img  mx-auto' /> 
              <Card.Text >
                  <Card.Title>Anita Chan</Card.Title> UX/UI Designer
              </Card.Text>
              
            </Card>


          </Col>
          <Col xs={12} md={4}>
          
            <Card class="d-flex mx-auto">
              <Card.Img src="Images/member3.jpg" className='team-img  mx-auto' /> 
              <Card.Text >
                  <Card.Title>Mark Cilento</Card.Title> Back-End Developer
              </Card.Text>
             
            </Card>

           
            
          </Col>
          <Col xs={12} md={4}>
          
          <Card class="d-flex mx-auto">
              <Card.Img src="Images/member5.jpg" className='team-img  mx-auto' /> 
              <Card.Text >
                  <Card.Title>William Li</Card.Title> Full Stack Developer
              </Card.Text>
              
            </Card>
            
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4}>
            <Card class="d-flex mx-auto">
              <Card.Img src="Images/member2.jpg" className='team-img  mx-auto' /> 
              <Card.Text >
                  <Card.Title>Kiersten Horemis</Card.Title> Front-End Developer
              </Card.Text>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card class="d-flex mx-auto">
              <Card.Img src="Images/member4.jpg" className='team-img  mx-auto' /> 
              <Card.Text >
                  <Card.Title>James Gonzalez</Card.Title> Digital Media Designer/WordPress Developer
              </Card.Text>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card class="d-flex mx-auto">
              <Card.Img src="Images/member6.jpg" className='team-img  mx-auto' /> 
              <Card.Text >
                  <Card.Title>Catherine Brown</Card.Title> Social Media Relations
              </Card.Text>
            </Card>
          </Col>
        </Row>
        
      </Container>
        
      
        
      
    </div>
  );
}

export default App;
