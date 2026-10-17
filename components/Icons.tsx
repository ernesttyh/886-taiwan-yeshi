import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 24) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
});

export const IconMenu = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M4 5h16M4 12h16M4 19h10" /></svg>
);
export const IconBurger = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M4 6h16M4 12h16M4 18h16" /></svg>
);
export const IconClose = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
export const IconPin = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
);
export const IconPhone = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>
);
export const IconClock = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const IconTruck = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M3 7h13v9H3zM16 10h3l2 3v3h-5z" /><circle cx="7" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" /></svg>
);
export const IconTrain = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><rect x="5" y="3" width="14" height="15" rx="3" /><path d="M8 18l-2 3M16 18l2 3M5 11h14" /><circle cx="9" cy="14.5" r="1" /><circle cx="15" cy="14.5" r="1" /></svg>
);
export const IconBus = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M4 16V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v9M4 16h16M7 20h2M15 20h2M4 11h16" /></svg>
);
export const IconArrow = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const IconDownload = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M12 4v11M7 10l5 5 5-5M5 20h14" /></svg>
);
export const IconInstagram = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
);
export const IconFacebook = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" /></svg>
);
export const IconTikTok = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5" /><path d="M14 4a5 5 0 0 0 5 5" /></svg>
);
