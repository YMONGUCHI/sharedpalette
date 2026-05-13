import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';
import StatusTag from '../components/StatusTag';
import sampleOrders from '../data/sampleOrders';
import './OrderHistoryPage.css';

function OrderHistoryPage() {
  return (
    <div>
      <Header />
      <main className="order-history-page">
        <div className="order-history-inner">

          <AccountSidebar />

          <section className="orders-content">
            <h1>My orders</h1>
            <p className="orders-subtitle">All your past and active orders</p>

            {/* Filter tabs (visual only) */}
            <div className="order-tabs">
              <button className="order-tab active">All</button>
              <button className="order-tab">In progress</button>
              <button className="order-tab">Completed</button>
              <button className="order-tab">Cancelled</button>
            </div>

            {/* Orders table */}
            <div className="orders-table">
              <div className="orders-table-header">
                <span>Item</span>
                <span>Order ID</span>
                <span>Date</span>
                <span>Status</span>
                <span></span>
              </div>

              {sampleOrders.map((order) => (
                <div key={order.id} className="order-row">
                  <div className="order-item">
                    <div className="order-thumb">[img]</div>
                    <div>
                      <p className="order-title">{order.title}</p>
                      <p className="order-artist">by {order.artist}</p>
                    </div>
                  </div>
                  <span className="order-id">#{order.id}</span>
                  <span className="order-date">{order.date}</span>
                  <StatusTag status={order.status} />
                  <Link className="order-view" to={`/orders/${order.id}`}>View →</Link>
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

export default OrderHistoryPage;