import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Creaxt Dashboard</div>
      <div className="navbar-links">
        <Link to="/">Dashboard</Link>
        <Link to="/users">Users</Link>
        <Link to="/reports">Reports</Link>
      </div>
    </nav>
  );
}

export default Navbar;
