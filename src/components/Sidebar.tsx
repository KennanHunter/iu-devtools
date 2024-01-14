import { FC } from "react";

export const Sidebar: FC = () => {
  return (
    <div className="">
      <ul>
        <li>
          <a href="./tools/case-converter.html">
            Case converter (lower, upper, title, ...)
          </a>
        </li>
        <li>
          <a href="./tools/lorem-ipsum.html">lorem ipsum generator</a>
        </li>
        <li>
          <a href="./tools/string-reverser.html">String reverser</a>
        </li>
        <li>hex/rgb converter</li>
        <li>
          <a href="./tools/acronym-generator.html">Acronyms creator</a>
        </li>
        <li>
          <a href="./tools/password-generator.html">Password generator</a>
        </li>
        <li>
          <a>Hash generator</a>
        </li>
        <li>
          <a>Random number generator</a>
        </li>
        <li>
          <a>Character/word counter</a>
        </li>
        <li>
          <a href="./tools/user-agent.html">User-agent detector</a>
        </li>
        <li>
          <a>Timer</a>
        </li>
        <li>
          <a href="./tools/stopwatch.html">Stopwatch</a>
        </li>
      </ul>

      <p>
        If we happen not to have a tool you need, feel free to open an{" "}
        <a href="https://github.com/JR-Koders/Devtools/issues/new">
          GitHub issue
        </a>
        .
      </p>
    </div>
  );
};
