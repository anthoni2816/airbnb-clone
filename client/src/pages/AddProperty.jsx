import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProperty() {
  const navigate = useNavigate();

  const [property, setProperty] = useState({
    title: "",
    location: "",
    price: "",
    description: "",
    image: "",
    bedroomImage: "",
    hallImage: "",
    kitchenImage: "",
    rating: 4.8,
    amenities: "",
  });

  const handleChange = (e) => {
    setProperty({
      ...property,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newProperty = {
        ...property,
        price: Number(property.price),
        rating: Number(property.rating),
        amenities: property.amenities
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item !== ""),
      };

      await axios.post(
        "http://localhost:5000/api/properties/add",
        newProperty
      );

      alert("✅ Property Added Successfully");

      navigate("/admin");
    } catch (err) {
      console.log(err);
      alert("❌ Unable to Add Property");
    }
  };

  return (
    <div
      style={{
        background: "#081120",
        minHeight: "100vh",
        padding: "40px",
        color: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "35px",
        }}
      >
        ➕ Add New Property
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="Property Title"
          value={property.title}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={property.location}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price Per Night"
          value={property.price}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          rows="5"
          value={property.description}
          onChange={handleChange}
          style={textareaStyle}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Main Image URL"
          value={property.image}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <input
          type="text"
          name="bedroomImage"
          placeholder="Bedroom Image URL"
          value={property.bedroomImage}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="hallImage"
          placeholder="Hall Image URL"
          value={property.hallImage}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="kitchenImage"
          placeholder="Kitchen Image URL"
          value={property.kitchenImage}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating (4.8)"
          value={property.rating}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="amenities"
          placeholder="Amenities (WiFi, Pool, AC, TV)"
          value={property.amenities}
          onChange={handleChange}
          style={inputStyle}
        />

        <button
          type="submit"
          style={buttonStyle}
        >
          ➕ Add Property
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "15px",
  marginBottom: "18px",
  borderRadius: "10px",
  border: "1px solid #334155",
  background: "#1e293b",
  color: "white",
  fontSize: "16px",
  boxSizing: "border-box",
  outline: "none",
};

const textareaStyle = {
  ...inputStyle,
  resize: "vertical",
  minHeight: "120px",
};

const buttonStyle = {
  width: "100%",
  padding: "15px",
  background: "#ff5a5f",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontSize: "18px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default AddProperty;