import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchIcon = () => <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>;
const PinIcon = () => <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;

const FILTER_CHIPS = ['All', 'Cardiologist', 'Dermatologist', 'Gynecologist', 'Pediatrician', 'Neurologist', 'Orthopedic'];
const DOCTORS = [
  { av: 'AR', avClass: 'dc-av-teal', name: 'Dr. Ahmed Raza', spec: 'Cardiologist', hosp: 'Aga Khan Hospital, Karachi · 15+ Years Experience', tags: ['MBBS, FCPS', 'Physical & Video', '✓ Verified', '★ 4.9 (312)'], fee: 'Rs. 3,000' },
  { av: 'FZ', avClass: 'dc-av-pink', name: 'Dr. Fatima Zahra', spec: 'Gynecologist', hosp: 'Shifa Hospital, Islamabad · 12+ Years Experience', tags: ['MBBS, MCPS', 'Physical & Video', '✓ Verified', '★ 4.8 (287)'], fee: 'Rs. 2,500' },
  { av: 'HA', avClass: 'dc-av-purple', name: 'Dr. Hassan Ali', spec: 'Dermatologist', hosp: 'Mayo Hospital, Lahore · 18+ Years Experience', tags: ['MBBS, FRCP', 'Physical Only', '✓ Verified', '★ 4.9 (245)'], fee: 'Rs. 3,500' },
  { av: 'SM', avClass: 'dc-av-amber', name: 'Dr. Sana Malik', spec: 'Pediatrician', hosp: "Children's Hospital, Lahore · 10+ Years Experience", tags: ['MBBS, DCH', 'Physical & Video', '✓ Verified', '★ 4.7 (198)'], fee: 'Rs. 2,000' },
  { av: 'UT', avClass: 'dc-av-green', name: 'Dr. Usman Tariq', spec: 'Orthopedic Surgeon', hosp: 'CMH, Rawalpindi · 20+ Years Experience', tags: ['MBBS, MS Ortho', 'Physical Only', '✓ Verified', '★ 4.8 (176)'], fee: 'Rs. 4,000' },
  { av: 'NH', avClass: 'dc-av-blue', name: 'Dr. Nadia Hussain', spec: 'Neurologist', hosp: 'PIMS Hospital, Islamabad · 14+ Years Experience', tags: ['MBBS, MRCP', 'Physical & Video', '✓ Verified', '★ 4.9 (223)'], fee: 'Rs. 3,500' },
];

