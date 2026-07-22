const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

  propertyId: String,

  image: String,

  title: String,

  location: String,

  price: Number,

  guests: Number,

  checkIn: String,

  checkOut: String,

  totalPrice: Number,

  paymentMethod: String

},
{
  timestamps:true
});

module.exports = mongoose.model("Booking", bookingSchema);