import { Button, Code, NumberInput } from "@mantine/core";
import { FC, useEffect, useState } from "react";

export const RandomNumber: FC = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const [output, setOutput] = useState(0);

  const generateRandomNumber = () =>
    setOutput(Math.floor(Math.random() * (max - min)) + min);

  useEffect(generateRandomNumber, [min, max]);

  return (
    <div>
      <NumberInput
        value={min}
        label={"Minimum Value"}
        onChange={(e) => setMin(e ? Number.parseInt(e.toString()) ?? 0 : 0)}
      />
      <NumberInput
        value={max}
        label={"Maximum Value"}
        onChange={(e) => setMax(e ? Number.parseInt(e.toString()) ?? 0 : 0)}
      />

      <Button onClick={generateRandomNumber}>Regenerate</Button>
      <br />
      <Code>{output}</Code>
    </div>
  );
};
