import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "#fff" }}>
      <h2>Recipe Sharing Platform</h2>
      <ul style={{ listStyle: "none", display: "flex", gap: "15px" }}>
        <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
        <li><Link to="/recipes" style={{ color: "white", textDecoration: "none" }}>Recipes</Link></li>
        <li><Link to="/add-recipe" style={{ color: "white", textDecoration: "none" }}>Add Recipe</Link></li>
        <li><Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link></li>
        <li><Link to="/signup" style={{ color: "white", textDecoration: "none" }}>Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
