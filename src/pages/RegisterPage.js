import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const STEP_LABELS = ['Step 1 of 3 — Personal Information', 'Step 2 of 3 — Practice Details', 'Step 3 of 3 — Choose Your Plan'];

export default function RegisterPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="page">
      <div className="auth-wrap" style={{ alignItems: 'flex-start', paddingTop: 'calc(var(--nav-h) + 40px)' }}>
        <div className="auth-card" style={{ maxWidth: 560 }}>
          <div className="auth-logo"><div className="logo-pulse" /> MedConnect</div>
          <div className="auth-title">Register Your Practice</div>
          <div className="auth-sub">Join Pakistan's largest doctor directory — free to get started.</div>

          <div style={{ display: 'flex', gap: 6, marginBottom: 28 }}>
            <div style={{ flex: 1, height: 4, borderRadius: 999, background: step >= 1 ? 'var(--teal)' : 'var(--border)' }} />
            <div style={{ flex: 1, height: 4, borderRadius: 999, background: step >= 2 ? 'var(--teal)' : 'var(--border)' }} />
            <div style={{ flex: 1, height: 4, borderRadius: 999, background: step >= 3 ? 'var(--teal)' : 'var(--border)' }} />
          </div>
          <div style={{ fontSize: '.75rem', color: 'var(--muted)', marginBottom: 20 }}>{STEP_LABELS[step - 1]}</div>

          {step === 1 && (
            <>
              <div className="form-row">
                <div className="form-group"><label>First Name</label><input type="text" placeholder="Ahmed" /></div>
                <div className="form-group"><label>Last Name</label><input type="text" placeholder="Raza" /></div>
              </div>
              <div className="form-group"><label>Email Address</label><input type="email" placeholder="dr.ahmed@example.com" /></div>
              <div className="form-group"><label>Phone Number</label><input type="tel" placeholder="+92 300 0000000" /></div>
              <div className="form-group"><label>Password</label><input type="password" placeholder="Create a strong password" /></div>
              <button type="button" className="btn btn-teal btn-full btn-lg" onClick={() => setStep(2)}>Continue →</button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="form-group"><label>Specialty</label><select><option>Cardiologist</option><option>Dermatologist</option><option>Gynecologist</option><option>Neurologist</option><option>Orthopedic Surgeon</option><option>Pediatrician</option><option>General Physician</option><option>Dentist</option></select></div>
              <div className="form-group"><label>PMDC Registration No.</label><input type="text" placeholder="PMDC/YYYY/XXX-00000" /></div>
              <div className="form-group"><label>Years of Experience</label><input type="number" placeholder="e.g. 10" /></div>
              <div className="form-group"><label>Primary Hospital / Clinic</label><input type="text" placeholder="Aga Khan Hospital" /></div>
              <div className="form-group"><label>City</label><select><option>Karachi</option><option>Lahore</option><option>Islamabad</option><option>Rawalpindi</option><option>Peshawar</option></select></div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button type="button" className="btn btn-outline btn-full" onClick={() => setStep(1)}>← Back</button>
                <button type="button" className="btn btn-teal btn-full btn-lg" onClick={() => setStep(3)}>Continue →</button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: 16 }}>🎉</div>
                <div style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>You're almost there!</div>
                <p style={{ fontSize: '.875rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: 24 }}>Choose your plan and go live on MedConnect today. You can upgrade or downgrade at any time.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ padding: 18, border: '2px solid var(--teal)', borderRadius: 'var(--r)', background: 'var(--teal-light)', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontFamily: 'Syne', fontWeight: 700 }}>Starter — Free</span><span className="badge badge-teal">Popular</span></div>
                  <p style={{ fontSize: '.78rem', color: 'var(--muted)', marginTop: 4 }}>Basic profile, 20 appointments/month</p>
                </div>
                <div style={{ padding: 18, border: '1.5px solid var(--border)', borderRadius: 'var(--r)', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontFamily: 'Syne', fontWeight: 700 }}>Pro — Rs. 2,999/mo</span></div>
                  <p style={{ fontSize: '.78rem', color: 'var(--muted)', marginTop: 4 }}>Featured listing, unlimited appointments, analytics</p>
                </div>
              </div>
              <Link to="/profile" className="btn btn-teal btn-full btn-lg" style={{ marginTop: 20, display: 'block', textAlign: 'center' }}>Complete Registration →</Link>
              <div style={{ display: 'flex', gap: 10, marginTop: 10 }}><button type="button" className="btn btn-outline btn-full" onClick={() => setStep(2)}>← Back</button></div>
            </>
          )}

          <div className="auth-footer" style={{ marginTop: 20 }}>Already registered? <Link to="/login">Sign in</Link></div>
        </div>
      </div>
    </div>
  );
}
