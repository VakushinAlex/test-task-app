import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => (
  <div className="nav-container">
    <Link to="/settings">Settings</Link>
  </div>
);

export default Nav;
