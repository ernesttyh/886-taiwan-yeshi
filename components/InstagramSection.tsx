import Image from "next/image";
import data from "@/lib/instagram.json";
import { site } from "@/lib/site";
import { IconInstagram } from "./Icons";
import { InstagramScroller } from "./InstagramScroller";

type Post = { id: string; url: string; kind: "reel" | "carousel" | "photo"; date: string; caption: string; author?: string; image: string };

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-SG", { day: "numeric", month: "short", timeZone: "Asia/Singapore" });

/** Latest Instagram posts — swipe/scroll left-right, each card links to the post. Data: lib/instagram.json. */
export function InstagramSection() {
  const posts = (data.posts ?? []) as Post[];
  if (posts.length === 0) return null;
  const handle = site.social.instagramHandle.replace("@", "");
  return (
    <section aria-labelledby="social-h" className="py-11 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 sm:px-6 md:gap-7">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" lang="zh-Hans" className="font-brush text-5xl leading-none text-brand-red sm:text-6xl">新</span>
            <h2 id="social-h" className="display text-[40px] leading-none text-brand-navy md:text-[52px]">Fresh from the kitchen</h2>
          </div>
          <a href={site.social.instagram} target="_blank" rel="noopener" className="btn btn-red self-start md:self-auto">
            <IconInstagram size={20} /> Follow {site.social.instagramHandle}
          </a>
        </div>

        <InstagramScroller label="Latest Instagram posts">
          {posts.map((p) => {
            const collab = p.author && p.author !== handle;
            return (
              <li key={p.id} className="w-[72vw] max-w-[280px] shrink-0 snap-start sm:w-[260px]">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener"
                  aria-label={`${p.kind === "reel" ? "Reel" : "Post"} from ${fmt(p.date)}: ${p.caption} (opens Instagram)`}
                  className="group flex h-full flex-col overflow-hidden rounded-card border-2 border-brand-sand bg-white text-brand-ink no-underline transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-brand-sand">
                    <Image src={p.image} alt="" fill sizes="280px" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                    {p.kind !== "photo" && (
                      <span className="absolute right-2.5 top-2.5 rounded-full bg-brand-ink/70 px-2.5 py-1 text-xs font-semibold text-white">
                        {p.kind === "reel" ? "▶ Reel" : "❐ Carousel"}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col gap-1.5 p-3.5">
                    <div className="flex items-center justify-between gap-2 text-[12px] font-semibold text-brand-muted">
                      <span className="truncate">{collab ? `with @${p.author}` : `@${handle}`}</span>
                      <time dateTime={p.date} className="shrink-0">{fmt(p.date)}</time>
                    </div>
                    <p className="line-clamp-3 text-[14px] leading-snug">{p.caption}</p>
                  </div>
                </a>
              </li>
            );
          })}
        </InstagramScroller>
      </div>
    </section>
  );
}
