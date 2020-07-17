import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from "react-bootstrap/CardGroup";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

const Commerce = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Commerce</h1>
          <p>
            Having difficulty in an Arts related class or want to learn more
            about the field? You've come to the right place! Explore the various
            topics we offer and start your artistic journey today.
          </p>
        </Container>
      </Jumbotron>

      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Commerce</strong> Check out our amazing courses.
      </div>

      <br />

      <div class="btn-group" role="group" aria-label="Basic example">
        <Link to="/stem">
          <button type="button" class="btn btn-outline-secondary">
            STEM
          </button>
        </Link>
        <Link to="/social">
          <button type="button" class="btn btn-outline-secondary">
            Social Sciences
          </button>
        </Link>
        <Link to="/arts">
          <button type="button" class="btn btn-outline-secondary">
            Arts
          </button>
        </Link>
        <Link to="/commerce">
          <button type="button" class="btn btn-outline-secondary">
            Commerce
          </button>
        </Link>
      </div>
      <br />
      <br />

      <CardColumns>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.freshbooks.com/blog/wp-content/uploads/2018/11/Industry-Standard-Double-Entry-Accounting-852x568.png"
          />
          <Card.Body>
            <Card.Title>Accounting</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.lynda.com/course/368915/368915-637286170574413555-16x9.jpg"
          />
          <Card.Body>
            <Card.Title>Finance</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.wethetalent.co/wp-content/uploads/2015/09/1400_700-BRikmIs7fKuZqFAuV9rylJ0x9ZP37htULwIerP5J0RSemgwcYQnQtS0mI3DV9Lq3.jpg"
          />
          <Card.Body>
            <Card.Title>International Management</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.lynda.com/course/651190/651190-637286231453908389-16x9.jpg"
          />
          <Card.Body>
            <Card.Title>Human Resources</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://newsignature.com/wp-content/uploads/2016/05/unlock-potential.jpg"
          />
          <Card.Body>
            <Card.Title>Business Technology Management</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.medgadget.com/wp-content/uploads/2020/01/Clinical-Decision-Support-Systems-CDSS-Market.jpg"
          />
          <Card.Body>
            <Card.Title>Healthcare Analytics</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>
      </CardColumns>

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
};

export default Commerce;
