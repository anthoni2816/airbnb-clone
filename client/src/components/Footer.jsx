import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        background: "#0f172a",
        color: "white",
        padding: "50px 80px 20px",
        marginTop: "60px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "40px",
          marginBottom: "40px",
        }}
      >
        {/* Logo */}

        <div>
          <h2 style={{ color: "#ff5a5f" }}>StayEase</h2>

          <p style={{ color: "#bbb", lineHeight: "28px" }}>
            Find beautiful places to stay around the world with
            comfort, safety and affordable prices.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h3>Quick Links</h3>

          <p><Link to="/home" style={link}>Home</Link></p>

          <p><Link to="/wishlist" style={link}>Wishlist</Link></p>

          <p><Link to="/mybookings" style={link}>My Bookings</Link></p>

          <p><Link to="/contact" style={link}>Contact</Link></p>
        </div>

        {/* Contact */}

        <div>
          <h3>Contact</h3>

          <p>📍 Hyderabad, India</p>

          <p>📞 +91 9876543210</p>

          <p>📧 support@stayease.com</p>
        </div>

        {/* Social */}

        <div>
          <h3>Follow Us</h3>

          <p>📘 Facebook</p>

          <p>📸 Instagram</p>

          <p>🐦 Twitter</p>

          <p>💼 LinkedIn</p>
        </div>
      </div>

      <hr
        style={{
          borderColor: "#2d3748",
        }}
      />

      <p
        style={{
          textAlign: "center",
          marginTop: "20px",
          color: "#aaa",
        }}
      >
        © 2026 StayEase. All Rights Reserved.
      </p>
    </footer>
  );
}

const link = {
  color: "#ddd",
  textDecoration: "none",
};

export default Footer;