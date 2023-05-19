import React from 'react'
import './navbar.css';
import { Link } from "react-router-dom";

function navbar() {
    return (
        <nav className="nav" data-testid="navigation">
       
        <div className="navbar-container" data-testid="navbar-container">
          <ul className="nav-menu">
            <Link to="/" className="nav-links">
              <li className="nav-item">
                <div className="nav-links">Home</div>
              </li>
            </Link>

            <Link to="/stories" className="nav-links">
              <li className="nav-item">
                <div className="nav-links">Historias</div>
              </li>
            </Link>


            <h1 className="navbar-logo" data-testid="navbar-logo">
          <b>Retratos <br></br>da maldade</b>
        </h1>
            <Link to="/bios" className="nav-links">
              <li className="nav-item">
                <div className="nav-links">Biografias</div>
              </li>
            </Link>
            <Link to="/unsolved" className="nav-links">
              <li className="nav-item">
                <div className="nav-links">Por resolver</div>
              </li>
            </Link>
          </ul>
        </div>

        <span className="menu-icon">
          {/* <MenuIcon className='menu-icon' onClick={toggleClass}/> */}
        </span>

       
      </nav>
    )
}

export default navbar
