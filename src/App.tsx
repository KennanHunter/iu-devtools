import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { ReactElement } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import { Index } from "./route/Index";
import { Layout } from "./route/Layout";
import { CaseConverter } from "./route/tools/CaseConverter";
import { LoremIpsum } from "./route/tools/LoremIpsum";
import { PasswordGenerator } from "./route/tools/PasswordGenerator";
import { StringReverser } from "./route/tools/StringReverser";
import { UserAgent } from "./route/tools/UserAgent";
import { ASCIITable } from "./route/tools/ASCIITable";
import { HashCalculator } from "./route/tools/HashCalculator";

export const links: { text: string; href: string; content: ReactElement }[] = [
  {
    text: "Lorem Ipsum Generator",
    href: "lorem-ipsum",
    content: <LoremIpsum />,
  },
  {
    text: "Case Converter",
    href: "case-converter",
    content: <CaseConverter />,
  },
  {
    text: "String Reverser",
    href: "string-reverser",
    content: <></>,
  },
  {
    text: "Acronym Generator",
    href: "acronym-generator",
    content: <></>,
  },
  {
    text: "Password Generator",
    href: "password-generator",
    content: <PasswordGenerator />,
  },
  {
    text: "User Agent Detector",
    href: "user-agent",
    content: <UserAgent />,
  },
  {
    text: "String Reverser",
    href: "string-reverser",
    content: <StringReverser />,
  },
  {
    text: "ASCII Table",
    href: "ascii-table",
    content: <ASCIITable />,
  },
  {
    text: "Hash Calculator",
    href: "hash-calculator",
    content: <HashCalculator />,
  },
];

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      ...links.map((val) => ({
        path: "/tools/" + val.href,
        element: val.content,
      })),
    ],
  },
]);

function App() {
  return (
    <>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </>
  );
}

export default App;
