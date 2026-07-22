import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import PropertyCard from "../components/PropertyCard";
import Footer from "../components/Footer";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      const res = await 
      axios.get(
        "https://airbnb-clone-yldx.onrender.com/api/wishlist"
      );

      setWishlist(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "50px",
          background: "#08111f",
          minHeight: "100vh",
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          ❤️ My Wishlist
        </h1>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          {wishlist.length === 0 ? (
            <h2 style={{ color: "white" }}>
              No properties added to wishlist
            </h2>
          ) : (
            wishlist
              .filter((item) => item.propertyId)
              .map((item) => (
                <PropertyCard
                  key={item.propertyId._id}
                  _id={item.propertyId._id}
                  title={item.propertyId.title}
                  location={item.propertyId.location}
                  price={item.propertyId.price}
                  image={item.propertyId.image}
                />
              ))
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Wishlist;