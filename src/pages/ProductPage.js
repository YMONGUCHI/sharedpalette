import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ProductPage.css';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/listings/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <main className="product-page">
        <div className="product-inner">

          <nav className="breadcrumb">
            <Link to="/browse">Browse</Link> › <Link to="/browse">{product.specialty}</Link> › <span>{product.artistName}</span>
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
              <h1>{product.artistName}</h1>
              <p className="product-meta">
                {product.specialty} · ★ {product.rating}
              </p>
              <p className="product-price">from ${product.price}</p>
              <p className="product-description">
                {product.medium} commission by {product.artistName}.
                Typical turnaround: {product.turnaround}.
              </p>

              <button className="primary-btn">Request commission</button>
              <Link to="/checkout" className="secondary-btn">Add to cart</Link>

              <div className="artist-card">
                <div className="artist-avatar"></div>
                <div className="artist-details">
                  <p className="artist-name">{product.artistName}</p>
                  <p className="artist-stats">★ {product.rating} · Responds in ~2 hours</p>
                </div>
                <button className="message-btn">Message</button>
              </div>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProductPage;