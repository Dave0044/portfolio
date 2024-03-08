// Navbar.jsx

import React from 'react';

function Navbar() {
  return (
    <nav className="navbar shadow navbar-expand-lg fixed-top bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand navbarlogocss" href="#about">Ms Math David</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        
        <div class="container-fluid">
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-info btn-sm" type="submit">Search</button>
          </form>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav navbarlinkcss">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#work">Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#projects" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Projects
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#projects">Research</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#projects">Web</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;
