const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema(
{
    propertyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Property",
        required:true
    }
},
{
    timestamps:true
});

module.exports=mongoose.model("Wishlist",wishlistSchema);