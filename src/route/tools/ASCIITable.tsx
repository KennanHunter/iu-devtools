import { Table } from "@mantine/core";
import { FC, useMemo } from "react";

export const ASCIITable: FC = () => {
  type Row = {
    code: string;
    character: string;
    entity: string;
  };

  const tableData = useMemo<Array<Row>>(() => {
    const rows = Array.from({ length: 127 }, (_, i) => String.fromCharCode(i))
      .splice(33)
      .map<Row>((val, index) => ({
        code: (33 + index).toString(),
        character: val,
        entity: `&#${33 + index}`,
      }));

    return [
      {
        code: "0 - 31",
        character: "Control Characters",
        entity: "",
      },
      {
        code: "33",
        character: "space",
        entity: `&#33`,
      },
      ...rows,
    ];
  }, []);

  return (
    <Table id="asciiTable">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>ASCII Code</Table.Th>
          <Table.Th>Character</Table.Th>
          <Table.Th>HTML Entity</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {tableData.map((val) => (
          <Table.Tr>
            <Table.Td>{val.code}</Table.Td>
            <Table.Td>{val.character}</Table.Td>
            <Table.Td>{val.entity}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};
