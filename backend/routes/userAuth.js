// The code you provided is a middleware function for Express.js that is used to authenticate JSON Web Tokens (JWTs) in HTTP requests. This middleware ensures that incoming requests have a valid JWT before allowing access to protected routes.

const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // If there is no token, return an error
  if (!token) {
    return res.status(401).json({ message: "Authentication token required" });
  }

  jwt.verify(token, "bookStore123", (err, user) => {
    if (err) {
      // If token verification fails, return an error
      return res.status(403).json(err);
    }
    
    // Attach the user object to the request
    req.user = user;
    next(); // Proceed to the next middleware or route handler
  });
};

module.exports =  authenticateToken ;
