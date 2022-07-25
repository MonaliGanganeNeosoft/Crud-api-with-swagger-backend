const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { UnauthenticationError } = require("../errors");
const auth = async (req, res, next) => {
  //check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticationError("Aithentication invalid");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    //attach the user to the job routes

    const user = User.findById(payload.id).select("-password");
    req.user;

    req.user = { userId: payload.userId, name: payload.name };
    next();
  } catch (error) {
    throw new UnauthenticationError("Authentication invalid");
  }
};
module.exports = auth;
