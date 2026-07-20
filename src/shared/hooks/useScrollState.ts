import { useEffect, useState } from "react";

export type ScrollState = {
  isScrolled: boolean;
  direction: "up" | "down";
};

const SCROLL_THRESHOLD = 12;
const REVEAL_DELTA = 8;

export function useScrollState(): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    direction: "up",
    isScrolled: false,
  });

  useEffect(() => {
    let previousY = window.scrollY;
    let frameId = 0;

    const updateScrollState = () => {
      const currentY = window.scrollY;
      const delta = currentY - previousY;

      setScrollState((current) => {
        const nextDirection =
          delta > REVEAL_DELTA ? "down" : delta < -REVEAL_DELTA ? "up" : current.direction;
        const nextIsScrolled = currentY > SCROLL_THRESHOLD;

        if (current.direction === nextDirection && current.isScrolled === nextIsScrolled) {
          return current;
        }

        return { direction: nextDirection, isScrolled: nextIsScrolled };
      });

      previousY = currentY;
      frameId = 0;
    };

    const handleScroll = () => {
      if (frameId === 0) {
        frameId = window.requestAnimationFrame(updateScrollState);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return scrollState;
}
