const jwt = require("jsonwebtoken");
const asyncWrapper = require("../utils/asyncWrapper");
const User = require("../models/UserSchama"); // Fixed typo in filename if necessary, but using existing

const verifyToken = asyncWrapper(async (req, res, next) => {
  const authHeader =
    req.headers["Authorization"] || req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ message: "Token is required" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decodedToken.id);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token" });
  }
});

module.exports = verifyToken;
