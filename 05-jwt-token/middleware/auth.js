const jwt = require("jsonwebtoken");
// const CustomAPIError = require("../errors/custom-error");
const { UnauthenticatedError } = require("../errors");

const authenticationMiddleware = async (req, res, next) => {
  //   console.log(req.headers.authorization);
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    // throw new CustomAPIError("No token provided", 401);
    throw new UnauthenticatedError("No token provided");
  }
  const token = authHeader.split(" ")[1];
  console.log(token);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    const { id, username } = decoded;
    req.user = { id, username };
    next();

    // const luckyNumber = Math.floor(Math.random() * 100);
    // res.status(200).json({
    //   msg: `Hello , ${decoded.username}`,
    //   secret: `Here is your authorized data,you lucky number is ${luckyNumber}`,
    // });
  } catch (error) {
    // throw new CustomAPIError("Not Authorized to access this route", 401);
    throw new UnauthenticatedError("Not Authorized to access this route");
  }
  //   next();
};
module.exports = authenticationMiddleware;
