import React from "react";
import "../styles/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
  return (
    <div className="navbar-box">
      <nav class="navbar">
        <div class="logo">
          <a href="www.adeleyazdipaz.ca">YourShop</a>
        </div>
        <ul class="nav-links">
          <li>
            <a href="www.adeleyazdipaz.ca">Home</a>
          </li>
          <li>
            <a href="www.adeleyazdipaz.ca">Shop</a>
          </li>
          <li>
            <a href="www.adeleyazdipaz.ca">Categories</a>
          </li>
          <li>
            <a href="www.adeleyazdipaz.ca">About Us</a>
          </li>
          <li>
            <a href="www.adeleyazdipaz.ca">Contact</a>
          </li>
        </ul>
        <div class="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </div>
        <div class="cart">
        
            
          <a href="www.adeleyazdipaz.ca"> <FontAwesomeIcon icon={faShoppingCart} /></a>

        </div>
        <div class="user-account">
          <a href="www.adeleyazdipaz.ca">Login/My Account</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
