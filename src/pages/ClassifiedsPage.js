import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PinIcon = () => <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;

const LISTINGS = [
  { icon: '👨‍⚕️', bg: '#DBEAFE', type: 'Job Opening', title: 'General Physician Needed — Full Time', desc: 'Reputable clinic in DHA Karachi seeking an experienced GP. Competitive salary and benefits package.', loc: 'DHA, Karachi', price: 'Rs. 150,000/mo', date: 'Posted 2 days ago' },
  { icon: '🏥', bg: '#D1FAE5', type: 'Clinic Space', title: 'Premium Clinic Space Available for Rent', desc: '1,200 sq ft fully furnished clinic space in Gulberg Lahore. Shared reception, available now.', loc: 'Gulberg, Lahore', price: 'Rs. 85,000/mo', date: 'Posted 5 days ago' },
  { icon: '🔬', bg: '#FCE7F3', type: 'Equipment', title: 'Ultrasound Machine — Samsung HS40', desc: 'Lightly used Samsung HS40 ultrasound machine. 2022 model, excellent condition. Includes all probes.', loc: 'Islamabad', price: 'Rs. 2,200,000', date: 'Posted 1 week ago' },
  { icon: '🤝', bg: '#EDE9FE', type: 'Partnership', title: 'Seeking Partner for Diagnostic Centre', desc: 'Established diagnostic lab in Rawalpindi seeking an investor/partner for expansion. Full books available.', loc: 'Rawalpindi', price: 'Investment Required', date: 'Posted 2 weeks ago' },
  { icon: '💼', bg: '#FEF3C7', type: 'Job Opening', title: 'Dermatologist — Part-Time (3 days/week)', desc: 'Modern skin clinic in Bahria Town Karachi. Looking for a qualified dermatologist for part-time evenings.', loc: 'Bahria Town, Karachi', price: 'Rs. 80,000/mo', date: 'Posted 3 days ago' },
  { icon: '🏢', bg: '#D1FAE5', type: 'Clinic Space', title: 'Medical Suite in F-8 — Islamabad', desc: '600 sq ft consulting room in a busy medical complex. Parking, waiting area, and nurse room included.', loc: 'F-8, Islamabad', price: 'Rs. 60,000/mo', date: 'Posted 4 days ago' },
];

const CHIPS = ['All Listings', 'Jobs', 'Clinic Space', 'Equipment', 'Partnerships'];

export default function ClassifiedsPage() {
  const [activeChip, setActiveChip] = useState('All Listings');

  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link><i>›</i><span>Classifieds</span></div>
          <div className="s-label">Classifieds</div>
          <h2 className="s-title">Healthcare Classifieds</h2>
          <p className="s-sub">Jobs, clinic spaces, equipment, and healthcare opportunities across Pakistan</p>
        </div>
      </div>
      <div className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 10, marginBottom: 32, flexWrap: 'wrap' }}>
            {CHIPS.map((c) => (
              <button key={c} type="button" className={`filter-chip ${activeChip === c ? 'on' : ''}`} onClick={() => setActiveChip(c)}>{c}</button>
            ))}
            <button type="button" className="btn btn-teal btn-sm" style={{ marginLeft: 'auto' }}>+ Post Listing</button>
          </div>
          <div className="classif-grid">
            {LISTINGS.map((item) => (
              <div key={item.title} className="classif-card">
                <div className="cc-img" style={{ background: item.bg }}>{item.icon}</div>
                <div className="cc-body">
                  <div className="cc-type">{item.type}</div>
                  <div className="cc-title">{item.title}</div>
                  <p style={{ fontSize: '.8rem', color: 'var(--muted)', marginTop: 4 }}>{item.desc}</p>
                  <div className="cc-loc"><PinIcon />{item.loc}</div>
                </div>
                <div className="cc-foot"><div className="cc-price">{item.price}</div><div className="cc-date">{item.date}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
