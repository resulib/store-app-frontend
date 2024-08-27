import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
  <Link to="/" className="store-name">
    <img src="https://freelogopng.com/images/all_img/1685901477apple-logo-transparent.png" 
    alt="Apple Store Logo" className="logo" />
    {/* Apple Store .apk */}
  </Link>
  {/* <Link to="/contact">Contact</Link> */}
</div>
      <div className="header-right">
        <input type="text" placeholder="Search" className="search-bar" />
        <Link to="/login">Login/</Link>
        <Link to="/register">Register</Link>

      </div>
    </header>
  );
}

export default Header;
