import { Code, Text, TextInput } from "@mantine/core";
import { FC, useState } from "react";

export const CaseConverter: FC = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <h1>Case Converter</h1>

      <TextInput
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      />

      {input.length ? (
        <>
          <Text>Upper Case</Text>
          <Code>{input.toUpperCase()}</Code>

          <Text>Lower Case</Text>
          <Code>{input.toLowerCase()}</Code>

          <Text>Title Case</Text>
          <Code>
            {input
              .split(" ")
              .map((val) => (val[0] ?? "").toUpperCase() + val.substring(1))
              .join(" ")}
          </Code>

          <Text>Sentence Case</Text>
          <Code>
            {input.replace(
              /\w\S*/g,
              (txt) =>
                txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
            )}
          </Code>
        </>
      ) : (
        <Text>Enter an input first</Text>
      )}
    </div>
  );
};
