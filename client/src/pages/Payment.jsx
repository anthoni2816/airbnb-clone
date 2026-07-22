import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();

  const booking = location.state;

  const [method, setMethod] = useState("UPI");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  if (!booking) {
    return (
      <h2
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        No Booking Found
      </h2>
    );
  }

  const handlePayment = async () => {
    try {
      const bookingData = {
        propertyId: booking.propertyId,
        title: booking.title,
        image: booking.image,
        location: booking.location,
        price: booking.price,
        guests: booking.guests,
        checkIn: booking.checkIn,
        checkOut: booking.checkOut,
        totalPrice: booking.totalPrice,
        paymentMethod: method,
      };

      console.log("Booking Data :", bookingData);

      const res = await 
      axios.post(
        "https://airbnb-clone-yldx.onrender.com/api/bookings",
        bookingData
      );

      console.log(res.data);

      navigate("/booking-success", {
        state: bookingData,
      });

    } catch (err) {
      console.error(err);
      alert("Payment Failed");
    }
  };

  return (
    <div
      style={{
        background: "#081120",
        minHeight: "100vh",
        padding: "50px",
        color: "white",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Secure Payment</h1>

      <div
        style={{
          maxWidth: "650px",
          margin: "40px auto",
          background: "#162033",
          padding: "30px",
          borderRadius: "20px",
        }}
      >
        <h2>Booking Summary</h2>

        <hr />

        <p><b>Property :</b> {booking.title}</p>
        <p><b>Location :</b> {booking.location}</p>
        <p><b>Guests :</b> {booking.guests}</p>
        <p><b>Check In :</b> {booking.checkIn}</p>
        <p><b>Check Out :</b> {booking.checkOut}</p>

        <h2 style={{ color: "#00ff99" }}>
          ₹ {booking.totalPrice}
        </h2>

        <hr />

        <h2>Select Payment Method</h2>

        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            borderRadius: "10px",
          }}
        >
          <option>UPI</option>
          <option>Credit Card</option>
          <option>Debit Card</option>
          <option>Net Banking</option>
        </select>

        {(method === "Credit Card" || method === "Debit Card") && (
          <>
            <input
              type="text"
              placeholder="Card Holder Name"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              style={inputStyle}
            />

            <input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              style={inputStyle}
            />

            <div style={{ display: "flex", gap: "15px" }}>
              <input
                type="text"
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                style={{ ...inputStyle, flex: 1 }}
              />

              <input
                type="password"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                style={{ ...inputStyle, flex: 1 }}
              />
            </div>
          </>
        )}

        <button
          onClick={handlePayment}
          style={{
            width: "100%",
            marginTop: "30px",
            padding: "15px",
            background: "#ff5a5f",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "20px",
  borderRadius: "10px",
  border: "none",
};

export default Payment;