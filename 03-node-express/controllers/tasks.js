const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

// const getAllTasks = asyncWrapper(async (req, res) => {
//   //   res.send("get all task");
//   try {
//     const tasks = await Task.find({});
//     // res.status(200).json({ tasks });
//     res.status(200).json({ tasks, amount: tasks.length });
//     // res
//     //   .status(200)
//     //   .json({ status: "success", data: { tasks, nbhHits: tasks.length } });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// });
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(500).json({ tasks });
});
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});
// const getTask = asyncWrapper(async (req, res, next) => {
//   const { id: taskID } = req.params;
//   const task = await Task.findOne({ _id: taskID });
//   if (!task) {
//     const error = new Error("not found");
//     error.status = 404;
//     return next(error);
//     return res.status(404).json({ msg: `No task with id :${taskID}` });
//   }
//   res.status(200).json({ task });
// });

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id :${taskID}`, 404));
    // return res.status(404).json({ msg: `No task with id :${taskID}` });
  }
  res.status(200).json({ task });
});
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ msg: `No task with id:${taskID}` });
  }
  res.status(200).json({ task });
  // res.status(200).json({ id: taskID, data: req.body });
});
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    // return res.status(404).json({ msg: `No task with id :${taskID}` });
    return next(createCustomError(`No task with id :${taskID}`, 404));
  }

  res.status(200).json({ task });
});
const editTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
    overwrite: true,
  });
  if (!task) {
    // return res.status(404).json({ msg: `No task with id:${taskID}` });
    return next(createCustomError(`No task with id :${taskID}`, 404));
  }
  res.status(200).json({ task });
  // res.status(200).json({ id: taskID, data: req.body });
});
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask,
};
