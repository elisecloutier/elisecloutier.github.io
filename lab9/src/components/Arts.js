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
          <h1>Arts</h1>
          <p>
            Having difficulty in an Arts related class or want to learn more
            about the field? You've come to the right place! Explore the various
            topics we offer and start your artistic journey today.
          </p>
        </Container>
      </Jumbotron>

      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Arts</strong> Check out our amazing courses.
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
            src="http://www.critic.co.nz/files/article-7754.jpg"
          />
          <Card.Body>
            <Card.Title>Art History</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.thoughtco.com/thmb/rvG-Ag0dx1b09Fhj7KrH01qCgQY=/1200x800/filters:fill(auto,1)/tax2_image_philosophy-58a22d1668a0972917bfb559.png"
          />
          <Card.Body>
            <Card.Title>Philosophy</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://pi.tedcdn.com/r/tedideas.files.wordpress.com/2016/12/featured_art.jpg?w=312"
          />
          <Card.Body>
            <Card.Title>Literature</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.vox-cdn.com/thumbor/oulgNYAI6_GNIpAhensHjmGAnH8=/0x0:6244x3500/1200x800/filters:focal(2623x1251:3621x2249)/cdn.vox-cdn.com/uploads/chorus_image/image/62641921/shutterstock_721678087.0.jpg"
          />
          <Card.Body>
            <Card.Title>Journalism</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.dribbble.com/users/938871/screenshots/9517603/people-walkin-dribbble_2x.jpg"
          />
          <Card.Body>
            <Card.Title>Fashion & Textile</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.ctfassets.net/1khq4uysbvty/7nNoGc04bGUXwmKNXfIsYI/8c739c1f125434f49b5893eaf61d2f74/graphic-design-pen.png"
          />
          <Card.Body>
            <Card.Title>Graphic Design</Card.Title>
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
