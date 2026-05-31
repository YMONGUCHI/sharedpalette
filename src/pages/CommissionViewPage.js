import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StatusTag from '../components/StatusTag';
import ProgressTracker from '../components/ProgressTracker';
import './CommissionViewPage.css';

function CommissionViewPage() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/orders/${id}`)
      .then(response => response.json())
      .then(data => setOrder(data));
  }, [id]);

  if (!order) {
    return <div>Loading...</div>;
  }

  // Map status to progress step
  const progressStepMap = {
    'In progress': 2,
    'Proof ready': 3,
    'Completed': 4,
    'Cancelled': 0,
  };
  const progressStep = progressStepMap[order.status] ?? 0;

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
              <h1>Commission #{order.id}</h1>
              <p className="commission-meta">
                Started {new Date(order.created_at).toLocaleDateString()}
              </p>
            </div>
            <StatusTag status={order.status} />
          </div>

          <ProgressTracker currentStep={progressStep} />

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
                  <div><strong>Price:</strong> ${order.price}</div>
                  <div><strong>Deadline:</strong> {order.deadline ? new Date(order.deadline).toLocaleDateString() : 'N/A'}</div>
                  <div><strong>Listing:</strong> #{order.listing_id}</div>
                  <div><strong>Buyer:</strong> #{order.buyer_id}</div>
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className="commission-side">
              <div className="chat-preview">
                <div className="chat-header">
                  <div className="avatar"></div>
                  <div>
                    <p className="artist-name">Artist for Listing #{order.listing_id}</p>
                    <p className="artist-stats">Typically replies in 2h</p>
                  </div>
                </div>
                <Link to="/inbox" className="open-chat-btn">Open chat</Link>
              </div>

              <div className="approval-card">
                <h4>Waiting for proof</h4>
                <p>When the artist uploads a proof, you'll be able to approve or request changes here. Payment is only released after approval.</p>
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