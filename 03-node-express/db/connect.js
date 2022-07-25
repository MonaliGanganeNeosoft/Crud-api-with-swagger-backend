const mongoose = require("mongoose");
// const connectionString =
//   "mongodb+srv://Moni:1234@nodeexpressprojects.blgcr.mongodb.net/03-Task_MANAGER?retryWrites=true&w=majority";

const connectDB = (url) => {
  // return mongoose.connect(connectionString,{
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};
module.exports = connectDB;
//   mongoose
//   .connect(connectionString, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to the db..."))
//   .catch((err) => console.log(err));
