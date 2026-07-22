import WhyChooseUs from "../components/WhyChooseUs";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import PropertyCard from "../components/PropertyCard";
import Footer from "../components/Footer";

function Home() {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [currentImage, setCurrentImage] = useState(0);

  const propertySection = useRef(null);

  const heroImages = [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=80",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&q=80",
    "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1600&q=80",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&q=80",
  ];

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/properties"
        );

        setProperties(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProperties();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const filteredProperties = properties.filter(
    (property) =>
      property.title.toLowerCase().includes(search.toLowerCase()) ||
      property.location.toLowerCase().includes(search.toLowerCase())
  );

  const scrollToProperties = () => {
    propertySection.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />

      {/* HERO */}

      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${heroImages[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          transition: "background-image 1.5s ease-in-out",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,.55)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            textAlign: "center",
            color: "white",
            padding: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "76px",
              marginBottom: "20px",
              textShadow: "0 8px 20px rgba(0,0,0,.5)",
            }}
          >
            Find Your Perfect Stay
          </h1>

          <p
            style={{
              maxWidth: "700px",
              fontSize: "22px",
              lineHeight: "35px",
              color: "#f1f5f9",
            }}
          >
            Discover luxury villas, apartments,
            farmhouses and resorts across India.
          </p>

          <input
            type="text"
            placeholder="🔍 Search destination..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              marginTop: "40px",
              width: "520px",
              padding: "18px",
              borderRadius: "50px",
              border: "none",
              outline: "none",
              fontSize: "18px",
            }}
          />

          <button
            onClick={scrollToProperties}
            style={{
              marginTop: "35px",
              background: "#ff385c",
              color: "white",
              border: "none",
              padding: "16px 45px",
              borderRadius: "40px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Explore Properties
          </button>
        </div>
      </div>

      {/* STATISTICS */}

      <div
        style={{
          background: "#081120",
          padding: "70px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          <div style={statCard}>
            <h1 style={statNumber}>500+</h1>
            <p style={statText}>Luxury Properties</p>
          </div>

          <div style={statCard}>
            <h1 style={statNumber}>10K+</h1>
            <p style={statText}>Happy Guests</p>
          </div>

          <div style={statCard}>
            <h1 style={statNumber}>120+</h1>
            <p style={statText}>Cities Covered</p>
          </div>

          <div style={statCard}>
            <h1 style={statNumber}>4.9★</h1>
            <p style={statText}>Average Rating</p>
          </div>
        </div>
      </div>

      {/* FEATURED PROPERTIES */}

      <div
        ref={propertySection}
        style={{
          background:
            "linear-gradient(135deg,#081120,#102540,#081120)",
          padding: "70px 50px",
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "42px",
          }}
        >
          Featured Properties
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            textAlign: "center",
            marginBottom: "50px",
            fontSize: "18px",
          }}
        >
          Hand-picked luxury stays just for you.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "35px",
          }}
        >
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property._id}
              _id={property._id}
              title={property.title}
              location={property.location}
              price={property.price}
              image={property.image}
            />
          ))}
        </div>
      </div>
<WhyChooseUs />
            <Footer />
            
    </>
  );
}

const statCard = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "35px",
  minWidth: "220px",
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,.25)",
  transition: "all .3s ease",
};

const statNumber = {
  color: "#ff385c",
  fontSize: "48px",
  fontWeight: "700",
  margin: "0",
};

const statText = {
  color: "#ffffff",
  marginTop: "15px",
  fontSize: "18px",
  letterSpacing: ".5px",
};

export default Home;