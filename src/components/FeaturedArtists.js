import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListingCard from './ListingCard';
import './FeaturedArtists.css';

function FeaturedArtists() {
  const [featuredListings, setFeaturedListings] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/listings`)
      .then(response => response.json())
      .then(data => setFeaturedListings(data.slice(0, 4)));
  }, []);

  return (
    <section className="featured-artists">
      <div className="featured-inner">
        <div className="featured-header">
          <h2>Featured artists</h2>
          <Link to="/browse" className="see-all">See all →</Link>
        </div>
        <div className="featured-grid">
          {featuredListings.map((listing) => (
            <ListingCard
              key={listing.id}
              artistName={listing.artistName}
              specialty={listing.specialty}
              price={listing.price}
              image={listing.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedArtists;