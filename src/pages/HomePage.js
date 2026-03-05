import React from 'react';
import { Link } from 'react-router-dom';

const SearchIcon = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
  </svg>
);
const PinIcon = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const ChartIcon = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);
const UserIcon = () => (
  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="4" /><path d="M20 21a8 8 0 1 0-16 0" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-glow1" />
          <div className="hero-glow2" />
          <div className="hero-grid-bg" />
        </div>
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-badge"><div className="hero-badge-dot" /> Pakistan's #1 Healthcare Directory</div>
            <h1>Find <em>the right</em><br />doctor, faster.</h1>
            <p className="hero-sub">Search 12,000+ verified doctors across 50+ cities. Compare ratings, book appointments, and get the care you deserve — instantly.</p>
            <div className="hero-actions">
              <Link to="/listings" className="btn btn-teal btn-lg"><SearchIcon /> Find a Doctor</Link>
              <Link to="/register" className="btn btn-outline btn-lg">Register Your Practice</Link>
            </div>
            <div className="hero-trust">
              <div className="trust-avatars">
                <div className="trust-av">KA</div>
                <div className="trust-av dc-av-pink">SN</div>
                <div className="trust-av dc-av-purple">RM</div>
                <div className="trust-av dc-av-amber">TQ</div>
              </div>
              <div className="trust-text"><strong>500,000+ patients</strong> use MedConnect each month</div>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-search-card">
              <div className="search-card-title">Search Doctors</div>
              <div className="search-row">
                <div className="search-field">
                  <SearchIcon />
                  <input type="text" placeholder="Doctor name, specialty or condition…" />
                </div>
                <div className="search-field">
                  <PinIcon />
                  <select>
                    <option>All Cities</option>
                    <option>Karachi</option><option>Lahore</option><option>Islamabad</option>
                    <option>Rawalpindi</option><option>Faisalabad</option><option>Peshawar</option>
                    <option>Quetta</option><option>Multan</option><option>Hyderabad</option>
                  </select>
                </div>
                <div className="search-field">
                  <ChartIcon />
                  <select>
                    <option>All Specialties</option>
                    <option>Cardiologist</option><option>Dermatologist</option><option>Gynecologist</option>
                    <option>Pediatrician</option><option>Neurologist</option><option>General Physician</option>
                    <option>Orthopedic Surgeon</option><option>Dentist</option>
                  </select>
                </div>
                <Link to="/listings" className="btn btn-teal btn-full">
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
                  Search Doctors
                </Link>
              </div>
              <div className="popular-wrap">
                <div className="popular-label">Popular searches</div>
                <div className="popular-chips">
                  {['Cardiologist', 'Dermatologist', 'Gynecologist', 'Pediatrician', 'Neurologist'].map((s) => (
                    <Link key={s} to="/listings" className="chip">{s}</Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker-bar">
        <div className="ticker-track">
          {[
            ['12,000+', 'Verified Doctors'],
            ['50+', 'Cities Covered'],
            ['500,000+', 'Happy Patients'],
            ['200+', 'Partner Hospitals'],
            ['4.8★', 'Average Rating'],
            ['15+', 'Specialties'],
            ['24/7', 'Online Consultation'],
            ['12,000+', 'Verified Doctors'],
            ['50+', 'Cities Covered'],
            ['500,000+', 'Happy Patients'],
            ['200+', 'Partner Hospitals'],
            ['4.8★', 'Average Rating'],
            ['15+', 'Specialties'],
            ['24/7', 'Online Consultation'],
          ].flatMap(([num, label], i) => [
            <div key={`a-${i}`} className="t-item"><span className="t-num">{num}</span><span className="t-label">{label}</span></div>,
            i < 13 ? <span key={`s-${i}`} className="t-sep">✦</span> : null,
          ]).filter(Boolean)}
        </div>
      </div>

      <div className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="sh">
            <div><div className="s-label">Browse by specialty</div><h2 className="s-title">Find the right specialist</h2></div>
            <Link to="/listings" className="sh-right">See all specialties</Link>
          </div>
          <div className="spec-grid">
            {[
              ['🫀', 'Cardiologist', '420+ doctors'],
              ['🦷', 'Dentist', '450+ doctors'],
              ['👶', 'Pediatrician', '310+ doctors'],
              ['🧠', 'Neurologist', '180+ doctors'],
              ['💊', 'General Physician', '680+ doctors'],
              ['🩺', 'Gynecologist', '350+ doctors'],
              ['🦴', 'Orthopedic', '290+ doctors'],
              ['👁️', 'Ophthalmologist', '220+ doctors'],
              ['🧬', 'Dermatologist', '380+ doctors'],
              ['🧪', 'Gastroenterologist', '160+ doctors'],
              ['🫁', 'Pulmonologist', '130+ doctors'],
              ['🧘', 'Psychiatrist', '140+ doctors'],
            ].map(([icon, name, count]) => (
              <Link key={name} to="/listings" className="spec-card">
                <div className="spec-icon">{icon}</div>
                <div className="spec-name">{name}</div>
                <div className="spec-count">{count}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="sh">
            <div><div className="s-label">Top professionals</div><h2 className="s-title">Highest rated doctors</h2></div>
            <Link to="/listings" className="sh-right">Browse all doctors</Link>
          </div>
          <div className="doc-grid">
            {[
              ['AR', 'dc-av-teal', 'Dr. Ahmed Raza', 'Cardiologist', 'Aga Khan Hospital, Karachi', '15+ Yrs', '4.9', '312', 'Rs. 3,000'],
              ['FZ', 'dc-av-pink', 'Dr. Fatima Zahra', 'Gynecologist', 'Shifa Hospital, Islamabad', '12+ Yrs', '4.8', '287', 'Rs. 2,500'],
              ['HA', 'dc-av-purple', 'Dr. Hassan Ali', 'Dermatologist', 'Mayo Hospital, Lahore', '18+ Yrs', '4.9', '245', 'Rs. 3,500'],
              ['SM', 'dc-av-amber', 'Dr. Sana Malik', 'Pediatrician', "Children's Hospital, Lahore", '10+ Yrs', '4.7', '198', 'Rs. 2,000'],
            ].map(([av, avClass, name, spec, hosp, exp, rating, reviews, fee]) => (
              <Link key={name} to="/profile" className="doc-card">
                <div className="dc-top">
                  <div className={`dc-av ${avClass}`}>{av}</div>
                  <div>
                    <div className="dc-name">{name}</div>
                    <div className="dc-spec">{spec}</div>
                    <div className="dc-hosp">{hosp}</div>
                  </div>
                </div>
                <div className="dc-body">
                  <div className="dc-meta">
                    <div className="dc-exp"><UserIcon /> {exp}</div>
                    <div className="rating">★ {rating} <span style={{ fontWeight: 400, opacity: 0.7 }}>({reviews})</span></div>
                    <div className="badge badge-green">✓ Verified</div>
                  </div>
                </div>
                <div className="dc-foot">
                  <div className="dc-fee"><small>Consultation</small>{fee}</div>
                  <span className="btn btn-dark btn-sm">Book Now</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="sh center" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div><div className="s-label">Simple process</div><h2 className="s-title">Book in 3 easy steps</h2></div>
          </div>
          <div className="steps-grid">
            <div className="step"><span className="step-num">01</span><div className="step-icon">🔍</div><h3>Search</h3><p>Find the right specialist by name, specialty, location, or hospital. Filter by ratings, fees, and availability.</p></div>
            <div className="step"><span className="step-num">02</span><div className="step-icon">📅</div><h3>Book</h3><p>Choose a convenient time slot and confirm your appointment instantly. No waiting, no phone calls needed.</p></div>
            <div className="step"><span className="step-num">03</span><div className="step-icon">✅</div><h3>Visit & Rate</h3><p>Visit the doctor at the scheduled time. Rate your experience and help thousands of other patients decide.</p></div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="sh">
            <div><div className="s-label">Nationwide coverage</div><h2 className="s-title">Doctors across Pakistan</h2></div>
            <Link to="/listings" className="sh-right">View all cities</Link>
          </div>
          <div className="cities-grid">
            {[['Karachi', '3,200+ doctors'], ['Lahore', '2,800+ doctors'], ['Islamabad', '1,900+ doctors'], ['Rawalpindi', '1,200+ doctors'], ['Faisalabad', '980+ doctors'], ['Peshawar', '760+ doctors'], ['Multan', '640+ doctors'], ['Quetta', '420+ doctors']].map(([city, count]) => (
              <Link key={city} to="/listings" className="city-card">
                <div><div className="city-name">{city}</div><div className="city-count">{count}</div></div>
                <span className="city-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="section" style={{ background: 'var(--white)', padding: '94px 0' }}>
        <div className="container">
          <div className="sh">
            <div><div className="s-label">What patients say</div><h2 className="s-title">Trusted by hundreds<br />of thousands</h2></div>
          </div>
          <div className="testi-grid">
            <div className="testi-card"><div className="testi-stars">★★★★★</div><p className="testi-text">"MedConnect made it incredibly easy to find a cardiologist for my father. The reviews were genuine, the profiles detailed, and the booking was completely seamless."</p><div className="testi-author"><div className="testi-av dc-av-teal">KA</div><div><div className="testi-name">Kamran Aziz</div><div className="testi-role">Patient, Karachi</div></div></div></div>
            <div className="testi-card"><div className="testi-stars">★★★★★</div><p className="testi-text">"I found the best dermatologist in Lahore through MedConnect. The detailed profile helped me make a confident decision before even visiting the clinic."</p><div className="testi-author"><div className="testi-av dc-av-pink">SN</div><div><div className="testi-name">Sara Noor</div><div className="testi-role">Patient, Lahore</div></div></div></div>
            <div className="testi-card"><div className="testi-stars">★★★★☆</div><p className="testi-text">"As a doctor, my MedConnect profile brings in new patients every single week. The dashboard is simple, and my visibility has improved tremendously since joining."</p><div className="testi-author"><div className="testi-av dc-av-purple">UT</div><div><div className="testi-name">Dr. Usman Tariq</div><div className="testi-role">Orthopedic Surgeon, Islamabad</div></div></div></div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="sh">
            <div><div className="s-label">Health & wellness</div><h2 className="s-title">Latest from our blog</h2></div>
            <Link to="/blog" className="sh-right">Read more</Link>
          </div>
          <div className="blog-grid">
            <Link to="/blog" className="blog-card"><div className="blog-img" style={{ background: 'var(--teal-light)' }}>🫀</div><div className="blog-body"><div className="blog-tag">Cardiology</div><div className="blog-title">5 Warning Signs of Heart Disease You Should Never Ignore</div><p style={{ fontSize: '.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>Early detection saves lives. Learn the key symptoms that require immediate medical attention.</p><div className="blog-meta">Dr. Ahmed Raza · Jan 15, 2026 · 5 min read</div></div></Link>
            <Link to="/blog" className="blog-card"><div className="blog-img" style={{ background: '#FCE7F3' }}>🧬</div><div className="blog-body"><div className="blog-tag">Dermatology</div><div className="blog-title">How to Build a Skincare Routine for Pakistan's Climate</div><p style={{ fontSize: '.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>Expert tips on protecting your skin from humidity, sun exposure, and pollution.</p><div className="blog-meta">Dr. Hassan Ali · Jan 10, 2026 · 4 min read</div></div></Link>
            <Link to="/blog" className="blog-card"><div className="blog-img" style={{ background: '#EDE9FE' }}>👶</div><div className="blog-body"><div className="blog-tag">Pediatrics</div><div className="blog-title">Vaccination Schedule Every Pakistani Parent Should Know</div><p style={{ fontSize: '.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>A complete guide to keeping your children protected against preventable diseases.</p><div className="blog-meta">Dr. Sana Malik · Jan 5, 2026 · 6 min read</div></div></Link>
          </div>
        </div>
      </div>

      <div style={{ padding: '0 0 96px' }}>
        <div className="cta-band">
          <div className="cta-glow" />
          <div className="cta-left">
            <div className="cta-label">For Healthcare Professionals</div>
            <h2>Are you a doctor?<br />Grow your practice.</h2>
            <p>Join Pakistan's fastest-growing healthcare directory. Create your verified profile, reach more patients, and manage appointments in one place. Free to get started.</p>
          </div>
          <div className="cta-right">
            <Link to="/register" className="btn btn-teal btn-lg">Register Your Practice</Link>
            <Link to="/about" className="btn btn-outline-white btn-lg">Learn More</Link>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="nav-logo" style={{ color: '#fff', marginBottom: '14px' }}><div className="logo-pulse" /> MedConnect</Link>
              <p>Pakistan's trusted healthcare directory connecting patients with verified doctors across 50+ cities nationwide.</p>
              <div className="footer-socials"><div className="soc-btn">𝕏</div><div className="soc-btn">f</div><div className="soc-btn">in</div><div className="soc-btn">▶</div></div>
            </div>
            <div className="footer-col"><h4>For Patients</h4><Link to="/listings">Find Doctors</Link><Link to="/listings">Book Appointment</Link><span style={{ display: 'block', marginBottom: 10, color: 'rgba(255,255,255,.45)', fontSize: '.85rem' }}>Lab Tests</span><Link to="/blog">Health Blog</Link><span style={{ display: 'block', marginBottom: 10, color: 'rgba(255,255,255,.45)', fontSize: '.85rem' }}>FAQs</span></div>
            <div className="footer-col"><h4>For Doctors</h4><Link to="/register">Register Practice</Link><span style={{ display: 'block', marginBottom: 10, color: 'rgba(255,255,255,.45)', fontSize: '.85rem' }}>Doctor Dashboard</span><span style={{ display: 'block', marginBottom: 10, color: 'rgba(255,255,255,.45)', fontSize: '.85rem' }}>Pricing Plans</span><Link to="/classifieds">Classifieds</Link><Link to="/contact">Support</Link></div>
            <div className="footer-col"><h4>Company</h4><Link to="/about">About Us</Link><Link to="/contact">Contact</Link><span style={{ display: 'block', marginBottom: 10, color: 'rgba(255,255,255,.45)', fontSize: '.85rem' }}>Privacy Policy</span><span style={{ display: 'block', marginBottom: 10, color: 'rgba(255,255,255,.45)', fontSize: '.85rem' }}>Terms of Service</span><span style={{ display: 'block', marginBottom: 10, color: 'rgba(255,255,255,.45)', fontSize: '.85rem' }}>Sitemap</span></div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 MedConnect. All rights reserved. Built in Pakistan.</p>
            <div className="footer-status"><div className="status-dot" /> All Systems Operational</div>
          </div>
        </div>
      </footer>
    </>
  );
}
