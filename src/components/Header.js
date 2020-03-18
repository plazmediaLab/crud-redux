import React from 'react';
// React Route
import { Link } from 'react-router-dom';


const Header = ({ title, btnValue }) => {
  return (
    <nav className="nav-bar bg-skyblue" id="navBar_2">
      <ul className="navbar-components">
        <li className="logo" title="The name of the website">

          <Link to="/">
            <i className="a-cube"></i>
            <span> {title} </span>
          </Link>
          
        </li>
        <li className="toggle" title="Menu">
          <a href="#!">
            <i className="a-dehaze"></i>
          </a>
        </li>
        <li className="toggle-hide">
          <div className="menu-items">
            <Link to="/products/new" className="btn btn-100 btn-s-c btn-sunflower">
              <i className="a-shopping_basket"></i>&nbsp;
              { btnValue }
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;