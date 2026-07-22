const express = require("express");
const Property = require("../models/Property");

const router = express.Router();

// Add Property API
router.post("/add", async (req, res) => {

  try {

    const property = new Property(req.body);

    await property.save();

    res.status(201).json({
      message: "Property Added Successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

// Get All Properties API
router.get("/", async (req, res) => {

  try {

    const properties = await Property.find();

    res.status(200).json(properties);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

router.get("/:id", async (req, res) => {
  try {

    const property = await Property.findById(
      req.params.id
    );

    res.status(200).json(property);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

// Update Property
router.put("/:id", async (req, res) => {
  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json({
      success: true,
      message: "Property Updated Successfully",
      property: updatedProperty,
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
});

// Delete Property
router.delete("/:id", async (req, res) => {
  try {
    await Property.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Property Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;