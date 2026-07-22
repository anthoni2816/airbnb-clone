import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditProperty() {
  const { id } = useParams();
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
    rating: "",
    amenities: "",
  });

  useEffect(() => {
    loadProperty();
  }, []);

  const loadProperty = async () => {
    try {
      const res = await 
      axios.get(
        `https://airbnb-clone-yldx.onrender.com/api/properties/${id}`
      );

      setProperty({
        ...res.data,
        amenities: res.data.amenities.join(", "),
      });

    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setProperty({
      ...property,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await 
      axios.put(
        `https://airbnb-clone-yldx.onrender.com/api/properties/${id}`,
        {
          ...property,
          price: Number(property.price),
          rating: Number(property.rating),
          amenities: property.amenities
            .split(",")
            .map((item) => item.trim()),
        }
      );

      alert("✅ Property Updated Successfully");

      navigate("/admin");

    } catch (err) {
      console.log(err);
      alert("Unable to Update Property");
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
          marginBottom: "30px",
        }}
      >
        ✏ Edit Property
      </h1>

      <form
        onSubmit={handleUpdate}
        style={{
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <input name="title" value={property.title} onChange={handleChange} placeholder="Title" style={inputStyle} />

        <input name="location" value={property.location} onChange={handleChange} placeholder="Location" style={inputStyle} />

        <input name="price" value={property.price} onChange={handleChange} placeholder="Price" style={inputStyle} />

        <textarea
          rows="5"
          name="description"
          value={property.description}
          onChange={handleChange}
          placeholder="Description"
          style={textareaStyle}
        />

        <input name="image" value={property.image} onChange={handleChange} placeholder="Main Image URL" style={inputStyle} />

        <input name="bedroomImage" value={property.bedroomImage} onChange={handleChange} placeholder="Bedroom Image URL" style={inputStyle} />

        <input name="hallImage" value={property.hallImage} onChange={handleChange} placeholder="Hall Image URL" style={inputStyle} />

        <input name="kitchenImage" value={property.kitchenImage} onChange={handleChange} placeholder="Kitchen Image URL" style={inputStyle} />

        <input name="rating" value={property.rating} onChange={handleChange} placeholder="Rating" style={inputStyle} />

        <input
          name="amenities"
          value={property.amenities}
          onChange={handleChange}
          placeholder="Amenities"
          style={inputStyle}
        />

        <button
          type="submit"
          style={buttonStyle}
        >
          💾 Update Property
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
};

const textareaStyle = {
  ...inputStyle,
  resize: "vertical",
};

const buttonStyle = {
  width: "100%",
  padding: "15px",
  background: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontSize: "18px",
  cursor: "pointer",
};

export default EditProperty;