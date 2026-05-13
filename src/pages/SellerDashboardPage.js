import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SellerSidebar from '../components/SellerSidebar';
import StatusTag from '../components/StatusTag';
import './SellerDashboardPage.css';

function SellerDashboardPage() {
  const stats = [
    { label: 'Active commissions', value: '4' },
    { label: 'Unread messages', value: '7' },
    { label: 'Earnings (Mar)', value: '$1,240' },
    { label: 'Rating', value: '4.9 ★' }
  ];

  const myListings = [
    { id: 1, title: 'Watercolor portrait', price: 85, views: 42 },
    { id: 2, title: 'Pet illustration', price: 60, views: 28 },
    { id: 3, title: 'Botanical study', price: 45, views: 19 }
  ];

  const activeCommissions = [
    { buyer: 'John D.', orderId: 'SP-1048', deadline: 'Apr 15', status: 'In progress' },
    { buyer: 'Sarah K.', orderId: 'SP-1042', deadline: 'Apr 10', status: 'Proof ready' },
    { buyer: 'Marcus T.', orderId: 'SP-1038', deadline: 'Apr 22', status: 'In progress' },
    { buyer: 'Priya V.', orderId: 'SP-1031', deadline: 'Apr 28', status: 'In progress' }
  ];

  return (
    <div>
      <Header />
      <main className="seller-dashboard">
        <div className="seller-dashboard-inner">

          <SellerSidebar />

          <section className="dashboard-main">
            <h1>Welcome back, Maya</h1>
            <p className="dashboard-subtitle">Here's what's happening on your shop</p>

            {/* Stats */}
            <div className="stats-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <p className="stat-label">{stat.label}</p>
                  <p className="stat-value">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* My listings */}
            <div className="section-header">
              <h2>My listings</h2>
              <button className="new-listing-btn">+ New listing</button>
            </div>

            <div className="listings-grid">
              {myListings.map((listing) => (
                <div key={listing.id} className="seller-listing-card">
                  <div className="seller-listing-image">[artwork]</div>
                  <div className="seller-listing-info">
                    <p className="seller-listing-title">{listing.title}</p>
                    <p className="seller-listing-meta">${listing.price} · {listing.views} views</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Active commissions */}
            <h2 className="commissions-heading">Active commissions</h2>
            <div className="commissions-table">
              <div className="commissions-table-header">
                <span>Buyer</span>
                <span>Order</span>
                <span>Deadline</span>
                <span>Status</span>
                <span></span>
              </div>
              {activeCommissions.map((commission) => (
                <div key={commission.orderId} className="commission-row">
                  <span>{commission.buyer}</span>
                  <span className="order-id">#{commission.orderId}</span>
                  <span>{commission.deadline}</span>
                  <StatusTag status={commission.status} />
                  <Link to={`/seller/commission/${commission.orderId}`} className="commission-open">Open →</Link>
                </div>
              ))}
            </div>

          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default SellerDashboardPage;