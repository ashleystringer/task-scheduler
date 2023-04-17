const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  group: {
    type: String,
    default: "N/A"
  },
  /*
    - no group
    - custom group
  */
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
    enum: ["low", "moderate", "high", "very high"],
    required: true
  }
  /*
  - low
  - moderate
  - high
  - very high
  */

  /*
  schedule: {
    type: mongoose,Schema.ObjectId,
    ref: "Schedule",
    required: false
  }
  */
});

module.exports = mongoose.model("Task", TaskSchema);
