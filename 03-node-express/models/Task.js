const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
  //   name: String,
  //   completed: Boolean,
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name cant be more 20 chareters"],
  },
  completed: {
    type: Boolean,
    // default: false,
  },
});
module.exports = mongoose.model("Task", TaskSchema);
