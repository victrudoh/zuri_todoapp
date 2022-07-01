const { v4: uuidv4 } = require("uuid");
const TodoModel = require("../models/todo.model");
const stamp = require("../middlewares/timestamp");

module.exports = {
  // Get all tasks
  getAllTodoTasksController: async (req, res) => {
    try {
      const tasks = await TodoModel.find();
      res.status(200).send({
        success: true,
        data: {
          tasks: tasks,
        },
        message: "fetched all tasks successfully",
      });
    } catch (err) {
      res.status(400).send({
        success: false,
        data: err.message,
      });
    }
  },

  //   Add a task
  postAddTaskController: async (req, res) => {
    try {
      const { title, description } = req.body;
      const _id = uuidv4();
      const timestamp = stamp.getTimeStamp();

      const task = new TodoModel({
        _id,
        title,
        description,
        timestamp,
      });
      await task.save();

      res.status(200).send({
        success: true,
        data: {
          task: task,
        },
        message: "You added a new task",
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        data: error.message,
      });
    }
  },

  //   Edit task
  postEditTaskController: async (req, res) => {
    try {
      const { _id } = req.query;
      const { title, description } = req.body;
      const editedAt = stamp.getTimeStamp();

      // find task
      const task = await TodoModel.findById({ _id: _id });

      //   if no task
      if (!task) {
        res.status(400).send({
          success: false,
          data: err.message,
          message: "task not found",
        });
      }

      console.log("Here");

      //   update task
      task.title = title;
      task.description = description;
      task.timestamp = task.timestamp;
      task.edited = true;
      task.editedAt = editedAt;

      await task.save();

      res.status(200).send({
        success: true,
        data: {
          task: task,
        },
        message: "You updated a task",
      });
    } catch (error) {}
  },

  // Delete task
  postDeleteTaskController: async (req, res) => {
    try {
      const { _id } = req.query;
      const task = await TodoModel.findByIdAndDelete({ _id: _id });

      //   if no task
      if (!task) {
        res.status(400).send({
          success: false,
          data: err.message,
          message: "task not found",
        });
      }

      //   if there's a matching Id
      res.status(200).send({
        success: true,
        data: {
          task: task,
        },
        message: "task deleted",
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        data: error.message,
        message: "Oops!",
      });
    }
  },
};
