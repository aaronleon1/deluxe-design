import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Hero from "./components/Hero";
import MainNav from "./components/MainNav";
import FeaturedSection from "./components/FeaturedSection";
import Reviews from "./components/Reviews/Reviews";
import AboutUs from "./components/AboutUs";
import Benefits from "./components/Benefits/Benefits";
import Expertise from "./components/Expertise/Expertise";
import OurPromise from "./components/OurPromise";
import Accomplishments from "./components/Accomplishments";
import YourProject from "./components/YourProject";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Container>
        <MainNav />
        <Hero />
        <FeaturedSection />
        <Reviews />
        <AboutUs />
        <Benefits />
        <Expertise />
        <OurPromise />
        <Accomplishments />
      </Container>
      <Container fluid>
        <YourProject />
      </Container>
      <Container>
        <Team />
      </Container>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
