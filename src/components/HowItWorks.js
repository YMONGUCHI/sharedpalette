import './HowItWorks.css';

function HowItWorks() {
    return (
        <section className="how-it-works" id="how-it-works">
            <div className="how-it-works-inner">
                <h2>How it works</h2>
                <div className="steps">
                    <div className="step">
                        <div className="step-number">1</div>
                        <h3 className="step-title">Browse & Discover</h3>
                        <p className="step-description">Explore portfolios from independent artists across styles.</p>
                    </div>
                    <div className="step">
                        <div className="step-number">2</div>
                        <h3 className="step-title">Commission & chat</h3>
                        <p className="step-description">Share your visions, collaborate, and review proofs together.</p>
                    </div>
                    <div className="step">
                        <div className="step-number">3</div>
                        <h3 className="step-title">Approve & receive</h3>
                        <p className="step-description">Pay after approval. Download digital work or get it shipped.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;