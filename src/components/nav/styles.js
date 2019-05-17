import styled from "styled-components";
import * as rB from "react-bootstrap";

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

export { Collapse, CustomNavbar }
