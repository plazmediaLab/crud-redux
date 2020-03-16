import React from 'react';
// React Route
import { Link } from 'react-router-dom';


const Header = ({ title, btnValue }) => {
  return (
    <nav class="nav-bar bg-skyblue" id="navBar_2">
      <ul class="navbar-components">
        <li class="logo" title="The name of the website">

          <Link to="/">
            <i class="a-cube"></i>
            <span> {title} </span>
          </Link>
          
        </li>
        <li class="toggle" title="Menu">
          <a href="#!">
            <i class="a-dehaze"></i>
          </a>
        </li>
        <li class="toggle-hide">
          <div class="menu-items">
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