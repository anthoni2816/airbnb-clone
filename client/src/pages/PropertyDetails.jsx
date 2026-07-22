import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function PropertyDetails() {

  const navigate = useNavigate();

  const { id } = useParams();

  const [property, setProperty] = useState(null);

  const [checkIn, setCheckIn] = useState("");

  const [checkOut, setCheckOut] = useState("");

  const [guests, setGuests] = useState(1);

  useEffect(() => {
    fetchProperty();
  }, []);

  const fetchProperty = async () => {
    try {

      const res = await
       axios.get(
        `https://airbnb-clone-yldx.onrender.com/api/properties/${id}`
      );

      setProperty(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  let nights = 0;

  if (checkIn && checkOut) {

    const start = new Date(checkIn);

    const end = new Date(checkOut);

    nights = Math.ceil(
      (end - start) / (1000 * 60 * 60 * 24)
    );

  }

  const totalPrice =
    property && nights > 0
      ? property.price * nights
      : 0;

  const cleaningFee = 500;

  const tax =
    totalPrice > 0
      ? Math.round(totalPrice * 0.1)
      : 0;

  const grandTotal =
    totalPrice > 0
      ? totalPrice + cleaningFee + tax
      : 0;

  const handleBooking = () => {

  if (!checkIn || !checkOut) {
    alert("Please select Check-In and Check-Out dates.");
    return;
  }

  if (nights <= 0) {
    alert("Check-Out date must be after Check-In date.");
    return;
  }

  navigate("/payment", {

    state: {

      propertyId: property._id,

      title: property.title,

      image: property.image,

      location: property.location,

      price: property.price,

      guests: guests,

      checkIn: checkIn,

      checkOut: checkOut,

      totalPrice: grandTotal,

      paymentMethod: ""

    }

  });

};

  if (!property) {
  return (
    <h2
      style={{
        color: "white",
        textAlign: "center",
        marginTop: "80px",
      }}
    >
      Loading Property...
    </h2>
  );
}

return (
  <div
    style={{
      background: "linear-gradient(135deg,#081120,#102540,#081120)",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
    }}
  >
    <h1
      style={{
        textAlign: "center",
        fontSize: "50px",
        marginBottom: "10px",
      }}
    >
      {property.title}
    </h1>

    <p
      style={{
        textAlign: "center",
        fontSize: "20px",
        color: "#ddd",
        marginBottom: "25px",
      }}
    >
      ⭐ {property.rating} &nbsp;&nbsp; 📍 {property.location}
    </p>

    {/* Main Image */}

    <img
      src={property.image}
      alt={property.title}
      style={{
        width: "100%",
        maxWidth: "950px",
        height: "520px",
        objectFit: "cover",
        display: "block",
        margin: "0 auto",
        borderRadius: "20px",
        boxShadow: "0 15px 40px rgba(0,0,0,.4)",
      }}
    />

    {/* Gallery */}

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "35px",
        marginBottom: "45px",
      }}
    >
      <img
        src={property.bedroomImage}
        alt=""
        style={{
          width: "250px",
          height: "170px",
          borderRadius: "15px",
          objectFit: "cover",
        }}
      />

      <img
        src={property.hallImage}
        alt=""
        style={{
          width: "250px",
          height: "170px",
          borderRadius: "15px",
          objectFit: "cover",
        }}
      />

      <img
        src={property.kitchenImage}
        alt=""
        style={{
          width: "250px",
          height: "170px",
          borderRadius: "15px",
          objectFit: "cover",
        }}
      />
    </div>

    <div
      style={{
        display: "flex",
        gap: "40px",
        flexWrap: "wrap",
        alignItems: "flex-start",
      }}
    >
      {/* Left Section */}

      <div
        style={{
          flex: "2",
        }}
      >
        <h2>Description</h2>

        <p
          style={{
            color: "#d6d6d6",
            lineHeight: "30px",
            fontSize: "17px",
          }}
        >
          {property.description}
        </p>

        <br />

        <h2>Amenities</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "18px",
            marginTop: "20px",
          }}
        >
          {property.amenities?.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#18253d",
                padding: "15px",
                borderRadius: "12px",
              }}
            >
              ✅ {item}
            </div>
          ))}
        </div>
      </div>

            {/* Right Booking Card */}

      <div
        style={{
          flex: "1",
          minWidth: "340px",
          background: "#162033",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 15px 35px rgba(0,0,0,.35)",
          position: "sticky",
          top: "100px",
        }}
      >

        <h2
          style={{
            marginBottom: "25px",
            textAlign: "center",
          }}
        >
          Book Your Stay
        </h2>

        <h1
          style={{
            color: "#00ff99",
            marginBottom: "20px",
          }}
        >
          ₹{property.price}
          <span
            style={{
              fontSize: "18px",
              color: "#ccc",
            }}
          >
            {" "}
            / night
          </span>
        </h1>

        <label>Check In</label>

        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <label>Check Out</label>

        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <label>Guests</label>

        <select
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            marginBottom: "25px",
            borderRadius: "10px",
          }}
        >
          <option value={1}>1 Guest</option>
          <option value={2}>2 Guests</option>
          <option value={3}>3 Guests</option>
          <option value={4}>4 Guests</option>
          <option value={5}>5 Guests</option>
        </select>

        <hr />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <span>
            ₹{property.price} × {nights} nights
          </span>

          <span>
            ₹{totalPrice}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "12px",
          }}
        >
          <span>Cleaning Fee</span>

          <span>₹{cleaningFee}</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "12px",
          }}
        >
          <span>Tax</span>

          <span>₹{tax}</span>
        </div>

        <hr
          style={{
            marginTop: "20px",
            marginBottom: "20px",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          <span>Total</span>

          <span
            style={{
              color: "#00ff99",
            }}
          >
            ₹{grandTotal}
          </span>
        </div>

        <button
          onClick={handleBooking}
          style={{
            width: "100%",
            marginTop: "30px",
            padding: "16px",
            border: "none",
            borderRadius: "12px",
            background: "#ff5a5f",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Proceed To Payment →
        </button>

      </div>

    </div>

  </div>

);

}

export default PropertyDetails;