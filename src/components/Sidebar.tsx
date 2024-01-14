import { FC } from "react";
import { links } from "../App";

export const Sidebar: FC = () => {

  return (
    <div className="h-full flex-col bg-zinc-600">
      <ul className="h-full">
        {links.map(({ text, href }) => (
          <li className=" p-5">
            <a href={"/tools/" + href}>{text}</a>
          </li>
        ))}
      </ul>

      <p className="justify-self-end">
        If we happen not to have a tool you need, feel free to open an{" "}
        <a href="https://github.com/JR-Koders/Devtools/issues/new">
          GitHub issue
        </a>
        .
      </p>
    </div>
  );
};
