import { Button, Code, TextInput, Text } from "@mantine/core";
import { FC, useMemo, useState } from "react";

export const AcronymGenerator: FC = () => {
  const wordList: Record<string, Array<string>> = {
    a: ["apple", "airplane", "ant", "avocado"],
    b: ["banana", "ball", "book", "butterfly"],
    c: ["cat", "car", "cupcake", "cloud"],
    d: ["dog", "door", "dolphin", "dragonfly"],
    e: ["elephant", "egg", "envelope", "earth"],
    f: ["fox", "flower", "fish", "fire"],
    g: ["giraffe", "guitar", "grape", "globe"],
    h: ["horse", "hat", "heart", "hamburger"],
    i: ["iguana", "ice", "island", "ink"],
    j: ["jellyfish", "jacket", "juice", "jigsaw"],
    k: ["kangaroo", "kite", "key", "kiwi"],
    l: ["lion", "laptop", "lemon", "lamp"],
    m: ["monkey", "moon", "mountain", "muffin"],
    n: ["narwhal", "notebook", "nut", "nest"],
    o: ["octopus", "orange", "owl", "ocean"],
    p: ["penguin", "pizza", "pear", "piano"],
    q: ["quokka", "quilt", "queen", "question"],
    r: ["rabbit", "rainbow", "rose", "rocket"],
    s: ["snake", "sun", "star", "sandwich"],
    t: ["tiger", "tree", "turtle", "telescope"],
    u: ["umbrella", "unicorn", "ufo", "underwater"],
    v: ["vulture", "violin", "volcano", "vegetable"],
    w: ["whale", "watermelon", "windmill", "wizard"],
    x: ["xylophone", "x-ray", "xenon", "xerox"],
    y: ["yak", "yo-yo", "yogurt", "yarn"],
    z: ["zebra", "zipper", "zoo", "zucchini"],
  };

  const [input, setInput] = useState("");

  const [regenerateIterator, setRegenerateIterator] = useState(0);

  const result = useMemo(
    () =>
      input
        .split("")
        .map((letter) => letter.toLowerCase())
        .map((letter) => {
          if (letter === "") return;

          const lengthOfLetterList = wordList[letter].length;
          const randomNumber = Math.floor(Math.random() * lengthOfLetterList);

          const word = wordList[letter][randomNumber];
          // make the first letter uppercase
          return word[0].toUpperCase() + word.substring(1).toLowerCase();
        })
        .join(" "),
    [input, regenerateIterator]
  );

  return (
    <div>
      <h1>Acronym Generator</h1>

      <TextInput value={input} onChange={(e) => setInput(e.target.value)} />

      {input ? (
        <>
          <Button onClick={() => setRegenerateIterator(regenerateIterator + 1)}>
            Regenerate
          </Button>
          <br />
          <Code>{result}</Code>
        </>
      ) : (
        <Text>Enter an Input first</Text>
      )}
    </div>
  );
};
