/** @format */

// src/index.js

// Helper to shift a single character
function shiftChar(char, shift) {
  const isUpper = char >= "A" && char <= "Z";
  const isLower = char >= "a" && char <= "z";

  if (!isUpper && !isLower) return char;

  const base = isUpper ? 65 : 97;
  const charCode = char.charCodeAt(0) - base;

  const shifted = (charCode + shift) % 26;
  const normalized = shifted < 0 ? shifted + 26 : shifted;

  return String.fromCharCode(normalized + base);
}

// Encode function
function encode(text, shift = 3) {
  return text
    .split("")
    .map((char) => shiftChar(char, shift))
    .join("");
}

// Decode function
function decode(text, shift = 3) {
  return encode(text, -shift);
}

// Optional: framework-style wrapper
function createCipher(shift = 3) {
  return {
    encode: (text) => encode(text, shift),
    decode: (text) => decode(text, shift),
  };
}

// Playfair Cipher

function generateKeySquare(key) {
  const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ"; // no J
  const seen = new Set();
  let square = "";

  // Add key characters first
  for (let char of key.toUpperCase().replace(/J/g, "I")) {
    if (!seen.has(char) && alphabet.includes(char)) {
      seen.add(char);
      square += char;
    }
  }

  // Fill remaining letters
  for (let char of alphabet) {
    if (!seen.has(char)) {
      seen.add(char);
      square += char;
    }
  }

  return square; // 25-character string representing 5x5 grid
}

function getPosition(square, char) {
  const index = square.indexOf(char);
  return { row: Math.floor(index / 5), col: index % 5 };
}

function prepareText(text) {
  text = text
    .toUpperCase()
    .replace(/J/g, "I")
    .replace(/[^A-Z]/g, "");

  let pairs = [];
  let i = 0;

  while (i < text.length) {
    let a = text[i];
    let b = text[i + 1] || "X";

    if (a === b) {
      b = "X";
      i++;
    } else {
      i += 2;
    }

    pairs.push([a, b]);
  }

  return pairs;
}

function playfairShift(square, a, b, direction) {
  const posA = getPosition(square, a);
  const posB = getPosition(square, b);

  // Same row
  if (posA.row === posB.row) {
    return [
      square[posA.row * 5 + ((posA.col + direction + 5) % 5)],
      square[posB.row * 5 + ((posB.col + direction + 5) % 5)],
    ];
  }

  // Same column
  if (posA.col === posB.col) {
    return [
      square[((posA.row + direction + 5) % 5) * 5 + posA.col],
      square[((posB.row + direction + 5) % 5) * 5 + posB.col],
    ];
  }

  // Rectangle swap
  return [square[posA.row * 5 + posB.col], square[posB.row * 5 + posA.col]];
}

function playfairEncode(text, key = "KEY") {
  const square = generateKeySquare(key);
  const pairs = prepareText(text);

  return pairs
    .map(([a, b]) => playfairShift(square, a, b, 1).join(""))
    .join("");
}

function playfairDecode(text, key = "KEY") {
  const square = generateKeySquare(key);
  const pairs = prepareText(text);

  return pairs
    .map(([a, b]) => playfairShift(square, a, b, -1).join(""))
    .join("");
}

// function

module.exports = {
  encode,
  decode,
  createCipher,
  playfairEncode,
  playfairDecode,
};
