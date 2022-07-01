const express = require("express");

const router = express.Router();
const todoController = require("../controllers/todo.controller");

// all tasks
router.get("/tasks", todoController.getAllTodoTasksController);

// add task
router.post("/add", todoController.postAddTaskController);

// edit task
router.post("/edit", todoController.postEditTaskController);

// delete task
router.post("/delete", todoController.postDeleteTaskController);

module.exports = router;
