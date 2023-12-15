const express = require("express");
const cors = require("cors");
const globalRouter = require("./routes/index");
const errorController = require("./controller/errorController");
const catchAsync = require("./utils/catchAsync");
const AppError = require("./utils/appError");
const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json());

// Logger
app.use(require("morgan")("dev"));

app.use("/v1", globalRouter);

app.use(
  "*",
  catchAsync(async (req, res, next) => {
    return next(new AppError("Sorry!!! Page Not Found", 404));
  })
);

// Error Handling Route
app.use(errorController);

module.exports = app;
