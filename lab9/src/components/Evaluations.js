import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardDeck from "react-bootstrap/CardDeck";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Commerce = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Evaluations</h1>
        <p>
          Once you are have finished all your sessions with your tutor, we'd
          love to hear your feedback! Please fill out this short evaluation to
          share your experience with Find Your Tutor.
        </p>
        <br />
      </Jumbotron>

      <Jumbotron>
        <form>
          <label>
            First name:
            <input type="text" name="firstname" />
          </label>
          <br />
          <br />
          <label>
            Last name:
            <input type="text" name="lastname" />
          </label>
          <br />
          <br />
          <label for="email">Enter a valid email:</label>
          <input type="email" id="email" size="30" required />
          <br />
          <br />
          Tutor:
          <select>
            <option value="jorge">Jorge</option>
            <option value="selma">Selma</option>
            <option value="albert">Albert</option>
            <option value="harriet">Harriet</option>
            <option value="zander">Zander</option>
            <option value="zawadi">Zawadi</option>
            <option value="li">Li</option>
            <option value="kate">Kate</option>
            <option value="antoinette">Antoinette</option>
            <option value="maria">Maria</option>
            <option value="ilina">Ilina</option>
            <option value="darquise">Darquise</option>
            <option value="acadia">Acadia</option>
            <option value="hillary">Hillary</option>
            <option value="sheila">Sheila Ann</option>
            <option value="jan">Jan</option>
            <option value="tess">Tess</option>
            <option value="firas">Firas</option>
            <option value="eva">Eva</option>
            <option value="mahmoud">Mahmoud</option>
            <option value="katie">Katie</option>
            <option value="cameron">Cameron</option>
            <option value="kiana">Kiana</option>
            <option value="julianne">Julianne</option>
            <option value="samuel">Samuel</option>
            <option value="analisa">Analisa</option>
          </select>
          <br />
          <br />
          What rating would you give your tutor (out of 10):
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <br />
          <br />
          Comments about your tutor:
          <br />
          <textarea />
          <br />
          <br />
          Comments about your experience with Find Your Tutor:
          <br />
          <textarea />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </Jumbotron>

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
