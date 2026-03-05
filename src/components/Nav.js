import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/listings', label: 'Find Doctors' },
  { to: '/classifieds', label: 'Classifieds' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav({ toggleMenu }) {
  const location = useLocation();

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  };

  return (
    <nav>
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          <div className="logo-pulse" /> MedConnect
        </Link>
        <div className="nav-links">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${isActive(to) ? 'active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <Link to="/login" className="btn btn-ghost btn-sm">
            Log In
          </Link>
          <Link to="/register" className="btn btn-dark btn-sm">
            Register Practice
          </Link>
        </div>
        <div className="nav-burger" onClick={toggleMenu} id="burger" role="button" aria-label="Menu">
          <span /><span /><span />
        </div>
      </div>
    </nav>
  );
}
