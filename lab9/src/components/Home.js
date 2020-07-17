import React, { useState } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import { SketchPicker } from "react-color";
import Alert from "react-bootstrap/Alert";

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <Toast show={show} onClose={() => toggleShow(!show)}>
      <Toast.Header>
        <strong className="mr-auto">React-Bootstrap</strong>
      </Toast.Header>
      <Toast.Body>{children}</Toast.Body>
    </Toast>
  );
};

const home = () => (
  <div>
    <br />
    <Alert variant="danger">
      <Alert.Heading>INFORMATION ABOUT COVID-19</Alert.Heading>
      <p>
        At Find Your Tutor, we value our students' and tutors' health and
        safety. Due to the immplications of the ongoing pandemic, all of our
        tutoring services have been transitions to online videoconference.
        Contact your personal tutor for more information.
      </p>
    </Alert>

    <br />
    <Link to="/french">
      <button type="button" class="btn btn-outline-secondary">
        Aller à la page française
      </button>
    </Link>
    <br />
    <br />
    <Jumbotron>
      <h1>Welcome to Find Your Tutor!</h1>
      <p>
        Having difficutly in your class? We've got you covered! At Find Your
        Tutor, you'll be able to meet the most experienced individuals who will
        help you success in any subject.
      </p>
      <br />
      <p style={{ color: "#e9ecef" }}>
        blank space blank space blank space blank space
        <Link to="/tutors">
          <Button variant="secondary">Find your tutor</Button>
        </Link>
        blank space blank space blank space blank space
        <Link to="/">
          <Button variant="secondary">Take a quiz</Button>
        </Link>
      </p>
    </Jumbotron>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.theconversation.com/files/268439/original/file-20190409-2921-1a4uike.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
          alt="1"
        />
        <Carousel.Caption>
          <h3>A tutor for every subject!</h3>
          <p>Check out our tutor profiles</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.gettingsmart.com/wp-content/uploads/2017/01/Elementary-Student-using-online-tutor-and-online-learning-Feature-Image-e1587760045337.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Not sure what your level is?</h3>
          <p>Take a quiz!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br />
    <br />
    <footer>
      <table style={{ width: "100%" }}>
        <tr>
          <th>Explore</th>
          <th>Contact</th>
        </tr>
        <tr>
          <Link to="/">
            <td>Home</td>
          </Link>
          <td>Phone: 613 999 9999</td>
        </tr>
        <tr>
          <Link to="/commerce">
            <td>Subjects</td>
          </Link>
          <td>Email: contact@findyourtutor.com</td>
        </tr>
        <tr>
          <Link to="/tutors">
            <td>Tutors</td>
          </Link>
          <td>Headquarters: 1600 Amphitheatre Pkwy, Mountain View, CA</td>
        </tr>
        <tr>
          <Link to="/about">
            <td>About</td>
          </Link>
        </tr>
        <tr>
          <Link to="/evaluations">
            <td>Evaluations</td>
          </Link>
        </tr>
      </table>

      <br />

      <p>Author: Elise Cloutier</p>
    </footer>
  </div>
);

export default home;
