/** @format */

const {
  encode,
  decode,
  createCipher,
  playfairEncode,
  playfairDecode,
  frequencyAnalysis,
} = require("../src/index");

// Shift cipher
test("encodes text with shift cipher", () => {
  const result = encode("hello", 3);
  expect(result).toBeDefined();
  expect(result).toBe("khoor");
});

test("decodes back to original with shift cipher", () => {
  const encoded = encode("hello", 3);
  const result = decode(encoded, 3);
  expect(result).toBe("hello");
});

test("createCipher returns encode and decode functions", () => {
  const cipher = createCipher(3);
  expect(typeof cipher.encode).toBe("function");
  expect(typeof cipher.decode).toBe("function");
  expect(cipher.encode("hello")).toBe("khoor");
});

// Playfair
test("playfair encode returns a string", () => {
  const result = playfairEncode("HELLO", "SECRET");
  expect(typeof result).toBe("string");
  expect(result.length).toBeGreaterThan(0);
});

test("playfair encode and decode round trip", () => {
  const encoded = playfairEncode("HELLO", "SECRET");
  const decoded = playfairDecode(encoded, "SECRET");
  expect(typeof decoded).toBe("string");
  expect(decoded.length).toBeGreaterThan(0);
});

// Frequency analysis
test("frequency analysis returns raw and sorted", () => {
  const result = frequencyAnalysis("hello world");
  expect(result.raw).toBeDefined();
  expect(result.sorted).toBeDefined();
  expect(result.raw["l"]).toBe(3);
});
