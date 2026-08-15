import type { LinkId } from "../data/links";

type IconSymbolProps = {
  id: LinkId;
  className?: string;
};

export function IconSymbol({ id, className = "" }: IconSymbolProps) {
  const common = {
    className: `symbol ${className}`.trim(),
    viewBox: "0 0 64 64",
    role: "img",
    "aria-hidden": true,
  } as const;

  if (id === "course") {
    return (
      <svg {...common}>
        <path
          d="M15 25h34v23H15z"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path
          d="M23 25v-5h18v5M24 33h9M24 41h15M43 34h7M43 42h7"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="47" cy="25" r="4" fill="currentColor" />
        <path
          d="M18 54c8-5 20-5 28 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (id === "whatsapp") {
    return (
      <svg {...common}>
        <path
          d="M32 8.5c-12.9 0-23.3 10-23.3 22.4 0 4.2 1.2 8.1 3.4 11.5L9 55.5l13.8-3.1A24.5 24.5 0 0 0 32 54.3c12.9 0 23.3-10 23.3-22.4S44.9 8.5 32 8.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.2 21.7c-.8.1-2.2.7-2.8 2.7-.5 1.8-.3 5.3 4.3 10.2 5 5.4 9.8 7.2 12.7 7.4 2.3.2 4.4-1.2 5.1-2.7.5-1.1.4-2.1-.2-2.6l-5.4-2.9c-.8-.4-1.7-.2-2.2.5l-1.6 2c-.4.5-1.2.6-1.8.3-1.2-.6-3-1.8-4.8-3.7-1.7-1.8-2.7-3.4-3.2-4.5-.3-.6-.1-1.3.4-1.7l2-1.5c.7-.5.9-1.4.5-2.1l-2.4-4.4c-.1-.4-.3-.7-.6-1Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (id === "instagram") {
    return (
      <svg {...common}>
        <rect x="14" y="14" width="36" height="36" rx="11" fill="none" stroke="currentColor" strokeWidth="5" />
        <circle cx="32" cy="32" r="9" fill="none" stroke="currentColor" strokeWidth="5" />
        <circle cx="43" cy="21" r="3.2" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path
        d="M32 58s18-17.4 18-32.2C50 15.7 42 8 32 8s-18 7.7-18 17.8C14 40.6 32 58 32 58Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="26" r="7" fill="none" stroke="currentColor" strokeWidth="5.5" />
    </svg>
  );
}
