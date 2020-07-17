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

const Frenchhome = () => (
  <div>
    <br />
    <Alert variant="danger">
      <Alert.Heading>INFORMATIONS SUR LA COVID-19</Alert.Heading>
      <p>
        Chez Trouvez Votre Tuteur/Tutrice, nous apprécions la santé et le
        bien-être de nos étudiants et tuteurs sécurité. En raison des
        implications de la pandémie en cours, tous nos les services de tutorat
        sont passés à la vidéoconférence en ligne. Contactez votre tuteur
        personnel pour plus d'informations.
      </p>
    </Alert>

    <br />
    <Link to="/french">
      <button type="button" class="btn btn-outline-secondary">
        Go to the English page
      </button>
    </Link>
    <br />
    <br />
    <Jumbotron>
      <h1>Bienvenue à Trouvez Votre Tutuer/Tutrice !</h1>
      <p>
        Vous rencontrez des difficultés dans votre classe? Nous avons ce qu'il
        vous faut! Chez Trouvez Votre Tutuer/Tutrice, vous pourrez rencontrer
        les personnes les plus expérimentées qui vous aideront à réussir dans
        n'importe quel sujet.
      </p>
      <br />
      <p style={{ color: "#e9ecef" }}>
        blank space blank space blank space blank space
        <Link to="/tutors">
          <Button variant="secondary">Trouvez Votre Tutuer/Tutrice</Button>
        </Link>
        blank space blank space blank space blank space
        <Link to="/">
          <Button variant="secondary">Prennez un quiz</Button>
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
          <h3>Un(e) tuteur/tutrice pour chaque sujet!</h3>
          <p>Consultez nos profils de tuteurs/tutrices</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.gettingsmart.com/wp-content/uploads/2017/01/Elementary-Student-using-online-tutor-and-online-learning-Feature-Image-e1587760045337.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Vous ne savez pas quel est votre niveau?</h3>
          <p>Prennez un quiz!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br />
    <br />
    <footer>
      <table style={{ width: "100%" }}>
        <tr>
          <th>Explorez</th>
          <th>Contact</th>
        </tr>
        <tr>
          <Link to="/">
            <td>Page d'acceuil</td>
          </Link>
          <td>Téléphone: 613 999 9999</td>
        </tr>
        <tr>
          <Link to="/commerce">
            <td>Matières</td>
          </Link>
          <td>Email: contact@findyourtutor.com</td>
        </tr>
        <tr>
          <Link to="/tutors">
            <td>Tuteurs/Tutrices</td>
          </Link>
          <td>Quartier général: 1600 Amphitheatre Pkwy, Mountain View, CA</td>
        </tr>
        <tr>
          <Link to="/about">
            <td>À propos</td>
          </Link>
        </tr>
        <tr>
          <Link to="/evaluations">
            <td>Évaluations</td>
          </Link>
        </tr>
      </table>

      <br />

      <p>Auteur: Elise Cloutier</p>
    </footer>
  </div>
);

export default Frenchhome;
