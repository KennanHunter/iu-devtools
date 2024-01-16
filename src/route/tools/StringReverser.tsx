import { TextInput, Text } from "@mantine/core";
import { FC, useState } from "react";

export const StringReverser: FC = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <h1>String Reverser</h1>

      <TextInput
        label={"Input String"}
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      />

      <Text>{input.split("").reverse().join("")}</Text>
    </div>
  );
};
