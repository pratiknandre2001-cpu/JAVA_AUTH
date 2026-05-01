import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={{ padding: "10px", background: "#282c34", color: "white" }}>
      <Link to="/" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/signup" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Sign Up</Link>
    </nav>
  );
};

export default NavBar;
