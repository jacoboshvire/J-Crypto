/** @format */

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

module.export = {
  encode,
  decode,
  createCipher,
};
