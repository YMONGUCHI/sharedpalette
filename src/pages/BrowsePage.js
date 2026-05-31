import { useState, useEffect } from 'react'; // Importing eseEffect for backend support now

import Header from '../components/Header';
import Footer from '../components/Footer';
import ListingCard from '../components/ListingCard';
// import allListings from '../data/allListings'; // No longer Need this mock data that we used for frontend dev
import './BrowsePage.css';


function BrowsePage() {
    const [allListings, setAllListings] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3001/listings')
      .then(response => response.json())
      .then(data => setAllListings(data));
    }, []);

    const [checkedCategories, setCheckedCategories] = useState([]);
    const [checkedMediums, setCheckedMediums] = useState([]);
    const [checkedRatings, setCheckedRatings] = useState([]);
    const [checkedTurnarounds, setCheckedTurnarounds] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    function toggleCategory(category) {
        if (checkedCategories.includes(category)) {
            // Already checked → remove it
            setCheckedCategories(checkedCategories.filter(c => c !== category));
        } else {
            // Not checked → add it
            setCheckedCategories([...checkedCategories, category]);
        }
    }

    function toggleMedium(medium) {
      if (checkedMediums.includes(medium)) {
        setCheckedMediums(checkedMediums.filter(m => m !== medium));
      } else {
        setCheckedMediums([...checkedMediums, medium]);
      }
    }

    function toggleRating(rating) {
      if (checkedRatings.includes(rating)) {
        setCheckedRatings(checkedRatings.filter(r => r !== rating));
      } else {
        setCheckedRatings([...checkedRatings, rating]);
      }
    }

    function toggleTurnaround(turnaround) {
      if (checkedTurnarounds.includes(turnaround)) {
        setCheckedTurnarounds(checkedTurnarounds.filter(t => t !== turnaround));
      } else {
        setCheckedTurnarounds([...checkedTurnarounds, turnaround]);
      }
    }

    const filteredListings = allListings.filter(listing =>
      (checkedCategories.length === 0 || checkedCategories.includes(listing.specialty)) &&
      (checkedMediums.length === 0 || checkedMediums.includes(listing.medium)) &&
      (checkedRatings.length === 0 || listing.rating >= Math.min(...checkedRatings)) &&
      (checkedTurnarounds.length === 0 || checkedTurnarounds.includes(listing.turnaround)) &&
      (minPrice === '' || listing.price >= Number(minPrice)) &&
      (maxPrice === '' || listing.price <= Number(maxPrice))
    );
    
    return (
        <div>
            <Header />
            <main className="browse-page">
                <div className="browse-inner">

                    {/* Left sidebar with filters */}
                    <aside className="filter-sidebar">
                        <h3 className="sidebar-title">Filters</h3>

                        <div className="filter-group">
                          <h4>Category</h4>
                          <label className="checkbox-row">
                            <input
                              type="checkbox"
                              checked={checkedCategories.includes("Illustration")}
                              onChange={() => toggleCategory("Illustration")}
                            /> Illustration
                          </label>
                          <label className="checkbox-row">
                            <input
                              type="checkbox"
                              checked={checkedCategories.includes("Ceramics")}
                              onChange={() => toggleCategory("Ceramics")}
                            /> Ceramics
                          </label>
                          <label className="checkbox-row">
                            <input
                              type="checkbox"
                              checked={checkedCategories.includes("3D models")}
                              onChange={() => toggleCategory("3D models")}
                            /> 3D models
                          </label>
                          <label className="checkbox-row">
                            <input
                              type="checkbox"
                              checked={checkedCategories.includes("Painting")}
                              onChange={() => toggleCategory("Painting")}
                            /> Painting
                          </label>
                          <label className="checkbox-row">
                            <input
                              type="checkbox"
                              checked={checkedCategories.includes("Sculpture")}
                              onChange={() => toggleCategory("Sculpture")}
                            /> Sculpture
                          </label>
                        </div>

                        <div className="filter-group">
                          <h4>Price range</h4>
                          <div className="price-range">
                            <input
                              type="number"
                              placeholder="Min"
                              className="price-input"
                              value={minPrice}
                              onChange={(e) => setMinPrice(e.target.value)}
                            />
                            <span>—</span>
                            <input
                              type="number"
                              placeholder="Max"
                              className="price-input"
                              value={maxPrice}
                              onChange={(e) => setMaxPrice(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="filter-group">
                          <h4>Medium</h4>
                          <label className="checkbox-row">
                            <input
                              type="checkbox"
                              checked={checkedMediums.includes("Digital")}
                              onChange={() => toggleMedium("Digital")}
                            /> Digital
                          </label>
                          <label className="checkbox-row">
                            <input
                              type="checkbox"
                              checked={checkedMediums.includes("Physical")}
                              onChange={() => toggleMedium("Physical")}
                            /> Physical
                          </label>
                        </div>

                        <div className="filter-group">
                          <h4>Rating</h4>
                          <label className="checkbox-row">
                            <input
                              type="checkbox"
                              checked={checkedRatings.includes(4)}
                              onChange={() => toggleRating(4)}
                            /> 4★ & up
                          </label>
                          <label className="checkbox-row">
                            <input
                              type="checkbox"
                              checked={checkedRatings.includes(3)}
                              onChange={() => toggleRating(3)}
                            /> 3★ & up
                          </label>
                        </div>

                        <div className="filter-group">
                          <h4>Turnaround</h4>
                          <label className="checkbox-row">
                            <input
                              type="checkbox"
                              checked={checkedTurnarounds.includes("Under 1 week")}
                              onChange={() => toggleTurnaround("Under 1 week")}
                            /> Under 1 week
                          </label>
                          <label className="checkbox-row">
                            <input
                              type="checkbox"
                              checked={checkedTurnarounds.includes("1-2 weeks")}
                              onChange={() => toggleTurnaround("1-2 weeks")}
                            /> 1-2 weeks
                          </label>
                          <label className="checkbox-row">
                            <input
                              type="checkbox"
                              checked={checkedTurnarounds.includes("2-4 weeks")}
                              onChange={() => toggleTurnaround("2-4 weeks")}
                            /> 2-4 weeks
                          </label>
                        </div>

                        <button
                          className="apply-btn"
                          onClick={() => {
                            setCheckedCategories([]);
                            setCheckedMediums([]);
                            setCheckedRatings([]);
                            setCheckedTurnarounds([]);
                            setMinPrice('');
                            setMaxPrice('');
                          }}
                        >
                          Clear filters
                        </button>
                    </aside>

                    {/* Right side: results header + listing grid */}
                    <section className="browse-results">
                        <div className="results-header">
                            <p>Showing {filteredListings.length} results</p>
                            <select className="sort-dropdown">
                                <option>Sort: Relevance</option>
                                <option>Sort: Price (low to high)</option>
                                <option>Sort: Price (high to low)</option>
                                <option>Sort: Rating</option>
                            </select>
                        </div>

                        <div className="listing-grid">
                          {filteredListings.map((listing) => (
                            <ListingCard
                              key={listing.id}
                              artistName={listing.artistName}
                              specialty={listing.specialty}
                              price={listing.price}
                              image={listing.image}
                            />
                          ))}
                        </div>
                    </section>

                </div>
            </main>
            <Footer />
        </div>
    );
}

export default BrowsePage;