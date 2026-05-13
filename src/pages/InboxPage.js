import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import sampleConversations from '../data/sampleMessages';
import './InboxPage.css';

function InboxPage() {
  const [activeId, setActiveId] = useState(1);
  const [draft, setDraft] = useState('');

  const activeConvo = sampleConversations.find(c => c.id === activeId);
  const unreadCount = sampleConversations.filter(c => c.unread > 0).length;

  function handleSend() {
    if (!draft.trim()) return;
    console.log(`Send to ${activeConvo.contact}:`, draft);
    setDraft('');
  }

  return (
    <div>
      <Header />
      <main className="inbox-page">
        <div className="inbox-inner">

          {/* Left: conversation list */}
          <aside className="conversation-list">
            <div className="inbox-header">
              <h2>Messages</h2>
              <span className="unread-count">{unreadCount} unread</span>
            </div>
            <input type="text" placeholder="🔍 Search messages..." className="conversation-search" />

            {sampleConversations.map((convo) => (
              <button
                key={convo.id}
                onClick={() => setActiveId(convo.id)}
                className={activeId === convo.id ? 'conversation-item active' : 'conversation-item'}
              >
                <div className="conv-avatar"></div>
                <div className="conv-info">
                  <div className="conv-top">
                    <span className="conv-name">{convo.contact}</span>
                    {convo.unread > 0 && <span className="badge">{convo.unread}</span>}
                  </div>
                  <p className="conv-preview">{convo.preview}</p>
                </div>
                <span className="conv-time">{convo.timestamp}</span>
              </button>
            ))}
          </aside>

          {/* Right: chat thread */}
          <section className="chat-thread">
            <div className="chat-thread-header">
              <div className="conv-avatar"></div>
              <div>
                <p className="thread-contact">{activeConvo.contact}</p>
                <p className="thread-status">
                  {activeConvo.online && <span className="online-dot">●</span>} 
                  {activeConvo.online ? 'Online' : 'Offline'} · Commission #{activeConvo.orderId}
                </p>
              </div>
              <Link to={`/orders/${activeConvo.orderId}`} className="view-commission">View commission →</Link>
            </div>

            <div className="chat-messages">
              {activeConvo.messages.map((msg, index) => (
                <div key={index} className={msg.from === 'me' ? 'msg-bubble msg-me' : 'msg-bubble msg-them'}>
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="chat-input">
              <input
                type="text"
                placeholder="Type a message..."
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
              />
              <button onClick={handleSend} className="send-btn">Send</button>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

export default InboxPage;