const router = require("express").Router();
const User = require("../models/user");
const  authenticateToken  = require("./userAuth");

router.put("/add-book-to-cart", authenticateToken, async (req, res) => {
  try {
    const { bookid, id } = req.headers;

    const userData = await User.findById(id);
    const isBookInCart = userData.cart.includes(bookid);

    if (isBookInCart) {
      return res.json({
        status: "Success",
        message: "Book is already in cart",
      });
    }

    await User.findByIdAndUpdate(id, { $push: { cart: bookid } });

    return res.json({
      status: "Success",
      message: "Book added to cart",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred" });
  }
});

// Remove book from cart
router.put("/remove-from-cart/:bookid", authenticateToken, async (req, res) => {
  try {
    const { bookid } = req.params; // Extract book ID from URL parameters
    const { id } = req.headers; // Extract user ID from headers

    // Update the user's cart by removing the specified book ID
    await User.findByIdAndUpdate(id, {
      $pull: { cart: bookid },
    });

    return res.json({
      status: "Success",
      message: "Book removed from cart",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred" });
  }
});

router.get("/get-user-cart", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;

    const userData = await User.findById(id).populate("cart");

    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    const cart = userData.cart.reverse();

    return res.json({
      status: "Success",
      data: cart,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred" });
  }
});

module.exports = router;
