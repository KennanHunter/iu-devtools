import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconHammer } from "@tabler/icons-react";
import { FC } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export const Layout: FC = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header
        p={"sm"}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "left",
        }}
      >
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Link to={"/"}>
          <IconHammer size={30} />
        </Link>
      </AppShell.Header>

      <Sidebar />

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
