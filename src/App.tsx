import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import {
  IconAbc,
  IconBinary,
  IconClock,
  IconCodeCircle,
  IconHash,
  IconLetterA,
  IconList,
  IconListLetters,
  IconMarkdown,
  IconNumber,
  IconPassword,
  IconSpace,
  IconTextCaption,
  IconTextDirectionRtl,
} from "@tabler/icons-react";
import { ReactElement } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import { Index } from "./route/Index";
import { Layout } from "./route/Layout";
import { ASCIITable } from "./route/tools/ASCIITable";
import { AcronymGenerator } from "./route/tools/AcronymGenerator";
import { CaseConverter } from "./route/tools/CaseConverter";
import { HashCalculator } from "./route/tools/HashCalculator";
import { LoremIpsum } from "./route/tools/LoremIpsum";
import { PasswordGenerator } from "./route/tools/PasswordGenerator";
import { StringReverser } from "./route/tools/StringReverser";
import { TextCounter } from "./route/tools/TextCounter";
import { UserAgent } from "./route/tools/UserAgent";
import { DecimalBinary } from "./route/tools/DecimalBinary";
import { MarkdownPreview } from "./route/tools/MarkdownPreview";
import { RandomItemFromList } from "./route/tools/RandomItemFromList";
import { RandomNumber } from "./route/tools/RandomNumber";
import { Stopwatch } from "./route/tools/Stopwatch";
import { Timer } from "./route/tools/Timer";

export const links: {
  text: string;
  href: string;
  content: ReactElement;
  icon?: ReactElement;
}[] = [
  {
    text: "Lorem Ipsum Generator",
    href: "lorem-ipsum",
    content: <LoremIpsum />,
    icon: <IconTextCaption />,
  },
  {
    text: "Case Converter",
    href: "case-converter",
    content: <CaseConverter />,
    icon: <IconAbc />,
  },
  {
    text: "Password Generator",
    href: "password-generator",
    content: <PasswordGenerator />,
    icon: <IconPassword />,
  },
  {
    text: "User Agent Detector",
    href: "user-agent",
    content: <UserAgent />,
    icon: <IconCodeCircle />,
  },
  {
    text: "String Reverser",
    href: "string-reverser",
    content: <StringReverser />,
    icon: <IconTextDirectionRtl />,
  },
  {
    text: "ASCII Table",
    href: "ascii-table",
    content: <ASCIITable />,
    icon: <IconLetterA />,
  },
  {
    text: "Hash Calculator",
    href: "hash-calculator",
    content: <HashCalculator />,
    icon: <IconHash />,
  },
  {
    text: "Text Counter",
    href: "text-counter",
    content: <TextCounter />,
    icon: <IconSpace />,
  },
  {
    text: "Acronym Generator",
    href: "acronym-generator",
    content: <AcronymGenerator />,
    icon: <IconListLetters />,
  },

  {
    text: "Binary to/from Decimal",
    href: "binary-decimal",
    content: <DecimalBinary />,
    icon: <IconBinary />,
  },
  {
    text: "Markdown",
    href: "markdown",
    content: <MarkdownPreview />,
    icon: <IconMarkdown />,
  },
  {
    text: "Random Item From List",
    href: "random-item",
    content: <RandomItemFromList />,
    icon: <IconList />,
  },
  {
    text: "Random Number",
    href: "random-number",
    content: <RandomNumber />,
    icon: <IconNumber />,
  },
  {
    text: "Stopwatch",
    href: "stopwatch",
    content: <Stopwatch />,
    icon: <IconClock />,
  },
  {
    text: "Timer",
    href: "timer",
    content: <Timer />,
    icon: <IconClock />,
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
