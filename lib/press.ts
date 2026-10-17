/**
 * Media coverage shown in the "As featured in" section on the home page and emitted as
 * `subjectOf` on the Restaurant schema. Add new features at the top. `summary` is written in our
 * own words (never copy the article). Dates are ISO (YYYY-MM-DD).
 */

export interface PressItem {
  id: string;
  outlet: string;
  /** Short form for the outlet strip */
  outletShort?: string;
  title: string;
  url: string;
  date: string;
  author?: string;
  kind: "review" | "news" | "guide";
  summary: string;
}

export const press: PressItem[] = [
  {
    id: "honeycombers-review",
    outlet: "The Honeycombers",
    outletShort: "Honeycombers",
    title: "886 Taiwan Ye Shi Review: Taiwanese Food at Changi Airport",
    url: "https://thehoneycombers.com/singapore/886-taiwan-ye-shi-restaurant-review-singapore/",
    date: "2026-08-19",
    author: "Sufyan Saad",
    kind: "review",
    summary: "A welcome addition to Singapore's short list of Taiwanese restaurants — the XO fried rice, crispy xiao long bao, trio bowl set and soy pudding get the nod.",
  },
  {
    id: "greatnewplaces",
    outlet: "Great New Places",
    title: "886 Taiwan Ye Shi",
    url: "https://greatnewplaces.com/culinary/886-taiwan-ye-shi/",
    date: "2026-08-05",
    kind: "news",
    summary: "Casual Taiwanese dining in a railway-themed room inspired by Shifen station, with noodle soups, rice bowls, fried snacks and bubble tea on a pork-free menu.",
  },
  {
    id: "eatbook-new",
    outlet: "Eatbook",
    title: "New Taiwanese Restaurant At T3 With Night Market Vibes — Lu Rou Fan, Fried XLB And More",
    url: "https://eatbook.sg/886-taiwan-ye-shi/",
    date: "2026-07-27",
    author: "Faith Joan Chua",
    kind: "review",
    summary: "Night-market decor under the Skytrain line, with high marks for the oyster mee sua and lu rou fan in the trio bowl set, and the soy pudding to finish.",
  },
  {
    id: "hungrygowhere",
    outlet: "HungryGoWhere",
    title: "886 Taiwan Ye Shi recreates Taiwan's Shifen at Changi Airport with affordable Taiwanese fare",
    url: "https://hungrygowhere.com/food-news/886-taiwan-ye-shi-changi-airport/",
    date: "2026-07-22",
    author: "Jasmine Ng",
    kind: "news",
    summary: "Shifen's railway and night-market scene rebuilt in Basement 2 — vintage train cabin, tracks, a virtual sky-lantern wish, and most dishes under S$17.",
  },
  {
    id: "middleclass-review",
    outlet: "Middleclass.sg",
    outletShort: "Middleclass",
    title: "886 Taiwan Ye Shi Review: Railway-Themed Taiwanese Eatery In Changi Airport T3",
    url: "https://middleclass.sg/treats/886-taiwan-ye-shi-review/",
    date: "2026-07-22",
    author: "Rachel Bong",
    kind: "review",
    summary: "A practical, affordable airport meal; the ginger-rich Jiang Mu Ji La Mian is named the standout, with the trio bowl set and XO fried rice close behind.",
  },
  {
    id: "sethlui-opening",
    outlet: "Seth Lui",
    title: "New in town: 886 Taiwan Ye Shi — free noodles for the first 886 customers at Changi Airport",
    url: "https://sethlui.com/886-taiwan-ye-shi-opens-singapore-jul-2026/",
    date: "2026-07-16",
    author: "Vivian Lim",
    kind: "news",
    summary: "Opening coverage of the Terminal 3 launch: Jiang Mu Ji La Mian, Signature XO Fried Rice and the Trio Bowl Set, plus lanterns and free bowls for early birds.",
  },
];

/**
 * Outlets for the strip and the card badges. Drop each publication's OFFICIAL logo file (from its media kit)
 * into /public/press/ under the `logo` filename below — SVG preferred, or a PNG at 2× (about 400×120).
 * If the file is missing the outlet name renders as text instead, so the site never shows a broken image.
 */
export interface Outlet {
  name: string;
  short?: string;
  url: string;
  /** path under /public, e.g. /press/eatbook.svg */
  logo: string;
  /** logo box aspect for layout (width / height) — adjust to the file you receive */
  aspect?: number;
}

export const outlets: Outlet[] = [
  { name: "HungryGoWhere", url: "https://hungrygowhere.com", logo: "/press/hungrygowhere.png", aspect: 2.4 },
  { name: "Eatbook", url: "https://eatbook.sg", logo: "/press/eatbook.svg", aspect: 6.56 },
  { name: "Seth Lui", url: "https://sethlui.com", logo: "/press/sethlui.svg", aspect: 3.4 },
  { name: "The Honeycombers", short: "Honeycombers", url: "https://thehoneycombers.com/singapore/", logo: "/press/honeycombers.svg", aspect: 13.5 },
  { name: "Middleclass.sg", short: "Middleclass", url: "https://middleclass.sg", logo: "/press/middleclass.png", aspect: 8.15 },
  { name: "Yahoo Life", url: "https://sg.style.yahoo.com", logo: "/press/yahoo-life.svg", aspect: 5.1 },
  { name: "Great New Places", url: "https://greatnewplaces.com", logo: "/press/greatnewplaces.png", aspect: 1.63 },
];

export const outletByName = (name: string) => outlets.find((o) => o.name === name);

export function formatPressDate(iso: string) {
  return new Date(`${iso}T00:00:00+08:00`).toLocaleDateString("en-SG", { day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Singapore" });
}
