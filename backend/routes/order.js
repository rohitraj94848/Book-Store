const router = require("express").Router();
const authenticateToken = require("./userAuth");
const Book = require("./book");
const Order = require("../models/order");
const User = require("../models/user");

// Place order
router.post("/place-order", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const { order } = req.body;

    for (const orderData of order) {
      const newOrder = new Order({ user: id, book: orderData._id });
      const orderDataFromDb = await newOrder.save();

      // Saving order in user model
      await User.findByIdAndUpdate(id, {
        $push: { orders: orderDataFromDb._id },
      });

      // Clearing cart
      await User.findByIdAndUpdate(id, {
        $pull: { cart: orderData._id },
      });
    }

    return res.json({
      status: "Success",
      message: "Order Placed Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred" });
  }
});

// Get order history of particular user
router.get("/get-order-history", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await User.findById(id).populate({
      path: "orders",
      populate: { path: "book" },
    });

    const orderData = userData.orders.reverse();
    return res.json({
      status: "Success",
      data: orderData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred" });
  }
});

router.get("/get-all-orders", authenticateToken, async (req, res) => {
  try {
    // Fetch all orders, populating the book and user fields, and sorting by creation date in descending order
    const orderData = await Order.find()
      .populate({ path: "book" })
      .populate({ path: "user" })
      .sort({ createdAt: -1 });

    // Return the fetched data in the response
    return res.json({
      status: "Success",
      data: orderData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred" });
  }
});

// Update order status -- admin
router.put("/update-status/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params; // Extract the order ID from the request parameters

    // Update the order's status using the provided status in the request body
    await Order.findByIdAndUpdate(id, { status: req.body.status });

    // Return a success response
    return res.json({
      status: "Success",
      message: "Status Updated Successfully",
    });
  } catch (error) {
    console.log(error); // Log the error for debugging purposes
    return res.status(500).json({ message: "An error occurred" }); // Return a 500 status with an error message
  }
});

module.exports = router;
