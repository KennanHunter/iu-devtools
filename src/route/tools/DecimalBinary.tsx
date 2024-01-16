import { Code, Stack, Switch, TextInput } from "@mantine/core";
import { FC, useMemo, useState } from "react";

export const DecimalBinary: FC = () => {
  const [input, setInput] = useState("");

  const [isToDecimal, setToDecimal] = useState(true);

  const errorText = useMemo(() => {
    const characters = input.trim().split("");

    if (isToDecimal) {
      return characters.reduce(
        (prev, cur) => prev || !["0", "1"].includes(cur),
        false,
      )
        ? "String can not include non-binary characters"
        : undefined;
    } else {
      return characters.reduce(
        (prev, cur) =>
          prev ||
          !Array.from({ length: 10 })
            .map((_, index) => index.toString())
            .includes(cur),
        false,
      )
        ? "String can not include non-decimal characters"
        : undefined;
    }
  }, [input]);

  return (
    <Stack>
      <h1>{isToDecimal ? "Binary to Decimal" : "Decimal to Binary"}</h1>

      <Switch
        label={"Switch to decimal vs to binary"}
        checked={isToDecimal}
        onChange={(event) => setToDecimal(event.currentTarget.checked)}
      />
      <TextInput
        value={input}
        error={errorText}
        onChange={(e) => setInput(e.target.value)}
      />

      {!errorText && input ? (
        <Code>
          {isToDecimal
            ? Number.parseInt(input, 2).toString(10)
            : Number.parseInt(input, 10).toString(2)}
        </Code>
      ) : (
        <></>
      )}
    </Stack>
  );
};
