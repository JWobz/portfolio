"use client";

import { useEffect, useState } from "react";
import ScrambleText from "./ScrambleText";

export default function RoleCycler({
  roles,
  paused,
}: {
  roles: string[];
  paused: boolean;
}) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [roles.length, paused]);
  return <ScrambleText text={roles[index]} paused={paused} />;
}
