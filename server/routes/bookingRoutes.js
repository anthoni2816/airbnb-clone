const express = require("express");
const router = express.Router();

const Booking = require("../models/Booking");


// ================================
// Test Route
// ================================
router.get("/test", (req, res) => {
  res.send("Booking Route Working");
});


// ================================
// Save Booking
// ================================
router.post("/", async (req, res) => {
  try {

    const booking = new Booking(req.body);

    await booking.save();

    res.status(201).json({
      success: true,
      message: "Booking Saved Successfully",
      booking,
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      success: false,
      message: "Error Saving Booking",
      error: err.message,
    });

  }
});


// ================================
// Get All Bookings
// ================================
router.get("/", async (req, res) => {
  try {

    const bookings = await Booking.find().sort({
      createdAt: -1,
    });

    res.json(bookings);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
});


// ================================
// Delete Booking
// ================================
router.delete("/:id", async (req, res) => {

  try {

    const booking = await Booking.findByIdAndDelete(req.params.id);

    if (!booking) {

      return res.status(404).json({
        success: false,
        message: "Booking Not Found",
      });

    }

    res.json({
      success: true,
      message: "Booking Cancelled Successfully",
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }

});


// ================================
// Get Single Booking (Optional)
// ================================
router.get("/:id", async (req, res) => {

  try {

    const booking = await Booking.findById(req.params.id);

    if (!booking) {

      return res.status(404).json({
        success: false,
        message: "Booking Not Found",
      });

    }

    res.json(booking);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }

});

module.exports = router;