import './ListingCard.css';

function ListingCard({ artistName, specialty, price, image }) {
  return (
    <div className="listing-card">
      <div className="listing-image">
        {image ? <img src={image} alt={specialty} /> : <span>[artwork]</span>}
      </div>
      <div className="listing-info">
        <h4 className="artist-name">{artistName}</h4>
        <p className="specialty">{specialty}</p>
        <p className="price">from ${price}</p>
      </div>
    </div>
  );
}

export default ListingCard;