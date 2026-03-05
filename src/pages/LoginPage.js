import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="page">
      <div className="auth-wrap">
        <div className="auth-card">
          <div className="auth-logo"><div className="logo-pulse" /> MedConnect</div>
          <div className="auth-title">Welcome back</div>
          <div className="auth-sub">Sign in to manage appointments and health records</div>
          <div className="form-group"><label>Email or Phone</label><input type="text" placeholder="ahmed@example.com" /></div>
          <div className="form-group"><label>Password</label><input type="password" placeholder="••••••••" /></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '.82rem', color: 'var(--mid)', cursor: 'pointer' }}><input type="checkbox" style={{ width: 'auto' }} /> Remember me</label>
            <a href="#forgot" style={{ fontSize: '.82rem', color: 'var(--teal)', fontWeight: 600, cursor: 'pointer' }}>Forgot password?</a>
          </div>
          <button type="button" className="btn btn-dark btn-full btn-lg">Sign In</button>
          <div className="auth-or">or continue with</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <button type="button" className="btn btn-outline">🔵 Google</button>
            <button type="button" className="btn btn-outline">📘 Facebook</button>
          </div>
          <div className="auth-footer">Don't have an account? <Link to="/register">Sign up free</Link></div>
          <div className="auth-footer" style={{ marginTop: 8 }}>Are you a doctor? <Link to="/register">Doctor login →</Link></div>
        </div>
      </div>
    </div>
  );
}
