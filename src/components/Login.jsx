import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

/* Lock doodle SVG */
const LockDoodle = () => (
  <svg className="login-doodle" width="80" height="90" viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* lock body */}
    <rect x="14" y="40" width="52" height="40" rx="4" stroke="#1a1a2e" strokeWidth="2.5" fill="none" />
    {/* shackle */}
    <path d="M24 40 V28 C24 16, 56 16, 56 28 V40" stroke="#1a1a2e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* keyhole */}
    <circle cx="40" cy="56" r="6" stroke="#1a1a2e" strokeWidth="2" fill="none" />
    <line x1="40" y1="62" x2="40" y2="70" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" />
    {/* small sparkles */}
    <path d="M8 30 L9 27 L10 30 L13 31 L10 32 L9 35 L8 32 L5 31Z" stroke="#1a1a2e" strokeWidth="0.8" fill="none" opacity="0.35" />
    <path d="M68 22 L69 19 L70 22 L73 23 L70 24 L69 27 L68 24 L65 23Z" stroke="#1a1a2e" strokeWidth="0.8" fill="none" opacity="0.35" />
    {/* small doodle lines */}
    <path d="M4 60 Q2 55, 6 52" stroke="#1a1a2e" strokeWidth="0.8" fill="none" opacity="0.2" strokeLinecap="round" />
    <path d="M74 65 Q78 62, 76 58" stroke="#1a1a2e" strokeWidth="0.8" fill="none" opacity="0.2" strokeLinecap="round" />
  </svg>
);

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error('Login error:', err);
      switch (err.code) {
        case 'auth/invalid-credential':
        case 'auth/wrong-password':
        case 'auth/user-not-found':
          setError('Invalid email or password');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address');
          break;
        case 'auth/too-many-requests':
          setError('Too many attempts — try again later');
          break;
        default:
          setError('Login failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <LockDoodle />
          <h1>Team Login</h1>
          <p>Hackathon Check-In System</p>
        </div>

        {error && <div className="login-error">{error}</div>}

        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="team@example.com"
              required
              autoFocus
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '8px' }}
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
