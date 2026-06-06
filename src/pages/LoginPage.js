import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MinimalHeader from '../components/MinimalHeader';
import { useAuth } from '../context/AuthContext';
import './LoginPage.css';

function LoginPage() {
  const [activeTab, setActiveTab] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const endpoint = activeTab === 'login' ? '/login' : '/signup';
    const body = activeTab === 'login'
      ? { email, password }
      : { name, email, password, is_buyer: true, is_seller: true };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Something went wrong');
        setLoading(false);
        return;
      }

      // Save token + user via context
      login(data.token, data.user);
      navigate('/');
    } catch (err) {
      setError('Network error. Please try again.');
      setLoading(false);
    }
  }

  return (
    <div>
      <MinimalHeader />
      <main className="login-page">
        <div className="login-card">

          {/* Tab switcher */}
          <div className="login-tabs">
            <button
              className={activeTab === 'login' ? 'tab active' : 'tab'}
              onClick={() => setActiveTab('login')}
            >
              Log in
            </button>
            <button
              className={activeTab === 'signup' ? 'tab active' : 'tab'}
              onClick={() => setActiveTab('signup')}
            >
              Sign up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="login-form">

            {activeTab === 'signup' && (
              <label className="field">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
            )}

            <label className="field">
              <span>Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label className="field">
              <span>Password</span>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>

            {error && <p className="login-error">{error}</p>}

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? '...' : (activeTab === 'login' ? 'Log in' : 'Sign up')}
            </button>
          </form>

          {/* Divider */}
          <div className="divider">— or —</div>

          {/* Social buttons */}
          <button className="social-btn">Continue with Google</button>
          <button className="social-btn">Continue with Apple</button>

        </div>
      </main>
    </div>
  );
}

export default LoginPage;