import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Contact() {
  return (
    <>
      <Navbar />

      <div
        style={{
          background: "#081120",
          minHeight: "100vh",
          color: "white",
          padding: "60px 80px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            marginBottom: "10px",
          }}
        >
          Contact Us
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#ccc",
            marginBottom: "50px",
          }}
        >
          We'd love to hear from you.
        </p>

        <div
          style={{
            display: "flex",
            gap: "50px",
            flexWrap: "wrap",
          }}
        >
          {/* Left */}

          <div
            style={{
              flex: 1,
              minWidth: "320px",
            }}
          >
            <h2>Get In Touch</h2>

            <p style={{ marginTop: "25px" }}>
              📍 Hyderabad, Telangana, India
            </p>

            <p>📞 +91 9876543210</p>

            <p>📧 support@airbnbclone.com</p>

            <p>🕒 Mon - Sat : 9 AM - 8 PM</p>

            <br />

            <h3>Follow Us</h3>

            <p>🌐 Facebook</p>

            <p>📸 Instagram</p>

            <p>🐦 Twitter</p>
          </div>

          {/* Right */}

          <div
            style={{
              flex: 1,
              minWidth: "400px",
              background: "#162033",
              padding: "30px",
              borderRadius: "15px",
            }}
          >
            <h2>Send Message</h2>

            <input
              type="text"
              placeholder="Your Name"
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Your Email"
              style={inputStyle}
            />

            <input
              type="text"
              placeholder="Subject"
              style={inputStyle}
            />

            <textarea
              rows="6"
              placeholder="Message"
              style={{
                ...inputStyle,
                resize: "none",
              }}
            />

            <button
              style={{
                width: "100%",
                padding: "15px",
                marginTop: "20px",
                border: "none",
                borderRadius: "10px",
                background: "#ff5a5f",
                color: "white",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
         <Footer />
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "15px",
  marginTop: "18px",
  borderRadius: "10px",
  border: "none",
  fontSize: "16px",
};

export default Contact;