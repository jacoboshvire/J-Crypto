/** @format */

const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Welcome to J-Crypto!");
});

app.listen(port, () => {
  console.log(`J-Crypto app listening at http://localhost:${port}`);
});
