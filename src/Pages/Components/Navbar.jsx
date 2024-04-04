// Navbar.jsx

import React from 'react';

function Navbar() {
  return (
    <nav className="navbar shadow text-center navbar-expand-lg fixed-top bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand navbarlogocss" href="#about">MSc Math David</a>
          <button className="navbar-toggler px-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon px-1"></span>
          </button>
        </div>
        

        <div className="container-fluid text-center">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn rounded btn-outline-info btn-sm" type="submit">Search</button>
          </form>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav info navbarlinkcss">
            <li className="nav-item px-1">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item px-1 dropdown">
              <a className="nav-link dropdown-toggle" href="#projects" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Projects
              </a>
              <ul className="dropdown-menu px-1">
                <li><a className="dropdown-item" href="#projects">Research</a></li>
                <li><a className="dropdown-item" href="#projects">Web</a></li>
              </ul>
            </li>
            <li className="nav-item px-1 dropdown">
              <a className="nav-link dropdown-toggle" href="#education" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Work
              </a>
              <ul className="dropdown-menu px-1">
                <li><a className="dropdown-item" href="#list-item-1">Professor</a></li>
                <li><a className="dropdown-item" href="#list-item-2">Particular Professor</a></li>
                <li><a className="dropdown-item" href="#list-item-3">Researcher</a></li>
              </ul>
            </li>
            <li className="nav-item px-1 dropdown">
              <a className="nav-link dropdown-toggle" href="#education" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Education
              </a>
              <ul className="dropdown-menu px-1">
                <li><a className="dropdown-item" href="#item-1">College</a></li>
                <li><a className="dropdown-item" href="#item-2">Degree</a></li>
                <li><a className="dropdown-item" href="#item-3">Teach</a></li>
                <li><a className="dropdown-item" href="#item-4">Master</a></li>
                <li><a className="dropdown-item" href="#item-5">Postgrade</a></li>
              </ul>
            </li>
            <li className="nav-item px-1">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item px-1">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;
