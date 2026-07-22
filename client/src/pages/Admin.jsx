import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Admin() {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("admin");

    if (isAdmin !== "true") {
      navigate("/admin-login");
      return;
    }

    loadProperties();
  }, []);

  const loadProperties = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/properties"
      );

      setProperties(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProperty = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this property?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/properties/${id}`
      );

      alert("✅ Property Deleted Successfully");

      loadProperties();
    } catch (err) {
      console.log(err);

      alert("Unable to delete property");
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
        🛠 Admin Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <Link to="/admin/add-property">
          <button
            style={{
              background: "#4CAF50",
              color: "white",
              border: "none",
              padding: "12px 22px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            ➕ Add Property
          </button>
        </Link>

        <button
          onClick={() => {
            localStorage.removeItem("admin");
            navigate("/admin-login");
          }}
          style={{
            background: "#ff4d4d",
            color: "white",
            border: "none",
            padding: "12px 22px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Logout
        </button>
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#162033",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <thead>
          <tr
            style={{
              background: "#ff5a5f",
            }}
          >
            <th style={th}>Image</th>
            <th style={th}>Title</th>
            <th style={th}>Location</th>
            <th style={th}>Price</th>
            <th style={th}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {properties.map((property) => (
            <tr
              key={property._id}
              style={{
                borderBottom: "1px solid #2d3c56",
              }}
            >
              <td style={td}>
                <img
                  src={property.image}
                  alt={property.title}
                  width="140"
                  height="90"
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </td>

              <td style={td}>{property.title}</td>

              <td style={td}>{property.location}</td>

              <td style={td}>
                ₹ {property.price}
              </td>

              <td style={td}>
                <Link
                  to={`/admin/edit/${property._id}`}
                >
                  <Link to={`/edit-property/${property._id}`}>
  <button
    style={editBtn}
  >
    ✏ Edit
  </button>
</Link>
                </Link>

                <button
                  style={deleteBtn}
                  onClick={() =>
                    deleteProperty(property._id)
                  }
                >
                  🗑 Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const th = {
  padding: "18px",
  fontSize: "18px",
};

const td = {
  padding: "18px",
  textAlign: "center",
};

const editBtn = {
  background: "#4CAF50",
  color: "white",
  border: "none",
  padding: "10px 18px",
  borderRadius: "8px",
  cursor: "pointer",
  marginRight: "10px",
};

const deleteBtn = {
  background: "#ff4d4d",
  color: "white",
  border: "none",
  padding: "10px 18px",
  borderRadius: "8px",
  cursor: "pointer",
};

export default Admin;