import React from 'react';
import '../../components/Header/Header.css';
import './Footer.css';
import {Link, useLocation} from 'react-router-dom';

function Footer() {
  const location = useLocation();

  return (
    <header className="footer">
      <a href="/" className="logo"/>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/home"
                  className={`nav__link ${location.pathname === '/home' ? 'nav__link_active' : ''}`}>Home</Link>
          </li>
          <li className="nav__item">
            <Link to="/blog"
                  className={`nav__link ${location.pathname === '/blog' ? 'nav__link_active' : ''}`}>Blog</Link>
          </li>
          <li className="nav__item">
            <Link to="/features"
                  className={`nav__link ${location.pathname === '/features' ? 'nav__link_active' : ''}`}>Features</Link>
          </li>
          <li className="nav__item">
            <Link to="/pricing"
                  className={`nav__link ${location.pathname === '/pricing' ? 'nav__link_active' : ''}`}>Pricing</Link>
          </li>
          <li className="nav__item">
            <Link to="/documentation"
                  className={`nav__link ${location.pathname === '/documentation' ? 'nav__link_active' : ''}`}>Documentation</Link>
          </li>
        </ul>
      </nav>
      <nav className="nav__social">
        <ul className="nav__list-social">
          <li className="nav__item-social">
            <a href="#" className="nav__link-social nav__link-social_type_face"/>
          </li>
          <li className="nav__item-social">
            <a href="#" className="nav__link-social nav__link-social_type_telegram"/>
          </li>
          <li className="nav__item-social">
            <a href="#" className="nav__link-social nav__link-social_type_twitter"/>
          </li>
          <li className="nav__item-social">
            <a href="#" className="nav__link-social nav__link-social_type_mail"/>
          </li>
        </ul>
      </nav>
      <button className="button">Get started</button>
      <p className="footer__copyright">Copyright © 2018 by Random site</p>
    </header>
  )
}

export default Footer;
