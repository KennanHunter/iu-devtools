import { FC, useEffect, useState } from "react";

export const UserAgent: FC = () => {
  const [userAgent, setUserAgent] = useState("");

  useEffect(() => {
    if (!window) return;

    setUserAgent(window.navigator.userAgent);
  });
  return (
    <div>
      <h1>Here's your user-agent!</h1>

      <pre>{userAgent}</pre>
    </div>
  );
};
