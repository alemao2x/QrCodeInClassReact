import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import Navbar from "./components/nav";
import Routes from "./routes";

const App = () => (
  <div className="App">
    <Navbar />
    <Routes />
  </div>
);

export default App;
