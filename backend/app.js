const express = require("express");
const app = express();
require("dotenv").config();
require("./conn/conn");
const User = require("./routes/user");
const Books = require("./routes/book");

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use("/api/v1", User);
app.use("/api/v1", Books);

app.get("/", (req, res) => {
  res.send("Hello from backend side...");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
//my name
