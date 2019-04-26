import React from "react";
import styled from "styled-components";
import logo from "../../img/cps-white.png";
import * as rB from "react-bootstrap";

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

const CustomNavbar = styled(rB.Navbar)`
  width: 100%;
  background: #a51c30;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  div {
    a {
      img {
        max-width: 80px;
        height: auto;
      }
    }
  }
`;

const Collapse = styled(rB.Navbar.Collapse)`
  div {
    a {
      color: #fff !important;
      font-weight: bold;
      transition: all 0.1s;
      &:hover {
        text-shadow: 1px 1px 10px #333;
      }
    }
  }
`;
