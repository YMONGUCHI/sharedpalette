import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';

function Header() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate('/');
    }

    return (
        <header className="site-header">
            <div className="header-inner">
                {/* Logo links to homepage */}
                <Link to="/" className="logo">SharedPalette</Link>

                {/* Navigation bar */}
                <nav className="main-nav" aria-label="Main">
                    <Link to="/browse">Browse</Link>
                    {user && <Link to="/orders">My orders</Link>}
                    {user && <Link to="/inbox">Inbox</Link>}
                    <Link to="/help">Help</Link>
                </nav>

                {/* Auth section on the right */}
                {user ? (
                    <div className="auth-section">
                        <span className="user-greeting">Hi, {user.name}</span>
                        <button onClick={handleLogout} className="login-btn">Logout</button>
                    </div>
                ) : (
                    <Link to="/login" className="login-btn">Log in / Sign up</Link>
                )}
            </div>
        </header>
    );
}

export default Header;