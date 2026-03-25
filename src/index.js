/** @format */

const { frequencyAnalysis } = require("./frequencyAnalysis");
const { playfairDecode, playfairEncode } = require("./playfair");

module.exports = {
  encode,
  decode,
  createCipher,
  playfairEncode,
  playfairDecode,
  frequencyAnalysis,
};
