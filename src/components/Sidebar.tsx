import { AppShell, Paper, ScrollArea, NavLink, Divider } from "@mantine/core";
import { FC } from "react";
import { links } from "../App";
import { Link } from "react-router-dom";

export const Sidebar: FC = () => {
  return (
    <AppShell.Navbar h={"100%"} p="md">
      <ScrollArea scrollbars={"y"} h={"80%"} className="flex-grow">
        <ul style={{ all: "unset" }}>
          {links.map(({ text, href, icon }) => (
            <NavLink
              component={Link}
              leftSection={icon ?? <></>}
              to={"/tools/" + href}
              key={href}
              label={text}
            />
          ))}
        </ul>
      </ScrollArea>

      <Paper>
        <Divider py={"md"} />
        If we happen not to have a tool you need, feel free to open an{" "}
        <Link to="https://github.com/JR-Koders/Devtools/issues/new">
          GitHub issue
        </Link>
        .
      </Paper>
    </AppShell.Navbar>
  );
};
