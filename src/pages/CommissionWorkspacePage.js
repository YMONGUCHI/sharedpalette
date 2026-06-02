import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import StatusTag from '../components/StatusTag';
import './CommissionWorkspacePage.css';

const CURRENT_USER_ID = 1; // Hardcoded as Maya L. for now (a seller)

function CommissionWorkspacePage() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [buyer, setBuyer] = useState(null);
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState('');

  // Fetch the order
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/orders/${id}`)
      .then(response => response.json())
      .then(data => setOrder(data));
  }, [id]);

  // Once we have the order, fetch the buyer
  useEffect(() => {
    if (!order) return;
    fetch(`${process.env.REACT_APP_API_URL}/users/${order.buyer_id}`)
      .then(response => response.json())
      .then(data => setBuyer(data));
  }, [order]);

  // Fetch messages for this order
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/messages`)
      .then(response => response.json())
      .then(data => {
        const filtered = data.filter(m => m.order_id === parseInt(id));
        setMessages(filtered);
      });
  }, [id]);

  function handleSend() {
    if (!draft.trim() || !order) return;

    fetch(`${process.env.REACT_APP_API_URL}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender_id: CURRENT_USER_ID,
        receiver_id: order.buyer_id,
        order_id: parseInt(id),
        content: draft,
      }),
    })
      .then(response => response.json())
      .then(newMessage => {
        setMessages([...messages, newMessage]);
        setDraft('');
      });
  }

  if (!order || !buyer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <main className="workspace-page">
        <div className="workspace-inner">

          <nav className="breadcrumb">
            <Link to="/seller">Dashboard</Link> › Commission workspace › #{id}
          </nav>

          <div className="workspace-header">
            <div>
              <h1>Working on commission for {buyer.name}</h1>
              <p className="workspace-meta">
                Order #{id} · Deadline: {order.deadline ? new Date(order.deadline).toLocaleDateString() : 'N/A'} · ${order.price}
              </p>
            </div>
            <StatusTag status={order.status} />
          </div>

          <div className="workspace-grid">

            {/* Left column: buyer + brief + references */}
            <div className="workspace-left">
              <div className="info-card">
                <h3>Buyer</h3>
                <div className="buyer-info">
                  <div className="avatar"></div>
                  <div>
                    <p className="buyer-name">{buyer.name}</p>
                    <p className="buyer-meta">{buyer.email}</p>
                  </div>
                </div>
                <button className="view-profile-btn">View profile</button>
              </div>

              <div className="info-card">
                <h3>Brief</h3>
                <p>{order.brief}</p>
              </div>

              <div className="info-card">
                <h3>References</h3>
                <div className="ref-grid">
                  <div className="ref-thumb">[ref 1]</div>
                  <div className="ref-thumb">[ref 2]</div>
                  <div className="ref-thumb">[ref 3]</div>
                  <div className="ref-thumb">[ref 4]</div>
                </div>
              </div>
            </div>

            {/* Middle: upload + version history */}
            <div className="workspace-middle">
              <div className="info-card upload-card">
                <h3>Upload proof / deliverable</h3>
                <div className="upload-dropzone">
                  <p className="upload-arrow">↑</p>
                  <p className="upload-primary">Drop files here</p>
                  <p className="upload-secondary">or click to browse</p>
                  <p className="upload-meta">PNG, JPG, PDF · max 50MB</p>
                </div>
                <div className="upload-actions">
                  <button className="draft-btn">Save as draft</button>
                  <button className="submit-btn">Submit proof</button>
                </div>
              </div>

              <div className="info-card">
                <h3>Version history</h3>
                <p style={{ fontSize: '0.85rem', color: '#888' }}>
                  No proofs uploaded yet
                </p>
              </div>
            </div>

            {/* Right: chat */}
            <div className="workspace-right">
              <div className="info-card chat-card">
                <h3>Chat with {buyer.name.split(' ')[0]}</h3>
                <div className="workspace-messages">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={msg.sender_id === CURRENT_USER_ID ? 'msg-bubble msg-me' : 'msg-bubble msg-them'}
                    >
                      {msg.content}
                    </div>
                  ))}
                </div>
                <div className="workspace-chat-input">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    value={draft}
                    aria-label="Type a message"
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
                  />
                  <button onClick={handleSend} className="send-btn-small">Send</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default CommissionWorkspacePage;