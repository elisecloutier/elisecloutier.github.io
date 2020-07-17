import React from "react";

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

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Find Your Tutor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Subjects" id="basic-nav-dropdown">
              <NavDropdown.Item href="/stem">STEM</NavDropdown.Item>
              <NavDropdown.Item href="/social">
                Social Sciences
              </NavDropdown.Item>
              <NavDropdown.Item href="/arts">Arts</NavDropdown.Item>
              <NavDropdown.Item href="/commerce">Commerce</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/tutors">Tutors</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/evaluations">Evaluations</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
