import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <Link className="navbar-brand" to="/#">
        <img src={process.env.PUBLIC_URL + '/img/graduate.png'} alt="logo" className='me-1' style={{maxHeight: "25px"}}></img><small>Student Management</small>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/major">Major</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Login">Student</NavLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/#">welcome to ... </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#"><i className="bi-box-arrow-right" /></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
        </div>
    )
}
export default Header;