import { Button, Code, Stack, TagsInput } from "@mantine/core";
import { FC, useEffect, useState } from "react";

export const RandomItemFromList: FC = () => {
  const [input, setInput] = useState<string[]>([]);
  const [output, setOutput] = useState("");

  const randomTag = () => {
    setOutput(input[Math.floor(Math.random() * input.length)]);
  };

  useEffect(randomTag, [input]);

  return (
    <Stack>
      <h1>Random Item from List</h1>
      <Stack px={"xl"}>
        <TagsInput
          label="Press Enter to add an item"
          data={[]}
          value={input}
          onChange={setInput}
        />

        <div>
          <Button onClick={randomTag}>Regenerate</Button>
        </div>
        <Code>{output}</Code>
      </Stack>
    </Stack>
  );
};
