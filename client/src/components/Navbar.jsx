import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/home" className="navbar-logo">
        🏠 Airbnb Clone
      </Link>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/wishlist">Wishlist ❤️</Link>
        <Link to="/mybookings">My Bookings</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;