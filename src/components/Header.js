import { Link } from 'react-router-dom'; // Link for navigation between routes
import './Header.css';                   // Styles for this component

function Header() {
    return (
        <header className="site-header">
            <div className="header-inner">
              {/* Logo links to homepage */}
                <Link to="/" className="logo">SharedPalette</Link>

                {/* Navigation bar */}
                <nav className="main-nav" aria-label="Main">
                    <Link to="/browse">Browse</Link>
                    <Link to="/#how-it-works">How it works</Link>
                    <Link to="/help">Help</Link>
                </nav>

                {/* Login button on the right */}
                <Link to="/login" className="login-btn">Log in / Sign up</Link>
            </div>
        </header>
    )
}

export default Header;