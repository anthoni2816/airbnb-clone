const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema(
  {
    title: String,
    location: String,
    price: Number,

    image: String,

    bedroomImage: String,
    hallImage: String,
    kitchenImage: String,

    rating: Number,

    description: String,

    amenities: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", PropertySchema);