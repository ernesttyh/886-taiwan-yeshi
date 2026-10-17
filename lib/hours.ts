import { site } from "./site";

/** Minutes since midnight in the restaurant's timezone, plus a short weekday, for a given instant. */
export function localNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-SG", {
    timeZone: site.timezone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    weekday: "short",
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const hour = Number(get("hour")) % 24;
  const minute = Number(get("minute"));
  return { minutes: hour * 60 + minute, weekday: get("weekday") };
}

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

export type OpenState =
  | { status: "open"; closesAt: string; lastOrderSoon: boolean }
  | { status: "closed"; opensAt: string };

/** Open / closed right now. The restaurant keeps the same hours every day. */
export function openState(date = new Date()): OpenState {
  const { minutes } = localNow(date);
  const open = toMinutes(site.hours.open);
  const close = toMinutes(site.hours.close);
  const lastOrder = toMinutes(site.hours.lastOrder);
  if (minutes >= open && minutes < close) {
    return { status: "open", closesAt: fmt(site.hours.close), lastOrderSoon: minutes >= lastOrder };
  }
  return { status: "closed", opensAt: fmt(site.hours.open) };
}

export function fmt(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, "0")} ${suffix}`;
}
