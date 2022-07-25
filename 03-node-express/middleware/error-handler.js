const { CustomAPIError } = require("../errors/custom-error");
const errorHandlerMiddleware = (err, req, res, next) => {
  //   return res.status(500).json({ msg: err });
  // console.log(err);
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: `something went wrong ,try again later` });
  // return res.status(err.status).json({ msg: err.message });
};
module.exports = errorHandlerMiddleware;
