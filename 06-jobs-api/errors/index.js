const CustomAPIError = require("./custom-api");
const UnauthenticationError = require("./unauthenticated");
const NotFoundError = require("./not-found");
const BadRequestError = require("./bad-request");
module.exports = {
  CustomAPIError,
  UnauthenticationError,
  NotFoundError,
  BadRequestError,
};
