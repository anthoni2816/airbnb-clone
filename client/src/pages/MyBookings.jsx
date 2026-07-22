import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function MyBookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/bookings"
      );

      setBookings(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  const cancelBooking = async (id) => {

    const confirmCancel = window.confirm(
      "Cancel this booking?"
    );

    if (!confirmCancel) return;

    try {

      await axios.delete(
        `http://localhost:5000/api/bookings/${id}`
      );

      loadBookings();

      alert("Booking Cancelled");

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <>
      <Navbar />

      <div
        style={{
          background:"#081120",
          minHeight:"100vh",
          padding:"40px",
          color:"white"
        }}
      >

        <h1
          style={{
            textAlign:"center",
            marginBottom:"40px"
          }}
        >
          My Bookings
        </h1>

        {

          bookings.length===0 ?

          (

            <h2
              style={{
                textAlign:"center",
                color:"#bbb"
              }}
            >
              No Bookings Yet
            </h2>

          )

          :

          bookings.map((booking)=>(

            <div
              key={booking._id}
              style={{
                display:"flex",
                background:"#18253d",
                borderRadius:"18px",
                marginBottom:"25px",
                overflow:"hidden",
                boxShadow:"0 8px 25px rgba(0,0,0,.3)"
              }}
            >

              <img
                src={booking.image}
                alt={booking.title}
                style={{
                  width:"320px",
                  height:"220px",
                  objectFit:"cover"
                }}
              />

              <div
                style={{
                  flex:1,
                  padding:"25px"
                }}
              >

                <h2>{booking.title}</h2>

                <p>📍 {booking.location}</p>

                <p>👥 Guests : {booking.guests}</p>

                <p>📅 Check In : {booking.checkIn}</p>

                <p>📅 Check Out : {booking.checkOut}</p>

                <h3 style={{color:"#00ff99"}}>

                  ₹{booking.totalPrice}

                </h3>

                <div
                  style={{
                    display:"flex",
                    gap:"15px",
                    marginTop:"20px"
                  }}
                >

                  <Link
                    to={`/property/${booking.propertyId}`}
                  >

                    <button
                      style={{
                        padding:"12px 20px",
                        border:"none",
                        borderRadius:"10px",
                        background:"#4CAF50",
                        color:"white",
                        cursor:"pointer"
                      }}
                    >
                      View Property
                    </button>

                  </Link>

                  <button
                    onClick={()=>cancelBooking(booking._id)}
                    style={{
                      padding:"12px 20px",
                      border:"none",
                      borderRadius:"10px",
                      background:"#ff4d4d",
                      color:"white",
                      cursor:"pointer"
                    }}
                  >
                    Cancel Booking
                  </button>

                </div>

              </div>

            </div>

          ))

        }

      </div>
 <Footer />
    </>

  );

}

export default MyBookings;