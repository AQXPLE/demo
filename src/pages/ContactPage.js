import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link><i>›</i><span>Contact</span></div>
          <div className="s-label">Get in touch</div>
          <h2 className="s-title">Contact Us</h2>
          <p className="s-sub">We're here to help patients, doctors, and partners</p>
        </div>
      </div>
      <div className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form">
              <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.1rem', marginBottom: 20 }}>Send us a message</h3>
              <div className="form-row">
                <div className="form-group"><label>First Name</label><input type="text" placeholder="Ahmed" /></div>
                <div className="form-group"><label>Last Name</label><input type="text" placeholder="Khan" /></div>
              </div>
              <div className="form-group"><label>Email Address</label><input type="email" placeholder="ahmed@example.com" /></div>
              <div className="form-group"><label>Phone Number</label><input type="tel" placeholder="+92 300 0000000" /></div>
              <div className="form-group">
                <label>Subject</label>
                <select><option>General Inquiry</option><option>Patient Support</option><option>Doctor Registration</option><option>Technical Issue</option><option>Partnership</option></select>
              </div>
              <div className="form-group"><label>Message</label><textarea placeholder="How can we help?" /></div>
              <button type="button" className="btn btn-teal btn-full btn-lg">Send Message</button>
            </div>
            <div className="contact-info">
              <div className="ci-box"><div className="ci-icon">📍</div><div><div className="ci-title">Head Office</div><div className="ci-val">Plot 42, PECHS Block 6<br />Karachi, Pakistan</div></div></div>
              <div className="ci-box"><div className="ci-icon">📞</div><div><div className="ci-title">Phone</div><div className="ci-val">021-111-744-326<br />Mon–Fri, 9:00 AM – 6:00 PM</div></div></div>
              <div className="ci-box"><div className="ci-icon">✉️</div><div><div className="ci-title">Email</div><div className="ci-val">support@medconnect.com<br />doctors@medconnect.com</div></div></div>
              <div className="ci-box"><div className="ci-icon">💬</div><div><div className="ci-title">Live Chat</div><div className="ci-val">Available on the platform<br />24/7 AI + human support</div></div></div>
              <div style={{ background: 'var(--dark)', borderRadius: 'var(--r)', padding: 24, color: '#fff' }}>
                <div style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '.95rem', marginBottom: 8 }}>Are you a doctor?</div>
                <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.6, marginBottom: 16 }}>For registration, profile issues, or billing — our doctor support team responds within 2 hours.</p>
                <Link to="/register" className="btn btn-teal btn-sm btn-full">Doctor Support →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
