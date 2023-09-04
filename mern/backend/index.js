// This file is the entry point for the backend server.
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const articleRoutes = require("./routes/articleRoutes");
const cors = require("cors");

// Get environment variables
const MONGO_STRING = process.env.MONGO_STRING;
const PORT = process.env.PORT;

// Connect to MongoDB database
mongoose.connect(MONGO_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;

database.on("error", (error) => {
  console.log("Error connecting to database:", error);
});

database.once("connected", () => {
  console.log("Connected to database");
});

// Create express app
const app = express();

// Middleware for parsing JSON and handling CORS policy
app.use(express.json());
app.use(cors());

// Routes
app.use("/articles", articleRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
