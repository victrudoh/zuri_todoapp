// Dependencies
const mongoose = require("mongoose");

// Stuff
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    description: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    timestamp: {
      type: String,
    },
    edited: {
      type: Boolean,
      default: false,
    },
    editedAt: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", todoSchema);
