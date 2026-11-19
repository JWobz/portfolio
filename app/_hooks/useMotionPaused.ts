import { useSyncExternalStore } from "react";

const KEY = "motion";
const EVENT = "motion-change";

function getSnapshot() {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved) return saved === "paused";
  } catch {}
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot() {
  return false;
}

function subscribe(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  window.addEventListener(EVENT, callback);
  return () => {
    mq.removeEventListener("change", callback);
    window.removeEventListener(EVENT, callback);
  };
}

function save(paused: boolean) {
  try {
    localStorage.setItem(KEY, paused ? "paused" : "playing");
  } catch {}
  window.dispatchEvent(new Event(EVENT));
}

export function useMotionPaused() {
  const paused = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const toggle = () => save(!paused);
  return [paused, toggle] as const;
}
