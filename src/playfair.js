/** @format */

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

module.export = {
  playfairEncode,
  playfairDecode,
};
