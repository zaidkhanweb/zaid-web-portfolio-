import type { ReactNode } from "react";

/**
 * Small inline icons used by the hero (quality row + visual labels).
 * All are 24×24, stroke-based and inherit colour from `currentColor`.
 */
function Icon({
  size = 18,
  children,
}: {
  size?: number;
  children: ReactNode;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

type IconProps = { size?: number };

export function BoltIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M13 2.5 5 13.5h6l-1 8 8-11h-6l1-8Z" />
    </Icon>
  );
}

export function PhoneIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 18.5h2" />
    </Icon>
  );
}

export function DevicesIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <rect x="2.5" y="4.5" width="14" height="10.5" rx="1.8" />
      <path d="M6.5 19h6M9.5 15v4" />
      <rect x="17.5" y="9" width="4" height="8" rx="1.2" />
    </Icon>
  );
}

export function StorefrontIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M3.5 9.5 5 4.8a1 1 0 0 1 .9-.6h12.2a1 1 0 0 1 .9.6l1.5 4.7" />
      <path d="M3.5 9.5a2.83 2.83 0 0 0 5.67 0 2.83 2.83 0 0 0 5.66 0 2.83 2.83 0 0 0 5.67 0" />
      <path d="M5 12.6V20h14v-7.4M10 20v-4.5h4V20" />
    </Icon>
  );
}

export function CodeIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5.5l-3 13" />
    </Icon>
  );
}

/** Filled pointer arrow, used as the design-tool cursor in the visual. */
export function CursorIcon({ size = 22 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="drop-shadow-[0_2px_3px_rgba(20,24,31,0.25)]"
    >
      <path
        d="M5.5 3.2v15.6l4.1-3.8 2.7 5.8 2.6-1.1-2.7-5.7h5.6L5.5 3.2Z"
        fill="#14181F"
        stroke="#FFFDF9"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
