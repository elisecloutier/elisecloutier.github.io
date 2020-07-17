import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardDeck from "react-bootstrap/CardDeck";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const about = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>About us</h1>
          <p>Find your tutor is a company created by students for students.</p>
        </Container>
      </Jumbotron>

      <br />
      <br />

      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src="https://tr4.cbsistatic.com/hub/i/r/2018/03/02/aacee157-8c76-433e-90b8-07d14dc96c1f/resize/770x/e96770b291b54c1f34f8d3194ab0affa/microsoft-teams.png"
          />
          <Card.Body>
            <Card.Title>Our founders</Card.Title>
            <Card.Text>
              Erica, Ben and Tae were roommates allthrough university. Majoring
              in Computer Science, Economics and English Literature
              respectively, they founded Find Your Tutor after noticing a need
              for a more tailored educative experience.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://lmksuo59r52jxjjy13j6oyze-wpengine.netdna-ssl.com/cloud-platforms/files/2020/02/oie_Ll2B8Nvm8pZJ.png"
          />
          <Card.Body>
            <Card.Title>Our Mission</Card.Title>
            <Card.Text>
              After years of struggling in the failing education system, Erica,
              Ben and Tae decided to take action to ensure that no future
              students would feel the despair they felt during their years of
              study. Perfecting a plan tailored to personal needs, Find Your
              Tutor is the perfect place to enhance your learning skills and to
              make you a subject matter expert in all fields!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3zpXp?ver=23fc&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
          />
          <Card.Body>
            <Card.Title>Our Commitment</Card.Title>
            <Card.Text>
              We provide tutoring for all ages and all subjects. With over 100
              quizzes, 100 hours of workload per subject, we guarantee ample
              resources to make sure you are successful in all your educational
              endeavours.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <br />
      <br />

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
            <Link to="/evaluationst">
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

export default about;
