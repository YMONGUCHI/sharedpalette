import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './InboxPage.css';

const CURRENT_USER_ID = 4; // Hardcoded as John D. for now (no auth yet)

function InboxPage() {
  const [messages, setMessages] = useState([]);
  const [activeOrderId, setActiveOrderId] = useState(null);
  const [draft, setDraft] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/messages`)
      .then(response => response.json())
      .then(data => {
        setMessages(data);
        // Set the first conversation as active by default
        if (data.length > 0) {
          setActiveOrderId(data[0].order_id);
        }
      });
  }, []);

  // Group messages by order_id to form conversations
  const conversations = [];
  const seenOrderIds = new Set();
  for (const msg of messages) {
    if (!seenOrderIds.has(msg.order_id)) {
      seenOrderIds.add(msg.order_id);
      conversations.push({
        orderId: msg.order_id,
        // Use the other person (not current user) as the contact id
        contactId: msg.sender_id === CURRENT_USER_ID ? msg.receiver_id : msg.sender_id,
      });
    }
  }

  const activeMessages = messages.filter(m => m.order_id === activeOrderId);
  const activeConvo = conversations.find(c => c.orderId === activeOrderId);

  function handleSend() {
    if (!draft.trim() || !activeConvo) return;

    fetch(`${process.env.REACT_APP_API_URL}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender_id: CURRENT_USER_ID,
        receiver_id: activeConvo.contactId,
        order_id: activeOrderId,
        content: draft,
      }),
    })
      .then(response => response.json())
      .then(newMessage => {
        setMessages([...messages, newMessage]);
        setDraft('');
      });
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
              <span className="unread-count">{conversations.length} conversations</span>
            </div>
            <input
              type="text"
              placeholder="🔍 Search messages..."
              className="conversation-search"
              aria-label="Search messages"
            />

            {conversations.map((convo) => (
              <button
                key={convo.orderId}
                onClick={() => setActiveOrderId(convo.orderId)}
                className={activeOrderId === convo.orderId ? 'conversation-item active' : 'conversation-item'}
              >
                <div className="conv-avatar"></div>
                <div className="conv-info">
                  <div className="conv-top">
                    <span className="conv-name">User #{convo.contactId}</span>
                  </div>
                  <p className="conv-preview">Commission #{convo.orderId}</p>
                </div>
              </button>
            ))}
          </aside>

          {/* Right: chat thread */}
          <section className="chat-thread">
            {activeConvo ? (
              <>
                <div className="chat-thread-header">
                  <div className="conv-avatar"></div>
                  <div>
                    <p className="thread-contact">User #{activeConvo.contactId}</p>
                    <p className="thread-status">Commission #{activeConvo.orderId}</p>
                  </div>
                  <Link to={`/orders/${activeConvo.orderId}`} className="view-commission">View commission →</Link>
                </div>

                <div className="chat-messages">
                  {activeMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={msg.sender_id === CURRENT_USER_ID ? 'msg-bubble msg-me' : 'msg-bubble msg-them'}
                    >
                      {msg.content}
                    </div>
                  ))}
                </div>

                <div className="chat-input">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    value={draft}
                    aria-label="Type a message"
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
                  />
                  <button onClick={handleSend} className="send-btn">Send</button>
                </div>
              </>
            ) : (
              <div style={{ padding: '24px' }}>No conversations yet</div>
            )}
          </section>

        </div>
      </main>
    </div>
  );
}

export default InboxPage;