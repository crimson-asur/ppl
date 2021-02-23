const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const route = require("./routes/routes");
const timeLine = require("./routes/timelineRoutes/timeline");
const mail = require("./routes/forgotPassword/");

require("dotenv").config();
// File upload middleware
// const multer = require("multer");

const app = express();
const PORT = process.env.PORT || 3001;
// Add middleware to express app

// Serve Static files
app.use(express.static("./public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Cross Origin Resource Sharing middleware
// more @ https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use(cors());

app.use(morgan("tiny"));

// DB connection
mongoose
  .connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Database connect host ${process.env.DB_HOST}`);
  })
  .catch((err) => {
    console.log(err);
  });

// Routes
app.use("/home", route); // routes/routes.js

// Timeline routes
app.use("/timeline", timeLine);

app.use("/mail", mail);

app.get("/oogabooga", (req, res) => {
  res.sendFile(
    "/home/com73/Documents/PPL/backend/public/images/pet-1613631134752.jpg"
  );
});
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
