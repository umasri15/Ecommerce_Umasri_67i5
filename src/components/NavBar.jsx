// src/components/NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./NavBar.css";

const NavBar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">ECOMMERCE</Link>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search for products, brands and more" />
        <button>Search</button>
      </div>

      <div className="nav-links">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/cart" className="cart">
          <FaShoppingCart size={20} />
          <span>{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
