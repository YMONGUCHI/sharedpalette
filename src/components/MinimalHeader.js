import { Link } from 'react-router-dom';
import './MinimalHeader.css';

function MinimalHeader() {
  return (
    <header className="minimal-header">
      <div className="minimal-header-inner">
        <Link to="/" className="logo">SharedPalette</Link>
      </div>
    </header>
  );
}

export default MinimalHeader;