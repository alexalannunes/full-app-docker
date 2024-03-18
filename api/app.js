const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/", (req, res) => {
  res.json({ status: "App Success" });
});

app.listen(3001, () => {
  console.log("Api running...");
});
