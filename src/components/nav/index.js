import React from "react"
import logo from "../../img/cps-white.png"
import * as rB from "react-bootstrap"
import { CustomNavbar, Collapse } from "./styles"

const Navbar = () => {
  const { Container, Navbar, Image, Nav } = rB;
  return (
    <CustomNavbar sticky="top" className="shadow">
      <Container>
        <Navbar.Brand href="/" className="mr-auto">
          <Image src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>Sign in</Nav.Link>
            <Nav.Link className="ml-3">Student? Register!</Nav.Link>
          </Nav>
        </Collapse>
      </Container>
    </CustomNavbar>
  );
};
export default Navbar;