/** @format */

const express = require("express");
const {
  encode,
  decode,
  createCipher,
  playfairEncode,
  playfairDecode,
  frequencyAnalysis,
} = require("./src/index");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to J-Crypto API!" });
});

app.post("/encode", (req, res) => {
  const { text, shift } = req.body;
  res.json({ result: encode(text, shift) });
});

app.post("/decode", (req, res) => {
  const { text, shift } = req.body;
  res.json({ result: decode(text, shift) });
});

app.post("/playfair/encode", (req, res) => {
  const { text, key } = req.body;
  res.json({ result: playfairEncode(text, key) });
});

app.post("/playfair/decode", (req, res) => {
  const { text, key } = req.body;
  res.json({ result: playfairDecode(text, key) });
});

app.post("/frequency", (req, res) => {
  const { text } = req.body;
  res.json({ result: frequencyAnalysis(text) });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.listen(8080, () => {
  console.log("J-Crypto API running on port 8080");
});

module.exports = app;
