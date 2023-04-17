const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

// Route file
const tasks = require("./routes/tasks");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/tasks", tasks);

app.use(errorHandler); //ISSUE - 'm not sure if this is working

app.listen(5000, (req, res) => {
  console.log(`Listening on Port 5000`);
});