export default function ListingsPage() {
  const [activeChip, setActiveChip] = useState('All');
  const [checkedSpecialty, setCheckedSpecialty] = useState(['Cardiologist']);
  const [checkedCity, setCheckedCity] = useState(['Karachi']);
  const [pageNum, setPageNum] = useState(1);

  const toggleSf = (list, item, setList) => {
    setList((prev) => prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]);
  };

  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link><i>›</i><span>Find Doctors</span></div>
          <div className="s-label">Doctor Directory</div>
          <h2 className="s-title">Find Your Doctor</h2>
          <p className="s-sub" style={{ marginTop: 8 }}>12,000+ verified doctors across Pakistan</p>
          <div className="listing-search" style={{ marginTop: 24 }}>
            <div className="search-field" style={{ flex: 2, background: 'var(--bg)' }}><SearchIcon /><input type="text" placeholder="Name, specialty or condition…" /></div>
            <div className="search-field" style={{ flex: 1, background: 'var(--bg)' }}><PinIcon /><select><option>All Cities</option><option>Karachi</option><option>Lahore</option><option>Islamabad</option><option>Rawalpindi</option><option>Peshawar</option></select></div>
            <button type="button" className="btn btn-teal">Search</button>
          </div>
        </div>
      </div>

      <div className="filters-sticky">
        <div className="filters-inner">
          {FILTER_CHIPS.map((chip) => (
            <button key={chip} type="button" className={`filter-chip ${activeChip === chip ? 'on' : ''}`} onClick={() => setActiveChip(chip)}>{chip}</button>
          ))}
          <div className="filter-sep" />
          <div className="filter-sort">Sort by: <select><option>Relevance</option><option>Rating: High to Low</option><option>Fee: Low to High</option><option>Experience</option></select></div>
        </div>
      </div>

      <div className="listings-body">
        <div className="sidebar-filters">
          <div className="sf-box">
            <div className="sf-title">Specialty <button type="button">Clear</button></div>
            {['Cardiologist', 'Dermatologist', 'Gynecologist', 'Pediatrician', 'Neurologist', 'Orthopedic'].map((s) => (
              <div key={s} className={`sf-row ${checkedSpecialty.includes(s) ? 'checked' : ''}`} onClick={() => toggleSf(checkedSpecialty, s, setCheckedSpecialty)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && toggleSf(checkedSpecialty, s, setCheckedSpecialty)}>
                <div className="sf-check">{checkedSpecialty.includes(s) ? '✓' : ''}</div>
                <span className="sf-label">{s}</span>
                <span className="sf-cnt">{s === 'Cardiologist' ? 420 : s === 'Dermatologist' ? 380 : s === 'Gynecologist' ? 350 : s === 'Pediatrician' ? 310 : s === 'Neurologist' ? 180 : 290}</span>
              </div>
            ))}
          </div>
          <div className="sf-box">
            <div className="sf-title">City <button type="button">Clear</button></div>
            {['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi'].map((c) => (
              <div key={c} className={`sf-row ${checkedCity.includes(c) ? 'checked' : ''}`} onClick={() => toggleSf(checkedCity, c, setCheckedCity)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && toggleSf(checkedCity, c, setCheckedCity)}>
                <div className="sf-check">{checkedCity.includes(c) ? '✓' : ''}</div>
                <span className="sf-label">{c}</span>
                <span className="sf-cnt">{c === 'Karachi' ? '3,200' : c === 'Lahore' ? '2,800' : c === 'Islamabad' ? '1,900' : '1,200'}</span>
              </div>
            ))}
          </div>
          <div className="sf-box">
            <div className="sf-title">Rating</div>
            <div className="sf-row"><div className="sf-check" /><span className="sf-label">4.5+ ★</span></div>
            <div className="sf-row"><div className="sf-check" /><span className="sf-label">4.0+ ★</span></div>
            <div className="sf-row"><div className="sf-check" /><span className="sf-label">Any rating</span></div>
          </div>
          <div className="sf-box">
            <div className="sf-title">Consultation Fee</div>
            <div className="range-inputs"><input type="number" placeholder="Min Rs." defaultValue={0} /><input type="number" placeholder="Max Rs." defaultValue={5000} /></div>
          </div>
          <div className="sf-box">
            <div className="sf-title">Consultation Type</div>
            <div className="sf-row"><div className="sf-check" /><span className="sf-label">In-person</span></div>
            <div className="sf-row"><div className="sf-check" /><span className="sf-label">Video call</span></div>
            <div className="sf-row"><div className="sf-check" /><span className="sf-label">Both</span></div>
          </div>
        </div>

        <div>
          <p style={{ fontSize: '.82rem', color: 'var(--muted)', marginBottom: 16 }}><strong style={{ color: 'var(--dark)' }}>247 doctors</strong> in Karachi</p>
          <div className="list-cards">
            {DOCTORS.map((d) => (
              <Link key={d.name} to="/profile" className="lc">
                <div className={`lc-av ${d.avClass}`}>{d.av}</div>
                <div className="lc-info">
                  <div className="lc-name">{d.name}</div>
                  <div className="lc-spec">{d.spec}</div>
                  <div className="lc-hosp">{d.hosp}</div>
                  <div className="lc-tags">
                    <span className="lc-tag">{d.tags[0]}</span>
                    <span className="lc-tag">{d.tags[1]}</span>
                    <span className="lc-tag badge badge-green" style={{ border: 'none' }}>{d.tags[2]}</span>
                    <span className="lc-tag rating" style={{ border: 'none' }}>{d.tags[3]}</span>
                  </div>
                </div>
                <div className="lc-right">
                  <div className="lc-fee">{d.fee}<small>per consultation</small></div>
                  <span className="btn btn-dark btn-sm" style={{ marginTop: 12 }}>Book Now</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="pagination">
            <button type="button" className="pg-btn" onClick={() => setPageNum((p) => Math.max(1, p - 1))}>‹</button>
            {[1, 2, 3].map((n) => (
              <button key={n} type="button" className={`pg-btn ${pageNum === n ? 'on' : ''}`} onClick={() => setPageNum(n)}>{n}</button>
            ))}
            <span className="pg-btn">…</span>
            <button type="button" className="pg-btn" onClick={() => setPageNum(12)}>12</button>
            <button type="button" className="pg-btn" onClick={() => setPageNum((p) => Math.min(12, p + 1))}>›</button>
          </div>
        </div>
      </div>
    </div>
  );
}
