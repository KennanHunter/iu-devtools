import { AppShell, ScrollArea } from "@mantine/core";
import { FC } from "react";
import { links } from "../App";

export const Sidebar: FC = () => {
  return (
    <AppShell.Navbar p="md">
      <ScrollArea scrollbars={"y"} className="flex-grow">
        <ul>
          {links.map(({ text, href }) => (
            <>
              <li className="p-5">
                <a href={"/#/tools/" + href}>{text}</a>
              </li>
            </>
          ))}
        </ul>
      </ScrollArea>

      <p className="p-5 border-t-4 justify-self-end">
        If we happen not to have a tool you need, feel free to open an{" "}
        <a href="https://github.com/JR-Koders/Devtools/issues/new">
          GitHub issue
        </a>
        .
      </p>
    </AppShell.Navbar>
  );
};
