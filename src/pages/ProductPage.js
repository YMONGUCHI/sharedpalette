import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import sampleProduct from '../data/sampleProduct';
import './ProductPage.css';

function ProductPage() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(sampleProduct.sizes[0]);

  return (
    <div>
      <Header />
      <main className="product-page">
        <div className="product-inner">

          <nav className="breadcrumb">
            <Link to="/browse">Browse</Link> › <Link to="/browse">Illustration</Link> › <span>Custom watercolor portrait</span>
          </nav>

          <div className="product-layout">

            {/* Left: images */}
            <div className="product-images">
              <div className="main-image">[main product image]</div>
              <div className="thumbnails">
                <div className="thumb">[img]</div>
                <div className="thumb">[img]</div>
                <div className="thumb">[img]</div>
                <div className="thumb">[img]</div>
              </div>
            </div>

            {/* Right: info */}
            <div className="product-info">
              <h1>{sampleProduct.title}</h1>
              <p className="product-meta">
                by <strong>{sampleProduct.artist}</strong> · ★ {sampleProduct.rating} ({sampleProduct.reviewCount} reviews)
              </p>
              <p className="product-price">${sampleProduct.price}</p>
              <p className="product-description">{sampleProduct.description}</p>

              <div className="size-selector">
                <span className="size-label">Size</span>
                <div className="size-options">
                  {sampleProduct.sizes.map((size) => (
                    <button
                      key={size}
                      className={selectedSize === size ? 'size-btn active' : 'size-btn'}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <button className="primary-btn">Request commission</button>
              <Link to="/checkout" className="secondary-btn">Add to cart</Link>

              <div className="artist-card">
                <div className="artist-avatar"></div>
                <div className="artist-details">
                  <p className="artist-name">{sampleProduct.artist}</p>
                  <p className="artist-stats">★ {sampleProduct.rating} · Responds in ~2 hours</p>
                </div>
                <button className="message-btn">Message</button>
              </div>
            </div>

          </div>

          {/* Reviews */}
          <section className="reviews-section">
            <h2>Reviews ({sampleProduct.reviewCount})</h2>
            {sampleProduct.reviews.map((review, index) => (
              <div key={index} className="review">
                <p className="review-header"><strong>{review.name}</strong> · {'★'.repeat(review.rating)}</p>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProductPage;