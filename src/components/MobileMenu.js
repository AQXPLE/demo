import React from 'react';
import { Link } from 'react-router-dom';

export default function MobileMenu({ isMenuOpen, closeMenu }) {
  return (
    <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} id="mobileMenu">
      <Link to="/" onClick={closeMenu}>Home</Link>
      <Link to="/listings" onClick={closeMenu}>Find Doctors</Link>
      <Link to="/classifieds" onClick={closeMenu}>Classifieds</Link>
      <Link to="/blog" onClick={closeMenu}>Blog</Link>
      <Link to="/about" onClick={closeMenu}>About</Link>
      <Link to="/contact" onClick={closeMenu}>Contact</Link>
      <Link to="/login" onClick={closeMenu}>Log In</Link>
      <Link to="/register" onClick={closeMenu}>Register Practice</Link>
    </div>
  );
}
