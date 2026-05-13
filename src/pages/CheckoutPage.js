import { useState } from 'react';
import MinimalHeader from '../components/MinimalHeader';
import './CheckoutPage.css';

function CheckoutPage() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const subtotal = 85.00;
  const shipping = 5.00;
  const tax = 7.20;
  const total = subtotal + shipping + tax;

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Order placed:', { email, fullName, street, city, state, zip, cardNumber, expiry, cvv });
  }

  return (
    <div>
      <MinimalHeader />
      <main className="checkout-page">
        <div className="checkout-inner">

          <h1>Checkout</h1>

          <div className="checkout-layout">

            {/* Left: payment form */}
            <form onSubmit={handleSubmit} className="payment-form">
              <h2>Payment details</h2>

              <h3>Contact</h3>
              <label className="field">
                <span>Email</span>
                <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>

              <h3>Shipping address</h3>
              <label className="field">
                <input type="text" placeholder="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
              </label>
              <label className="field">
                <input type="text" placeholder="Street address" value={street} onChange={(e) => setStreet(e.target.value)} />
              </label>
              <div className="field-row">
                <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                <input type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} />
                <input type="text" placeholder="Zip" value={zip} onChange={(e) => setZip(e.target.value)} />
              </div>

              <h3>Payment method</h3>
              <label className="field">
                <input type="text" placeholder="Card number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
              </label>
              <div className="field-row">
                <input type="text" placeholder="MM / YY" value={expiry} onChange={(e) => setExpiry(e.target.value)} />
                <input type="text" placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} />
              </div>
            </form>

            {/* Right: order summary */}
            <aside className="order-summary">
              <h3>Order summary</h3>

              <div className="summary-item">
                <div className="summary-thumb">[img]</div>
                <div>
                  <p className="summary-title">Custom watercolor portrait</p>
                  <p className="summary-meta">Size: 8×10"</p>
                  <p className="summary-price">${subtotal.toFixed(2)}</p>
                </div>
              </div>

              <div className="summary-breakdown">
                <div className="summary-row"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="summary-row"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
                <div className="summary-row"><span>Tax</span><span>${tax.toFixed(2)}</span></div>
                <div className="summary-row summary-total"><span>Total</span><span>${total.toFixed(2)}</span></div>
              </div>

              <button type="submit" onClick={handleSubmit} className="place-order-btn">Place order</button>

              <p className="disclaimer">By placing your order you agree to our <a href="#">Terms & Privacy Policy</a></p>
              <p className="secure-note">Your payment is securely processed</p>
            </aside>

          </div>
        </div>
      </main>
    </div>
  );
}

export default CheckoutPage;