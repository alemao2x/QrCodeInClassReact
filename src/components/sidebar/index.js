import React from "react"
import logo from "../../img/capel.png"
import * as rB from "react-bootstrap"
import { Bar } from "./styles"

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
