<!-- @format -->

## J-Crypto

This package was developed to enable programmers to encode and decode messages using a numerical cipher method.

## installing J-Crypto

> > npm i j-crypto-change

# Example for Caesar (Shift) Cipher

> > const { encode, decode, createCipher } = require("j-crypto-change");
>
> encode("hello");
> decode("khoor");
> const cipher = createCipher(5);
> console.log(cipher.encode("hello"));
> cipher.decode("mjqqt");

## Playfair

> > const { playfairEncode, playfairDecode } = require('./playfair');
>
> playfairEncode("HELLO", "KEY");
> playfairDecode("DAVVRO", "KEY");

# Frequency Analysis

> > const { frequencyAnalysis } = require("j-crypto");
>
> const result = frequencyAnalysis("khoor zruog");

# <<<<<<< HEAD

> > just testing
> >
> > > > > > > main
