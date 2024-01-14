import { FC, useEffect, useMemo, useState } from "react";

export const PasswordGenerator: FC = () => {
  const lowercase_letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const uppercase_letters = lowercase_letters.map((char) => char.toUpperCase());
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((val) => val.toString());
  const specialChars = "!@#$%^&*()_=+{}:;,.?/~`".split("");

  const [passwordLength, setPasswordLength] = useState(0);

  const [result, setResult] = useState("");

  const [useUpperLetters, setUseUpperLetters] = useState(true);
  const [useLowerLetters, setUseLowerLetters] = useState(true);
  const [useNumbers, setUseNumbers] = useState(false);
  const [useSpecial, setUseSpecial] = useState(false);

  const possibleCharacters = useMemo<Array<string>>(
    () =>
      [
        useUpperLetters ? uppercase_letters : [],
        useLowerLetters ? lowercase_letters : [],
        useNumbers ? numbers : [],
        useSpecial ? specialChars : [],
      ].flat(),
    []
  );

  const [invalidationCounter, setInvalidationCounter] = useState(0);

  useEffect(() => {
    setResult(
      new Array(passwordLength)
        .fill(0)
        .map(
          () =>
            possibleCharacters[
              Math.floor(Math.random() * possibleCharacters.length)
            ]
        )
        .join("")
    );
  }, [passwordLength, possibleCharacters, invalidationCounter]);

  return (
    <div>
      <h1>Password generator</h1>
      <label htmlFor="num">Number of characters</label>
      <input
        type="range"
        id="num"
        min="1"
        max="100"
        value="20"
        onInput={(e) => {
          setPasswordLength(Number.parseInt(e.currentTarget.value) || 10);
        }}
      />

      <br />

      <label htmlFor="lower">lowercase letters</label>
      <input
        type="checkbox"
        id="lower"
        onChange={() => setUseLowerLetters(!useLowerLetters)}
      />

      <label htmlFor="upper">uppercase letters</label>
      <input
        type="checkbox"
        id="upper"
        onChange={() => setUseUpperLetters(!useUpperLetters)}
      />

      <label htmlFor="numbers">numbers</label>
      <input
        type="checkbox"
        id="numbers"
        onChange={() => setUseNumbers(!useNumbers)}
      />

      <label htmlFor="special">special characters</label>
      <input
        type="checkbox"
        id="special"
        onChange={() => setUseSpecial(!useSpecial)}
      />
      <br />

      <button onClick={() => setInvalidationCounter(invalidationCounter + 1)}>
        Regenerate password
      </button>

      <pre id="result">{result}</pre>
    </div>
  );
};