import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from "react-bootstrap/CardGroup";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

const Commerce = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>STEM</h1>
          <p>
            Having difficulty in a STEM related class or want to learn more
            about the field? You've come to the right place! Explore the various
            topics we offer and start your scientific journey today.
          </p>
        </Container>
      </Jumbotron>
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>STEM</strong> Check out our amazing courses.
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
            src="https://leverageedu.com/blog/wp-content/uploads/2019/09/Aeronautical-Engineering.png"
          />
          <Card.Body>
            <Card.Title>Aerospace engineering</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.calgarytutoringcentre.com/images/subjects/biology-lrg.jpg"
          />
          <Card.Body>
            <Card.Title>Biology</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://jobs.newscientist.com/getasset/384aa208-c4cf-453f-924a-1cd7b7854eda/"
          />
          <Card.Body>
            <Card.Title>Chemistry</Card.Title>
            <Button variant="dark">Explore</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.pngitem.com/pimgs/m/338-3384103_civil-engineering-logo-png-transparent-png.png"
          />
          <Card.Body>
            <Card.Title>Civil Engineering</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.eschoolnews.com/files/2016/12/computer-science-education.jpg"
          />
          <Card.Body>
            <Card.Title>Computer Science</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://jobs.newscientist.com/getasset/26915575-b33c-44f8-b30c-d8cb3141fca4/"
          />
          <Card.Body>
            <Card.Title>Electrical Engineering</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.theconversation.com/files/139426/original/image-20160927-14593-1rf92dt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip"
          />
          <Card.Body>
            <Card.Title>Mathematics</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn1.vogel.de/unsafe/540x0/smart/images.vogel.de/vogelonline/bdb/1492400/1492470/original.jpg"
          />
          <Card.Body>
            <Card.Title>Mechanical Engineering</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.sciencenews.org/wp-content/uploads/2020/02/021120_to_quantum_feat-1028x579.jpg"
          />
          <Card.Body>
            <Card.Title>Physics</Card.Title>
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
