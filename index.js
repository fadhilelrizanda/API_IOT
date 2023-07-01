// index.js
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 4000;
const mongoString =
  "mongodb+srv://fadhilelrizandamicr:xU4xokwD6X2Xi6Gn@cluster0.h4v4j79.mongodb.net/";

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
});

app.get("/about", (req, res) => {
  res.send("This is my about route..... ");
});

// Export the Express API
module.exports = app;
