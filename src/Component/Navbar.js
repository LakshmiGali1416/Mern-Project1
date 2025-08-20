import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm" id="mainNavbar">
      <div className="container">
        <Link className="navbar-brand fw-bold text-danger" to="/">
          💬 AI Pick-Up Rater
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav me-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="bi bi-house-door-fill me-1"></i>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <i className="bi bi-info-circle-fill me-1"></i>About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rating">
                <i className="bi bi-star-fill me-1"></i>Rating
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favorites">
                <i className="bi bi-heart-fill me-1"></i>Favorites
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/feedback">
                <i className="bi bi-chat-left-text-fill me-1"></i>Feedback
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/library">
                <i className="bi bi-journal-bookmark-fill me-1"></i>Library
              </Link>
            </li>
        <li className="nav-item">
              <Link className="nav-link" to="/community">
                <i className="bi bi-people-fill me-1"></i>Community
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <i className="bi bi-envelope-fill me-1"></i>Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
