import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Index } from "./route/Index";
import { Layout } from "./route/Layout";
import { LoremIpsum } from "./route/tools/LoremIpsum";
import { PasswordGenerator } from "./route/tools/PasswordGenerator";

export const links = [
  {
    text: "Lorem Ipsum Generator",
    href: "lorem-ipsum",
    content: <LoremIpsum />,
  },
  {
    text: "Case Converter",
    href: "case-converter",
    content: <></>,
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
];

const router = createBrowserRouter([
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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
