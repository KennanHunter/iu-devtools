import { Button, Checkbox, Slider, Stack } from "@mantine/core";
import { FC, useEffect, useMemo, useState } from "react";

const generatePassword = (
  possibleCharacters: Array<string>,
  passwordLength: number
) => {
  return new Array(passwordLength)
    .fill(0)
    .map(
      () =>
        possibleCharacters[
          Math.floor(Math.random() * possibleCharacters.length)
        ]
    )
    .join("");
};

export const PasswordGenerator: FC = () => {
  const lowercase_letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const uppercase_letters = lowercase_letters.map((char) => char.toUpperCase());
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((val) => val.toString());
  const specialChars = "!@#$%^&*()_=+{}:;,.?/~`".split("");

  const [passwordLength, setPasswordLength] = useState(10);

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
    [useUpperLetters, useLowerLetters, useNumbers, useSpecial]
  );

  useEffect(() => {
    setResult(generatePassword(possibleCharacters, passwordLength));
  }, [passwordLength, possibleCharacters]);

  return (
    <Stack>
      <h1>Password generator</h1>

      <Slider
        label={"Password Length"}
        value={passwordLength}
        max={40}
        onChange={(e) => setPasswordLength(e)}
      />

      <Checkbox
        label={"Lowercase letters"}
        checked={useLowerLetters}
        onChange={() => setUseLowerLetters(!useLowerLetters)}
      />

      <Checkbox
        label={"uppercase letters"}
        checked={useUpperLetters}
        onChange={() => setUseUpperLetters(!useLowerLetters)}
      />

      <Checkbox
        label={"numbers"}
        checked={useNumbers}
        onChange={() => setUseNumbers(!useNumbers)}
      />

      <Checkbox
        label={"special characters"}
        checked={useSpecial}
        onChange={() => setUseSpecial(!useNumbers)}
      />

      <Button
        onClick={() =>
          setResult(generatePassword(possibleCharacters, passwordLength))
        }
      >
        Regenerate password
      </Button>

      <pre>{result}</pre>
    </Stack>
  );
};
