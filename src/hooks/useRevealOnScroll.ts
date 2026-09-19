import { useEffect, useRef } from "react";

/**
 * Adds an `is-visible` class to the element once it scrolls into view.
 * Paired with the `.reveal` utility class in index.css. Does nothing
 * disruptive for users who prefer reduced motion, since that utility
 * is neutralized by a prefers-reduced-motion media query.
 */
export function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}
