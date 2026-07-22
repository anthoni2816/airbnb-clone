import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./PropertyCard.css";

function PropertyCard({
  _id,
  title,
  location,
  price,
  image,
}) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/wishlist"
      );

      const found = res.data.find(
        (item) => item.propertyId && item.propertyId._id === _id
      );

      if (found) {
        setLiked(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const toggleWishlist = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/wishlist/toggle",
        {
          propertyId: _id,
        }
      );

      setLiked(res.data.added);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Link
      to={`/property/${_id}`}
      className="property-link"
    >
      <div className="property-card">

        <button
          className="wishlist-btn"
          onClick={toggleWishlist}
        >
          {liked ? "❤️" : "🤍"}
        </button>

        <div className="rating-badge">
          ⭐ 4.9
        </div>

        <img
          src={image}
          alt={title}
          className="property-image"
        />

        <div className="property-info">

          <h3>{title}</h3>

          <p className="location">
            📍 {location}
          </p>

          <p className="price">
            ₹{price}/night
          </p>

          <button className="book-btn">
            View Details →
          </button>

        </div>

      </div>
    </Link>
  );
}

export default PropertyCard;