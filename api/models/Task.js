const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  group: {
    type: String,
    required: true
  },
  /*
  group: {
    type: mongoose.Schema.ObjectId,
    ref: "Group",
    required: true
  }
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "TaskCat",
    required: true
  }
  */
  priority: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Task", TaskSchema);
