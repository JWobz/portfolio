import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  document.addEventListener("visibilitychange", callback);
  return () => {
    document.removeEventListener("visibilitychange", callback);
  };
}

function getSnapshot() {
  return document.hidden;
}

function getServerSnapshot() {
  return false;
}

export function usePageHidden() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
