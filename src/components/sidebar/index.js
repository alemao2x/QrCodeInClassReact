import React from "react";
import styled from "styled-components";
import logo from "../../img/capel.png";
import * as rB from "react-bootstrap";

const Sidebar = () => {
  const { Image } = rB;
  return (
    <Bar>
      <Image thumbnail roundedCircle src={logo} />
      <small>About the project:</small>
      <div className="shadow">
        <p>
          QRCode in Class is an idea born in the university chair and maintained
          by the teachers and others collaborators.
        </p>
      </div>
    </Bar>
  );
};

export default Sidebar;

const Bar = styled.div`
  position: sticky;
  top: 25%;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: #a82f3b;
  border-radius: 0.5rem;
  img {
    margin: 10px auto;
    width: 80px;
    height: 80px;
  }
  small {
    color: white;
  }
  div {
    font-size: 17px;
    border: 2px solid #a82f3b;
    background: #fff;
    margin-top: 20px;
    border-radius: 0.5rem;
    padding: 10px 15px;
  }
`;
