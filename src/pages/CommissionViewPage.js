import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StatusTag from '../components/StatusTag';
import ProgressTracker from '../components/ProgressTracker';
import sampleOrders from '../data/sampleOrders';
import './CommissionViewPage.css';

function CommissionViewPage() {
  const { id } = useParams();
  const order = sampleOrders.find(o => o.id === id) || sampleOrders[0];

  return (
    <div>
      <Header />
      <main className="commission-view-page">
        <div className="commission-inner">

          <nav className="breadcrumb">
            <Link to="/orders">My orders</Link> › Commission #{order.id}
          </nav>

          <div className="commission-header">
            <div>
              <h1>Commission with {order.artist}</h1>
              <p className="commission-meta">Order #{order.id} · Started {order.date}</p>
            </div>
            <StatusTag status={order.status} />
          </div>

          <ProgressTracker currentStep={order.progressStep} />

          <div className="commission-grid">

            {/* Left column */}
            <div className="commission-main">
              <section className="info-card">
                <h3>Brief</h3>
                <p>{order.brief}</p>
              </section>

              <section className="info-card">
                <h3>References</h3>
                <div className="references-grid">
                  <div className="ref-thumb">[ref 1]</div>
                  <div className="ref-thumb">[ref 2]</div>
                  <div className="ref-thumb">[ref 3]</div>
                  <div className="ref-thumb">[ref 4]</div>
                </div>
              </section>

              <section className="info-card">
                <h3>Details</h3>
                <div className="details-grid">
                  <div><strong>Budget:</strong> ${order.budget}</div>
                  <div><strong>Medium:</strong> {order.medium}</div>
                  <div><strong>Deadline:</strong> {order.deadline}</div>
                  <div><strong>Shipping:</strong> {order.shipping}</div>
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className="commission-side">
              <div className="chat-preview">
                <div className="chat-header">
                  <div className="avatar"></div>
                  <div>
                    <p className="artist-name">{order.artist}</p>
                    <p className="artist-stats">★ {order.artistRating} · Typically replies in 2h</p>
                  </div>
                </div>
                <div className="chat-message">
                  <p>"{order.lastMessage}"</p>
                  <p className="chat-time">{order.lastMessageTime}</p>
                </div>
                <Link to="/inbox" className="open-chat-btn">Open chat</Link>
              </div>

              <div className="approval-card">
                <h4>Waiting for proof</h4>
                <p>When {order.artist} uploads a proof, you'll be able to approve or request changes here. Payment is only released after approval.</p>
                <button className="approve-btn" disabled>Approve & pay (disabled)</button>
                <p className="protection-note">🔒 Buyer protection guarantees your payment</p>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CommissionViewPage;