import { useEffect, useRef } from "react";
import { lockScroll, unlockScroll } from "../utils/scrollLock";

export function useScrollLock(isLocked) {
  const wasLocked = useRef(false);

  useEffect(() => {
    if (isLocked && !wasLocked.current) {
      lockScroll();
      wasLocked.current = true;
    }

    if (!isLocked && wasLocked.current) {
      unlockScroll();
      wasLocked.current = false;
    }

    return () => {
      if (wasLocked.current) {
        unlockScroll();
        wasLocked.current = false;
      }
    };
  }, [isLocked]);
}
