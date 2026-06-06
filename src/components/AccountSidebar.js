import { Link, useLocation } from 'react-router-dom';
import './AccountSidebar.css';

function AccountSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Order history', path: '/orders' },
    { label: 'Commissions', path: '/commissions' },
    { label: 'Inbox', path: '/inbox' },
    { label: 'Account settings', path: '/settings' }
  ];

  return (
    <aside className="account-sidebar" aria-label="Account navigation">
      <h3 className="sidebar-title">My account</h3>
      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={currentPath === item.path ? 'menu-item active' : 'menu-item'}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default AccountSidebar;