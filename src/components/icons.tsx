import type { JSX } from "react";

const paths: Record<string, JSX.Element> = {
  api: <><path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 5l-2 14" /></>,
  db: <><ellipse cx="12" cy="5.5" rx="7" ry="2.8" /><path d="M5 5.5v6c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-6M5 11.5v6c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-6" /></>,
  lock: <><rect x="5" y="10.5" width="14" height="9.5" rx="2.5" /><path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7" /></>,
  ai: <><path d="M12 3l1.8 4.6L18.5 9l-4.7 1.4L12 15l-1.8-4.6L5.5 9l4.7-1.4z" /><path d="M18.5 14.5l.9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9z" /></>,
  mic: <><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" /></>,
  etl: <><path d="M4 6h9M4 12h13M4 18h7" /><path d="M17 6l3 3-3 3" /></>,
  ship: <><rect x="3" y="10" width="8" height="8" rx="1.5" /><rect x="13" y="10" width="8" height="8" rx="1.5" /><rect x="8" y="2.5" width="8" height="8" rx="1.5" /></>,
  ui: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M3 8h18M8 21h8" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3.5 7l8.5 6 8.5-6" /></>,
  phone: <><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10.5V17M8 7.2v.3M12 17v-3.8a2.4 2.4 0 0 1 4.8 0V17" /></>,
  pin: <><path d="M12 21s-6.5-5.4-6.5-10.3a6.5 6.5 0 0 1 13 0C18.5 15.6 12 21 12 21z" /><circle cx="12" cy="10.5" r="2.4" /></>,
  doc: <><path d="M7 3h7l5 5v13a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 6 21V4.5A1.5 1.5 0 0 1 7.5 3z" /><path d="M14 3v5h5M9.5 12.5h5M9.5 16h5" /></>,
  arrow: <><path d="M5 12h13M13 6l6 6-6 6" /></>,
  ext: <><path d="M14 4h6v6M20 4l-9 9M18 13.5V19a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 19V7.5A1.5 1.5 0 0 1 6 6h4.5" /></>,
};

export function Icon({ name, size = 20 }: { name: string; size?: number }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
