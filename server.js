const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cors());

 
mongoose
  .connect("mongodb://127.0.0.1:27017/testdb")
  .then(() => console.log("MongoDB ulandi"))
  .catch(err => console.log(err));

 
app.use("/users", userRoutes);

app.listen(5000, () => console.log("Server 5000-portda ishladi"));
