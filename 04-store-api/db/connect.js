const mongoose = require("mongoose");
const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParse: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};
module.exports = connectDB;
