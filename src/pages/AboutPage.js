import React from 'react';

export default function AboutPage() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <div className="about-hero-text">
            <div className="s-label">Our story</div>
            <h2 className="s-title">We're building Pakistan's most trusted healthcare platform</h2>
            <p className="s-sub" style={{ marginTop: 16, maxWidth: 540 }}>MedConnect was founded on a simple belief: everyone in Pakistan deserves easy access to quality healthcare. We connect patients with the right doctors, faster.</p>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="sh center" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 48 }}>
            <div><div className="s-label">What drives us</div><h2 className="s-title">Our mission & values</h2></div>
          </div>
          <div className="mission-grid">
            <div className="mission-card"><div className="mc-icon">🎯</div><div className="mc-title">Our Mission</div><p className="mc-text">To make quality healthcare accessible to every person in Pakistan — regardless of geography, language, or economic background — by building the most comprehensive and reliable doctor directory in the country.</p></div>
            <div className="mission-card"><div className="mc-icon">👁️</div><div className="mc-title">Our Vision</div><p className="mc-text">A Pakistan where no patient struggles to find the right doctor. Where healthcare decisions are made with confidence, backed by verified information, real reviews, and transparent pricing.</p></div>
            <div className="mission-card"><div className="mc-icon">💎</div><div className="mc-title">Our Values</div><p className="mc-text">Trust, transparency, and access. We verify every doctor listing, protect patient data, and build tools that serve both patients and healthcare providers equally well.</p></div>
          </div>
        </div>
      </div>
      <div className="section" style={{ background: 'var(--white)', paddingTop: 0 }}>
        <div className="container" style={{ paddingTop: 96 }}>
          <div className="sh center" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div><div className="s-label">The numbers</div><h2 className="s-title">MedConnect by the numbers</h2></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2, background: 'var(--border)', borderRadius: 'var(--r-lg)', overflow: 'hidden', marginTop: 48 }}>
            {[['12K+', 'Verified Doctors'], ['500K+', 'Monthly Patients'], ['50+', 'Cities Covered'], ['4.8★', 'Average Rating']].map(([num, label]) => (
              <div key={label} style={{ background: 'var(--white)', padding: 36, textAlign: 'center' }}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '2.5rem', fontWeight: 800, color: 'var(--teal)' }}>{num}</div>
                <div style={{ fontSize: '.85rem', color: 'var(--muted)', marginTop: 6 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="sh"><div><div className="s-label">Our team</div><h2 className="s-title">The people behind MedConnect</h2></div></div>
          <div className="team-grid">
            {[['AK', 'dc-av-teal', 'Ali Khan', 'Co-Founder & CEO'], ['SZ', 'dc-av-pink', 'Sara Zaidi', 'Co-Founder & CTO'], ['OM', 'dc-av-purple', 'Omar Mirza', 'Head of Product'], ['FH', 'dc-av-amber', 'Fatima Hussain', 'Head of Partnerships']].map(([av, avClass, name, role]) => (
              <div key={name} className="team-card">
                <div className={`team-av ${avClass}`} style={{ width: 72, height: 72, fontSize: '1.2rem' }}>{av}</div>
                <div className="team-name">{name}</div>
                <div className="team-role">{role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
