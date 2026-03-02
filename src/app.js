import express from "express";
import dotenv from "dotenv";
import { errorHandler, successHandler } from "./utils/responseHandler.js";
import db from "./configs/db.js";
import apiRouter from "./routes/routes.js";

dotenv.config({});

const app = express();
const port = 8080;

// Check DB connection properly
(async () => {
  try {
    await db.query("SELECT 1");
    console.log("✅ Database is reachable");
  } catch (error) {
    console.error("❌ Database connection failed", error);
  }
})();

app.use(express.json());

app.get("/", (req, res) => {
  return successHandler(res, {
    statusCode: 200,
    success: true,
    message: "Application is working..!!",
    data: null,
  });
});

app.use("/api/v1", apiRouter);

// Route not found
app.use((req, res) => {
  return errorHandler(res, {
    statusCode: 404,
    message: "Route not found..!!",
  });
});

// Global error handler
app.use((err, req, res, next) => {
  return errorHandler(res, {
    statusCode: err.statusCode || 500,
    message: err.message || "Internal Server Error",
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
