import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-logo" style={{ color: '#fff', marginBottom: '14px' }}>
              <div className="logo-pulse" /> MedConnect
            </Link>
            <p>Pakistan's trusted healthcare directory connecting patients with verified doctors across 50+ cities nationwide.</p>
            <div className="footer-socials">
              <div className="soc-btn">𝕏</div>
              <div className="soc-btn">f</div>
              <div className="soc-btn">in</div>
              <div className="soc-btn">▶</div>
            </div>
          </div>
          <div className="footer-col">
            <h4>For Patients</h4>
            <Link to="/listings">Find Doctors</Link>
            <Link to="/listings">Book Appointment</Link>
            <span style={{ display: 'block', marginBottom: 10, color: 'rgba(255,255,255,.45)', fontSize: '.85rem' }}>Lab Tests</span>
            <Link to="/blog">Health Blog</Link>
          </div>
          <div className="footer-col">
            <h4>For Doctors</h4>
            <Link to="/register">Register Practice</Link>
            <span style={{ display: 'block', marginBottom: 10, color: 'rgba(255,255,255,.45)', fontSize: '.85rem' }}>Dashboard</span>
            <span style={{ display: 'block', marginBottom: 10, color: 'rgba(255,255,255,.45)', fontSize: '.85rem' }}>Pricing</span>
            <Link to="/contact">Support</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <span style={{ display: 'block', marginBottom: 10, color: 'rgba(255,255,255,.45)', fontSize: '.85rem' }}>Privacy Policy</span>
            <span style={{ display: 'block', marginBottom: 10, color: 'rgba(255,255,255,.45)', fontSize: '.85rem' }}>Terms</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 MedConnect. All rights reserved. Made with care in Pakistan.</p>
          <div className="footer-status"><div className="status-dot" /> All Systems Operational</div>
        </div>
      </div>
    </footer>
  );
}
