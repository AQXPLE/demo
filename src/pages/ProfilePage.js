import React, { useState, useMemo } from 'react';

const PinIcon = () => <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const UserIcon = () => <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>;

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'reviews', label: 'Reviews (312)' },
  { id: 'info', label: 'Info & Qualifications' },
  { id: 'book', label: 'Book Appointment' },
];

const SLOTS = ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'];
const TAKEN = ['12:00 PM', '4:00 PM'];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedSlot, setSelectedSlot] = useState('10:00 AM');
  const [sidebarSlot, setSidebarSlot] = useState('10:00 AM');

  const dateGrid = useMemo(() => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const out = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      out.push({ day: days[d.getDay()], date: d.getDate(), isTomorrow: i === 1 });
    }
    return out;
  }, []);

  const handleSlotClick = (slot, setter) => {
    if (TAKEN.includes(slot)) return;
    setter(slot);
  };

  return (
    <div className="page">
      <div className="prof-hero">
        <div className="prof-header">
          <div className="prof-av dc-av-teal" style={{ width: 100, height: 100, borderRadius: 20, fontSize: '2rem' }}>AR</div>
          <div>
            <div className="prof-badges">
              <span className="badge badge-green">✓ PMDC Verified</span>
              <span className="badge badge-yellow">⭐ Top Rated 2025</span>
              <span className="badge badge-teal">Physical & Video</span>
            </div>
            <div className="prof-name">Dr. Ahmed Raza</div>
            <div className="prof-spec">Cardiologist — Interventional & Preventive</div>
            <div className="prof-meta">
              <div className="pm-item"><PinIcon /> Aga Khan Hospital, Karachi</div>
              <div className="pm-item"><UserIcon /> 15+ Years Experience</div>
              <div className="rating">★ 4.9 <span style={{ fontWeight: 400, opacity: 0.7 }}>(312 reviews)</span></div>
            </div>
          </div>
          <div className="book-box">
            <div className="book-fee">Rs. 3,000<small>per consultation</small></div>
            <div className="book-avail">Next available: <span>Tomorrow, 10:00 AM</span></div>
            <button type="button" className="btn btn-teal btn-full" style={{ marginTop: 16 }}>Book Appointment</button>
            <button type="button" className="btn btn-outline btn-full" style={{ marginTop: 8 }}>Video Consultation</button>
            <button type="button" className="btn btn-ghost btn-full btn-sm" style={{ marginTop: 6, fontSize: '.78rem', color: 'var(--muted)' }}>📞 Call Clinic</button>
          </div>
        </div>
      </div>

      <div className="prof-tabs" style={{ maxWidth: 'none' }}>
        <div className="container" style={{ padding: '0 5%' }}>
          <div className="profile-tabs-wrap">
            {TABS.map(({ id, label }) => (
              <button key={id} type="button" className={`tab-btn ${activeTab === id ? 'on' : ''}`} onClick={() => setActiveTab(id)}>{label}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="container prof-layout" style={{ marginTop: 40, marginBottom: 80, padding: '0 5%' }}>
        <div>
          {activeTab === 'overview' && (
            <div id="tab-overview">
              <div className="prof-section">
                <h3>About Dr. Ahmed Raza</h3>
                <p>Dr. Ahmed Raza is a highly experienced interventional cardiologist with over 15 years of practice in cardiovascular medicine. He completed his MBBS from Aga Khan University and his FCPS (Cardiology) from CPSP. He has extensive experience in coronary angiography, angioplasty, pacemaker implantation, and heart failure management.</p>
                <p style={{ marginTop: 12 }}>He is known for his patient-centred approach, taking time to explain diagnoses and treatment plans clearly. He is fluent in Urdu and English and holds membership in the Pakistan Cardiac Society.</p>
              </div>
              <div className="prof-section">
                <h3>Services Offered</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['Coronary Angiography', 'Angioplasty', 'Echocardiography', 'Pacemaker Implantation', 'Heart Failure Management', 'Hypertension', 'Cholesterol Management', 'Stress Testing'].map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
              </div>
              <div className="prof-section">
                <h3>Qualifications</h3>
                <table className="info-table">
                  <tbody>
                    <tr><td>Degree</td><td>MBBS — Aga Khan University (2006)</td></tr>
                    <tr><td>Specialization</td><td>FCPS Cardiology — CPSP (2012)</td></tr>
                    <tr><td>Fellowship</td><td>Interventional Cardiology, UK (2014)</td></tr>
                    <tr><td>PMDC No.</td><td>PMDC/2006/KHI-04821</td></tr>
                    <tr><td>Languages</td><td>Urdu, English, Sindhi</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="prof-section">
                <h3>Hospital Affiliations</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ padding: 14, background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--r-sm)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                    <div><div style={{ fontWeight: 600, fontSize: '.875rem' }}>Aga Khan University Hospital</div><div style={{ fontSize: '.78rem', color: 'var(--muted)' }}>Stadium Road, Karachi — Mon, Wed, Fri</div></div>
                    <span className="badge badge-teal">Primary</span>
                  </div>
                  <div style={{ padding: 14, background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--r-sm)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                    <div><div style={{ fontWeight: 600, fontSize: '.875rem' }}>Tabba Heart Institute</div><div style={{ fontSize: '.78rem', color: 'var(--muted)' }}>KDA Scheme 1, Karachi — Tue, Thu</div></div>
                    <span className="badge badge-blue">Secondary</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div id="tab-reviews">
              <div className="review-summary">
                <div style={{ textAlign: 'center' }}>
                  <div className="rs-big">4.9</div>
                  <div className="rs-stars">★★★★★</div>
                  <div className="rs-label">312 reviews</div>
                </div>
                <div className="bar-rows" style={{ flex: 1, paddingLeft: 20 }}>
                  {[['5★', 82], ['4★', 12], ['3★', 4], ['2★', 1], ['1★', 1]].map(([label, pct]) => (
                    <div key={label} className="bar-row"><span className="bar-label">{label}</span><div className="bar-track"><div className="bar-fill" style={{ width: `${pct}%` }} /></div><span style={{ fontSize: '.72rem', color: 'var(--muted)', width: 30, textAlign: 'right' }}>{pct}%</span></div>
                  ))}
                </div>
              </div>
              {[
                { av: 'KA', name: 'Kamran Aziz', date: 'January 2026', text: 'Exceptional doctor. He spent a full 30 minutes explaining my father\'s condition and all treatment options. Very knowledgeable, calm, and compassionate. Highly recommend to anyone with cardiac concerns.' },
                { av: 'RK', avStyle: { background: '#FCE7F3', color: '#9D174D' }, name: 'Rabia Khan', date: 'December 2025', text: 'Best cardiologist in Karachi without question. I\'ve been his patient for 3 years and the level of care has always been outstanding. He remembers every detail of your case.' },
              ].map((r) => (
                <div key={r.name} className="rev-card">
                  <div className="rev-head"><div className="rev-av" style={r.avStyle}>{r.av}</div><div><div className="rev-name">{r.name}</div><div className="rev-date">{r.date} · <span style={{ color: '#F59E0B' }}>★★★★★</span></div></div></div>
                  <p className="rev-text">{r.text}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'info' && (
            <div id="tab-info">
              <div className="prof-section">
                <h3>Complete Profile Information</h3>
                <table className="info-table">
                  <tbody>
                    <tr><td>Full Name</td><td>Dr. Ahmed Raza</td></tr>
                    <tr><td>Specialty</td><td>Cardiologist (Interventional & Preventive)</td></tr>
                    <tr><td>Experience</td><td>15+ Years</td></tr>
                    <tr><td>Primary Hospital</td><td>Aga Khan Hospital, Karachi</td></tr>
                    <tr><td>Degrees</td><td>MBBS, FCPS (Cardiology)</td></tr>
                    <tr><td>PMDC No.</td><td>PMDC/2006/KHI-04821</td></tr>
                    <tr><td>City</td><td>Karachi</td></tr>
                    <tr><td>Languages</td><td>Urdu, English, Sindhi</td></tr>
                    <tr><td>Consultation</td><td>Physical & Video Call</td></tr>
                    <tr><td>In-person Fee</td><td>Rs. 3,000</td></tr>
                    <tr><td>Video Fee</td><td>Rs. 2,000</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'book' && (
            <div id="tab-book">
              <div className="prof-section">
                <h3>Select Date & Time</h3>
                <div className="profile-date-grid">
                  {dateGrid.map(({ day, date, isTomorrow }) => (
                    <div key={date} className="slot" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, padding: '8px 4px' }}><span style={{ fontSize: '.65rem', color: 'var(--muted)' }}>{day}</span><span style={{ fontSize: '.9rem', fontWeight: 600 }}>{date}</span></div>
                  ))}
                </div>
                <h3 style={{ marginBottom: 14 }}>Available Slots — Tomorrow</h3>
                <div className="slots-grid profile-book-slots">
                  {SLOTS.map((slot) => (
                    <div key={slot} className={`slot ${selectedSlot === slot ? 'on' : ''} ${TAKEN.includes(slot) ? 'taken' : ''}`} onClick={() => handleSlotClick(slot, setSelectedSlot)} role="button" tabIndex={0}>{slot}</div>
                  ))}
                </div>
                <div style={{ marginTop: 24, padding: 16, background: 'var(--teal-light)', borderRadius: 'var(--r-sm)' }}>
                  <div style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--teal)', marginBottom: 8 }}>Booking Summary</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.875rem', marginBottom: 6 }}><span style={{ color: 'var(--mid)' }}>Doctor</span><strong>Dr. Ahmed Raza</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.875rem', marginBottom: 6 }}><span style={{ color: 'var(--mid)' }}>Time</span><strong>Tomorrow, {selectedSlot}</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.875rem' }}><span style={{ color: 'var(--mid)' }}>Fee</span><strong>Rs. 3,000</strong></div>
                </div>
                <button type="button" className="btn btn-teal btn-lg btn-full" style={{ marginTop: 16 }}>Confirm Appointment</button>
              </div>
            </div>
          )}
        </div>

        <div className="prof-sidebar">
          <div className="ps-box">
            <h4>Quick Book</h4>
            <p style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: 12 }}>Select a time slot</p>
            <div className="slots-grid">
              {SLOTS.slice(0, 6).map((slot) => (
                <div key={slot} className={`slot ${sidebarSlot === slot ? 'on' : ''} ${TAKEN.includes(slot) ? 'taken' : ''}`} onClick={() => handleSlotClick(slot, setSidebarSlot)} role="button" tabIndex={0}>{slot}</div>
              ))}
            </div>
            <button type="button" className="btn btn-teal btn-full" style={{ marginTop: 14 }}>Book Appointment</button>
            <button type="button" className="btn btn-outline btn-full" style={{ marginTop: 8 }}>Video Consultation</button>
          </div>
          <div className="ps-box">
            <h4>Location</h4>
            <p style={{ fontSize: '.85rem', color: 'var(--mid)', lineHeight: 1.6 }}>Aga Khan University Hospital<br />Stadium Road, Karachi 74800</p>
            <div className="map-ph">📍<span>View on Maps</span></div>
          </div>
          <div className="ps-box">
            <h4>Consultation Fee</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.875rem', padding: '9px 0', borderBottom: '1px solid var(--border2)' }}><span style={{ color: 'var(--muted)' }}>In-person</span><strong>Rs. 3,000</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.875rem', padding: '9px 0' }}><span style={{ color: 'var(--muted)' }}>Video call</span><strong>Rs. 2,000</strong></div>
          </div>
          <div className="ps-box">
            <h4>Share Profile</h4>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <button type="button" className="btn btn-outline btn-sm">📋 Copy Link</button>
              <button type="button" className="btn btn-outline btn-sm">📤 Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
