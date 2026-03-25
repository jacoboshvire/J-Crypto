<!-- @format -->

## J-Crypto

---

This package was developed to enable programmers to encode and decode messages using a numerical cipher method.

## installing J-Crypto

> npm i j-crypto-change

# Example for Caesar (Shift) Cipher

> const { encode, decode, createCipher } = require("j-crypto-change");

encode("hello"); // "khoor"
decode("khoor"); // "hello"

const cipher = createCipher(5);
console.log(cipher.encode("hello")); // "mjqqt"
cipher.decode("mjqqt"); // "hello"

---

## Playfair

> const { playfairEncode, playfairDecode } = require('./playfair');

playfairEncode("HELLO", "KEY"); // "DAVVRO" (varies by key)

playfairDecode("DAVVRO", "KEY"); // "HELXLO" (X is padding)

# Frequency Analysis

> const { frequencyAnalysis } = require("j-crypto");

const result = frequencyAnalysis("khoor zruog");
