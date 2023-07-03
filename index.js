const routes = require("./routes/routes");
const chicken = require("./routes/chicken");
const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

const cors = require("cors");

//use cors
app.use(cors());

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
// const routes = require("./rout es/routes");
app.use("/chicken", chicken);
app.use("/api", routes);
app.listen(5000, () => {
  console.log(`Server Started at ${5000}`);
});
