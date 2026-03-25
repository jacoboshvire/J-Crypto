/** @format */

function frequencyAnalysis(text) {
  const freq = {};

  // Initialize alphabet
  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(97 + i);
    freq[letter] = 0;
  }

  // Count letters
  for (let char of text.toLowerCase()) {
    if (freq.hasOwnProperty(char)) {
      freq[char]++;
    }
  }

  // Convert to sorted array
  const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);

  return {
    raw: freq,
    sorted,
  };
}

module.export = { fraquencyAnalysis };
