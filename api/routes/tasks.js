const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

//GET ALL TASKS
router.get("/", async (req, res, next) => {
  try {
    const tasks = await Task.find();
    console.log(tasks);
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

//GET ONE TASK
router.get("/:id", async (req, res, next) => {
  console.log("GET /id:");
  console.log(req.params.id);
  try {
    const task = await Task.findById(req.params.id);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

//CREATE ONE TASK
router.post("/", async (req, res, next) => {
  const data = {
    title: "title02",
    group: "group02",
    priority: "priority02"
  };

  console.log(req.body.title);
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

//DELETE ONE TASK
router.delete("/:id", async (req, res, next) => {
  console.log("DELETE /:id");

  try {
    const task = await Task.findById(req.params.id);

    await task.deleteOne(task);

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

//UPDATE ONE TASK
router.put("/:id", async (req, res, next) => {
  console.log("UPDATE /:id");

  try {
    await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(500).json({ success: true });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

module.exports = router;
