import { Link, useLocation } from 'react-router-dom';
import './SellerSidebar.css';

function SellerSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { label: 'Dashboard', path: '/seller' },
    { label: 'Commission workspace', path: '/seller/commission/SP-1048' },
    { label: 'Inbox', path: '/inbox' },
    { label: 'Public profile', path: '/seller/profile' },
    { label: 'Analytics', path: '/seller/analytics' },
    { label: 'Account settings', path: '/seller/settings' }
  ];

  return (
    <aside className="seller-sidebar">
      <h3 className="sidebar-title">Seller menu</h3>
      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={
              currentPath === item.path || currentPath.startsWith(item.path + '/')
                ? 'menu-item active'
                : 'menu-item'
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default SellerSidebar;