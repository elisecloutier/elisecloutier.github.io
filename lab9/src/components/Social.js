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
          <h1>Social Sciences</h1>
          <p>
            Having difficulty in a Social Science related class or want to learn
            more about the field? You've come to the right place! Explore the
            various topics we offer and start your social scientific journey
            today.
          </p>
        </Container>
      </Jumbotron>

      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Social Sciences</strong> Check out our amazing courses.
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
            src="https://eurocoin-competition.eu/wp-content/uploads/2018/11/anthropology.jpg"
          />
          <Card.Body>
            <Card.Title>Anthropology</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://3718aeafc638f96f5bd6-d4a9ca15fc46ba40e71f94dec0aad28c.ssl.cf1.rackcdn.com/journal-sociology.png"
          />
          <Card.Body>
            <Card.Title>Sociology</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.lynda.com/course/630612/630612-637286226551546701-16x9.jpg"
          />
          <Card.Body>
            <Card.Title>Political Science</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://sic.edu/files/uploads/global/Criminal_Justice/Justice_Icons.jpg"
          />
          <Card.Body>
            <Card.Title>Criminology</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.montrealcathedral.ca/wp-content/uploads/2018/11/531314-Humanrights-english.jpg"
          />
          <Card.Body>
            <Card.Title>Human Rights & Conflict Studies</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/05/HISTORY-of-GRAPHIC-DESIGN.jpg?auto=format&q=60&w=1860&h=1395&fit=crop&crop=faces"
          />
          <Card.Body>
            <Card.Title>History</Card.Title>
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
