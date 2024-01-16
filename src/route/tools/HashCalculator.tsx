import { Code, Table, TextInput } from "@mantine/core";
import { FC, useMemo, useState } from "react";
import CryptoJS from "crypto-js";

export const HashCalculator: FC = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <TextInput
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      />

      <Table horizontalSpacing="lg">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Algorithm</Table.Th>
            <Table.Th>Hash Value</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>MD5</Table.Td>
            <Table.Td>
              <Code>
                {useMemo(() => CryptoJS.MD5(input).toString(), [input])}
              </Code>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>SHA-1</Table.Td>
            <Table.Td id="sha1">
              <Code>
                {useMemo(() => CryptoJS.SHA1(input).toString(), [input])}
              </Code>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>SHA-256</Table.Td>
            <Table.Td id="sha256">
              <Code>
                {useMemo(() => CryptoJS.SHA256(input).toString(), [input])}
              </Code>
            </Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </div>
  );
};
