import { Paper, SimpleGrid, Stack, Textarea } from "@mantine/core";
import { marked } from "marked";
import { FC, useEffect, useState } from "react";

export const MarkdownPreview: FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    const markdownPreview = marked(input);

    if (typeof markdownPreview === "string") {
      setOutput(markdownPreview);
    } else markdownPreview.then((val) => setOutput(val));
  });

  return (
    <Stack>
      <h1>Markdown Preview</h1>
      <SimpleGrid cols={2} h={"100%"}>
        <Textarea
          value={input}
          onChange={(event) => setInput(event.currentTarget.value)}
        />
        <Paper shadow="xl" p="xl">
          <div dangerouslySetInnerHTML={{ __html: output }} />
        </Paper>
      </SimpleGrid>
    </Stack>
  );
};
