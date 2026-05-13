import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import StatusTag from '../components/StatusTag';
import './CommissionWorkspacePage.css';

function CommissionWorkspacePage() {
  const { id } = useParams();
  const [draft, setDraft] = useState('');

  // Sample data for the workspace
  const buyer = {
    name: "John D.",
    priorOrders: 3
  };

  const brief = "Watercolor portrait of dog Bailey. 8×10\", archival paper, signed. Turnaround 2-3 weeks.";
  const deadline = "Apr 15, 2026";
  const budget = 85;

  const versions = [
    { label: "Sketch draft v2", note: "2 hours ago · buyer reviewing", version: "v2" },
    { label: "Sketch draft v1", note: "Yesterday · revisions requested", version: "v1" }
  ];

  const chatMessages = [
    { from: "them", text: "Thanks again for picking me!" },
    { from: "me", text: "Happy to! Excited to see" },
    { from: "them", text: "Working on sketches now" },
    { from: "me", text: "Looking forward to the v3" },
    { from: "them", text: "Should have v3 by tomorrow. Thanks for your patience!" }
  ];

  function handleSend() {
    if (!draft.trim()) return;
    console.log('Send to buyer:', draft);
    setDraft('');
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
              <h1>Working on: Watercolor portrait for {buyer.name}</h1>
              <p className="workspace-meta">Order #{id} · Deadline: {deadline} · ${budget}</p>
            </div>
            <StatusTag status="In progress" />
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
                    <p className="buyer-meta">{buyer.priorOrders} prior orders</p>
                  </div>
                </div>
                <button className="view-profile-btn">View profile</button>
              </div>

              <div className="info-card">
                <h3>Brief</h3>
                <p>{brief}</p>
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
                {versions.map((v, index) => (
                  <div key={index} className="version-row">
                    <div className="version-thumb">{v.version}</div>
                    <div>
                      <p className="version-label">{v.label}</p>
                      <p className="version-note">{v.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: chat */}
            <div className="workspace-right">
              <div className="info-card chat-card">
                <h3>Chat with {buyer.name.split(' ')[0]}</h3>
                <div className="workspace-messages">
                  {chatMessages.map((msg, index) => (
                    <div key={index} className={msg.from === 'me' ? 'msg-bubble msg-me' : 'msg-bubble msg-them'}>
                      {msg.text}
                    </div>
                  ))}
                </div>
                <div className="workspace-chat-input">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    value={draft}
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