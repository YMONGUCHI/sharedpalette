import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="site-header">
            <div className="header-inner">
                <Link to="/" className="logo">SharedPalette</Link>

                <nav className="main-nav">
                    <Link to="/browse">Browse</Link>
                    <Link to="/#how-it-works">How it works</Link>
                    <Link to="/help">Help</Link>
                </nav>

                <Link to="/login" className="login-btn">Log in / Sign up</Link>
            </div>
        </header>
    )
}

export default Header;