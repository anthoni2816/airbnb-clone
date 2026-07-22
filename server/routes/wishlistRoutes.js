const express = require("express");
const router = express.Router();

const Wishlist = require("../models/Wishlist");

// =========================
// Get Wishlist
// =========================
router.get("/", async (req, res) => {
  try {
    let wishlist = await Wishlist.find().populate("propertyId");

    // Remove invalid wishlist items (deleted properties)
    const invalidItems = wishlist.filter((item) => !item.propertyId);

    if (invalidItems.length > 0) {
      await Wishlist.deleteMany({
        _id: { $in: invalidItems.map((item) => item._id) },
      });

      wishlist = wishlist.filter((item) => item.propertyId);
    }

    res.json(wishlist);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// =========================
// Toggle Wishlist
// =========================
router.post("/toggle", async (req, res) => {
  try {
    const { propertyId } = req.body;

    const existing = await Wishlist.findOne({ propertyId });

    if (existing) {
      await Wishlist.findByIdAndDelete(existing._id);

      return res.json({
        added: false,
        message: "Removed from wishlist",
      });
    }

    const wishlist = new Wishlist({
      propertyId,
    });

    await wishlist.save();

    res.json({
      added: true,
      message: "Added to wishlist",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;