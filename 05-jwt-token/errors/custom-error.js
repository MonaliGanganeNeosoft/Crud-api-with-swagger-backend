class CustomAPIError extends Error {
  // constructor(message, statusCode) {
  constructor(message) {
    super(message);
    // this.statusCode = statusCode;
  }
}
module.exports = CustomAPIError;
