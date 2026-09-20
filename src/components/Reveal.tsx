import type { ReactNode } from "react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Optional stagger delay in ms, useful for lists of items revealing in sequence. */
  delayMs?: number;
};

/**
 * Wraps children with the `.reveal` fade/rise utility (see index.css) and
 * observes them individually, so lists can reveal item-by-item instead of
 * all at once. Respects prefers-reduced-motion via the CSS in index.css.
 */
export default function Reveal({ children, className = "", delayMs }: RevealProps) {
  const ref = useRevealOnScroll<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
