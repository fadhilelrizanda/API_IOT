const routes = require("./routes/routes");
const chicken = require("./routes/chicken");
const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
const cors = require("cors");

//use cors

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.use(express.json());
app.use(cors());
// const routes = require("./rout es/routes");
app.use("/chicken", chicken);
app.use("/api", routes);
app.listen(5000, () => {
  console.log(`Server Started at ${5000}`);
});
