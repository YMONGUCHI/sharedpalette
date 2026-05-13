import Header from '../components/Header';
import Footer from '../components/Footer';
import './HelpPage.css';

function HelpPage() {
  return (
    <div>
      <Header />
      <main className="help-page">
        <div className="help-inner">

          <h1>Help & Support</h1>
          <p className="help-intro">
            Got questions? We're here to help. Find answers to common questions below, or get in touch.
          </p>

          <section className="help-section">
            <h2>Getting started</h2>

            <div className="faq-item">
              <h3>How do I commission an artist?</h3>
              <p>
                Browse our featured artists or use filters to find someone whose style matches your vision.
                Once you've found an artist, click "Request commission" on their listing to start a conversation.
                You'll be able to share references, discuss details, and approve proofs before any payment.
              </p>
            </div>

            <div className="faq-item">
              <h3>How does payment work?</h3>
              <p>
                Payment is only released after you approve the final deliverable. This protects you as a buyer. If something isn't right, you can request changes or cancel before paying.
              </p>
            </div>

            <div className="faq-item">
              <h3>What's the difference between physical and digital work?</h3>
              <p>
                Physical work (ceramics, paintings, sculptures) is shipped to your address. Digital work
                (illustrations, 3D models, animations) is delivered as downloadable files. Both are clearly
                labeled on each listing.
              </p>
            </div>
          </section>

          <section className="help-section">
            <h2>For sellers</h2>

            <div className="faq-item">
              <h3>How do I become an artist on SharedPalette?</h3>
              <p>
                Sign up for an account, then visit your dashboard and select "Become an artist."
                You'll fill out a brief application and set up your portfolio. Once approved, you can start
                listing your work and accepting commissions.
              </p>
            </div>

            <div className="faq-item">
              <h3>What fees does SharedPalette take?</h3>
              <p>
                We take a 10% commission on completed orders. There are no listing fees, no subscription costs,
                and no upfront charges. You only pay when you earn.
              </p>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HelpPage;