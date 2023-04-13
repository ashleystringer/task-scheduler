const mongoose = require("mongoose");

const TaskCatSchema = new mongoose.Schema({});

module.exports = mongoose.model("TaskCat", TaskCatSchema);
