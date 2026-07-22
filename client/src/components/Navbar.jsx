import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 60px",
        boxSizing: "border-box",
        zIndex: 1000,

        transition: "all .4s ease",

        background: scrolled
          ? "rgba(8,17,31,.95)"
          : "rgba(0,0,0,.20)",

        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",

        boxShadow: scrolled
          ? "0 8px 30px rgba(0,0,0,.35)"
          : "none",
      }}
    >
      <Link
        to="/home"
        style={{
          textDecoration: "none",
        }}
      >
        <h2
          style={{
            color: "white",
            margin: 0,
            fontSize: "32px",
            fontWeight: "700",
            letterSpacing: "1px",
          }}
        >
          🏠 Airbnb Clone
        </h2>
      </Link>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "35px",
        }}
      >
        <Link style={linkStyle} to="/home">
          Home
        </Link>

        <Link style={linkStyle} to="/wishlist">
          Wishlist ❤️
        </Link>

        <Link style={linkStyle} to="/mybookings">
          My Bookings
        </Link>

        <Link style={linkStyle} to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "17px",
  fontWeight: "600",
  transition: "0.3s",
};

export default Navbar;