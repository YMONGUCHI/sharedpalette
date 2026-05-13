import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-column">
                    <h4>SharedPalette</h4>
                    <Link to="/about">About</Link>
                    <Link to="/#how-it-works">How it works</Link>
                </div>

                <div className="footer-column">
                    <h4>For buyers</h4>
                    <Link to="/browse">Browse artists</Link>
                    <Link to="/browse">Commission a piece</Link>
                </div>

                <div className="footer-column">
                    <h4>For sellers</h4>
                    <Link to="#">Become an artist</Link>
                    <Link to="#">Seller resources</Link>
                </div>

                <div className="footer-column">
                    <h4>Support</h4>
                    <Link to="/help">Help / contact</Link>
                    <Link to="/terms">Terms & privacy</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;