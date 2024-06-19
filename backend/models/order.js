const mongoose = require("mongoose");

const order = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,//we are not taking array of object , we are taking just one object
        ref: "books",                 // because one user can create one order
    },
    book: {
        type: mongoose.Types.ObjectId,
        ref: "books",
    },
    status: {
        type: String,
        ref: "books",
        default: "Order Placed",
        enum: ["Order Placed", "Out for delivery", "Delivered", "Canceled"],
    },

},
    { timestamps: true }
);

module.exports = mongoose.model("order", order);