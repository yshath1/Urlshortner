const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const urlRoute = require("./routes/urls");
const path = require("path");

dotenv.config();
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));





app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/urls", urlRoute);


app.listen("5000", () => {
  console.log("Backend is running.");
});
