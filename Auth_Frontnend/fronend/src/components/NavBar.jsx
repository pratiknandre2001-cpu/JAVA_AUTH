import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={{
      padding: "15px 30px",
      background: "#fdfbfb",          // light background for contrast
      color: "#333",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      {/* Logo / Brand now clickable */}
      <Link to="/" style={{ 
        fontWeight: "bold", 
        fontSize: "22px", 
        color: "#4CAF50", 
        textDecoration: "none" 
      }}>
        MyApp
      </Link>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/signup" style={linkStyle}>📝 Sign Up</Link>
        <Link to="/signin" style={buttonStyle}>🔑 Sign In</Link>
      </div>
    </nav>
  );
};

// Reusable styles
const linkStyle = {
  color: "#333",
  textDecoration: "none",
  fontWeight: "500",
  transition: "color 0.3s",
};

const buttonStyle = {
  background: "#4CAF50",
  color: "white",
  padding: "8px 16px",
  borderRadius: "4px",
  textDecoration: "none",
  fontWeight: "500",
  transition: "background 0.3s",
};

export default NavBar;
