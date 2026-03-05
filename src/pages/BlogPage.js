import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CHIPS = ['All', 'Cardiology', 'Dermatology', 'Pediatrics', "Women's Health", 'Mental Health', 'Nutrition'];
const POSTS = [
  { img: '🧬', bg: '#FCE7F3', tag: 'Dermatology', title: "How to Build a Skincare Routine for Pakistan's Climate", meta: 'Dr. Hassan Ali · Jan 10, 2026 · 4 min read' },
  { img: '👶', bg: '#EDE9FE', tag: 'Pediatrics', title: 'Vaccination Schedule Every Pakistani Parent Should Know', meta: 'Dr. Sana Malik · Jan 5, 2026 · 6 min read' },
  { img: '🧘', bg: '#D1FAE5', tag: 'Mental Health', title: "Managing Anxiety in Pakistan: What Actually Works", meta: 'Dr. Nadia Hussain · Dec 28, 2025 · 7 min read' },
  { img: '🍎', bg: '#FEF3C7', tag: 'Nutrition', title: 'What Pakistani Doctors Actually Eat for Heart Health', meta: 'Editorial · Dec 20, 2025 · 3 min read' },
  { img: '🩺', bg: '#DBEAFE', tag: "Women's Health", title: 'PCOS in Pakistan: Getting the Right Diagnosis', meta: 'Dr. Fatima Zahra · Dec 15, 2025 · 5 min read' },
  { img: '🦴', bg: '#FEE2E2', tag: 'Orthopedics', title: "Back Pain at Your Desk? A Surgeon's Fix", meta: 'Dr. Usman Tariq · Dec 8, 2025 · 4 min read' },
];

export default function BlogPage() {
  const [activeChip, setActiveChip] = useState('All');

  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link><i>›</i><span>Health Blog</span></div>
          <div className="s-label">Health & Wellness</div>
          <h2 className="s-title">MedConnect Health Blog</h2>
          <p className="s-sub">Expert health advice written by Pakistan's top doctors</p>
        </div>
      </div>
      <div className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <div className="blog-hero-card">
            <div className="bhc-img">🫀</div>
            <div className="bhc-body">
              <div className="bhc-tag">Cardiology · Featured</div>
              <div className="bhc-title">5 Warning Signs of Heart Disease You Should Never Ignore</div>
              <p className="bhc-sub">Early detection saves lives. Cardiologist Dr. Ahmed Raza walks through the key symptoms that require immediate medical attention — many of which are commonly overlooked.</p>
              <div className="bhc-meta">By Dr. Ahmed Raza, Cardiologist · January 15, 2026 · 5 min read</div>
              <button type="button" className="btn btn-teal" style={{ marginTop: 20 }}>Read Article</button>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, marginBottom: 32, flexWrap: 'wrap' }}>
            {CHIPS.map((c) => (
              <button key={c} type="button" className={`filter-chip ${activeChip === c ? 'on' : ''}`} onClick={() => setActiveChip(c)}>{c}</button>
            ))}
          </div>
          <div className="blog-grid">
            {POSTS.map((p, i) => (
              <div key={p.title} className="blog-card">
                <div className="blog-img" style={{ background: p.bg }}>{p.img}</div>
                <div className="blog-body">
                  <div className="blog-tag">{p.tag}</div>
                  <div className="blog-title">{p.title}</div>
                  <p style={{ fontSize: '.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                    {i === 0 ? 'Practical advice from our doctors.' : i === 2 ? 'Insights from the MedConnect team.' : 'Expert tips and guides from verified doctors.'}
                  </p>
                  <div className="blog-meta">{p.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
