import { Code, TextInput } from "@mantine/core";
import { FC, useState } from "react";

export const TextCounter: FC = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <h1>Text Counter</h1>
      <TextInput value={input} onChange={(e) => setInput(e.target.value)} />
      <Code>
        Number of words:{" "}
        {input.split(/\s+/).filter((word) => word.length > 0).length}
      </Code>
      <br />
      <Code>Number of letters: {input.split("").length}</Code>
    </div>
  );
};
