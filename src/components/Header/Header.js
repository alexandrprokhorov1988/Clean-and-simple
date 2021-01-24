import React from 'react';
import './Header.css';
import {Link, useLocation} from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <a href="/" className="header__logo"/>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/home"
                  className={`header__nav-link ${location.pathname === '/home' ? 'header__nav-link_active' : ''}`}>Home</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/blog"
                  className={`header__nav-link ${location.pathname === '/blog' ? 'header__nav-link_active' : ''}`}>Blog</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/features"
                  className={`header__nav-link ${location.pathname === '/features' ? 'header__nav-link_active' : ''}`}>Features</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/pricing"
                  className={`header__nav-link ${location.pathname === '/pricing' ? 'header__nav-link_active' : ''}`}>Pricing</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/documentation"
                  className={`header__nav-link ${location.pathname === '/documentation' ? 'header__nav-link_active' : ''}`}>Documentation</Link>
          </li>
        </ul>
      </nav>
      <nav className="header__nav-social">
        <ul className="header__nav-list-social">
          <li className="header__nav-item-social">
            <a href="#" className="header__nav-link-social header__nav-link-social_type_face"/>
          </li>
          <li className="header__nav-item-social">
            <a href="#" className="header__nav-link-social header__nav-link-social_type_telegram"/>
          </li>
          <li className="header__nav-item-social">
            <a href="#" className="header__nav-link-social header__nav-link-social_type_twitter"/>
          </li>
          <li className="header__nav-item-social">
            <a href="#" className="header__nav-link-social header__nav-link-social_type_mail"/>
          </li>
        </ul>
      </nav>
      <button className="header__button">Get started</button>
    </header>
  )
}

export default Header;
