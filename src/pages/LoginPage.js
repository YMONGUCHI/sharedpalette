import { useState } from 'react';
import MinimalHeader from '../components/MinimalHeader';
import './LoginPage.css';

function LoginPage() {
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`${activeTab} submitted:`, { email, password });
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
            <label className="field">
              <span>Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className="field">
              <span>Password</span>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <button type="submit" className="submit-btn">
              {activeTab === 'login' ? 'Log in' : 'Sign up'}
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