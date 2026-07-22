import { Link, useLocation } from "react-router-dom";

function BookingSuccess() {
  const { state } = useLocation();

  if (!state) {
    return (
      <div
        style={{
          background: "#081120",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <h2>No Booking Found</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#081120",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "550px",
          background: "#162033",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 15px 40px rgba(0,0,0,.35)",
        }}
      >
        <img
          src={state.image}
          alt={state.title}
          style={{
            width: "100%",
            height: "280px",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            padding: "30px",
            color: "white",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "#2ecc71",
              marginBottom: "10px",
            }}
          >
            ✅ Booking Confirmed
          </h1>

          <h2>{state.title}</h2>

          <p>📍 {state.location}</p>

          <hr
            style={{
              margin: "25px 0",
              borderColor: "#2d3b56",
            }}
          />

          <p>
            <strong>Guests :</strong> {state.guests}
          </p>

          <p>
            <strong>Check In :</strong> {state.checkIn}
          </p>

          <p>
            <strong>Check Out :</strong> {state.checkOut}
          </p>

          <p>
            <strong>Payment Method :</strong> {state.paymentMethod}
          </p>

          <h2
            style={{
              marginTop: "25px",
              color: "#00ff99",
            }}
          >
            ₹ {state.totalPrice}
          </h2>

          <Link to="/home">
            <button
              style={{
                width: "100%",
                marginTop: "25px",
                padding: "15px",
                border: "none",
                borderRadius: "10px",
                background: "#ff5a5f",
                color: "white",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookingSuccess;