import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Wishlist from "./pages/Wishlist";
import MyBookings from "./pages/MyBookings";
import PropertyDetails from "./pages/PropertyDetails";
import Payment from "./pages/Payment";
import BookingSuccess from "./pages/BookingSuccess";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import AddProperty from "./pages/AddProperty";
import EditProperty from "./pages/EditProperty";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default Route */}
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        {/* Authentication */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Main Pages */}
        <Route
          path="/home"
          element={<Home />}
        />

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        <Route
          path="/mybookings"
          element={<MyBookings />}
        />

        <Route
          path="/property/:id"
          element={<PropertyDetails />}
        />

        <Route
          path="/payment"
          element={<Payment />}
        />

        <Route
          path="/booking-success"
          element={<BookingSuccess />}
        />

        {/* Redirect Unknown URLs */}
        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />
       
        <Route
  path="/contact"
  element={<Contact />}
/> 

<Route
  path="/admin"
  element={<Admin />}
/>

<Route
  path="/admin-login"
  element={<AdminLogin />}
/>

<Route
  path="/admin/add-property"
  element={<AddProperty />}
/>

<Route
  path="/edit-property/:id"
  element={<EditProperty />}
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;