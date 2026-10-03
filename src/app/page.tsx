import Link from "next/link";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

const years = projects.map((p) => Number(p.year));
const range = `${Math.min(...years)}—${Math.max(...years)}`;

export default function Home() {
  return (
    <main className="px-4 md:px-6">
      <section className="pt-16 md:pt-28 text-display font-medium uppercase">
        <p className="flex justify-between">
          <span>{site.name}</span>
          <span>Portfolio</span>
        </p>
        <p className="flex justify-between">
          {site.role.split(" ").map((w) => (
            <span key={w}>{w}</span>
          ))}
        </p>
      </section>

      <section className="mt-14 md:mt-24 grid grid-cols-12 gap-x-5 gap-y-8">
        <dl className="col-span-6 md:col-span-3">
          <dt className="text-mute">Currently</dt>
          <dd>{site.currently}</dd>
        </dl>
        <dl className="col-span-6 md:col-span-3">
          <dt className="text-mute">Focus</dt>
          <dd>{site.focus}</dd>
        </dl>
        <p className="col-span-12 md:col-span-6 text-[19px] md:text-[22px] leading-[1.5] tracking-[-0.02em]">
          {site.intro}
        </p>
      </section>

      <section id="work" className="mt-28 md:mt-44">
        <div className="flex items-end justify-between pb-3">
          <p>
            Selected work <span className="text-mute">({projects.length})</span>
          </p>
          <p className="text-title font-medium">{range}</p>
        </div>

        <ul className="group/list border-t border-line">
          {projects.map((p, i) => (
            <li key={p.id} className="border-b border-line">
              <Link
                href={`/work/${p.id}/`}
                className="group grid grid-cols-12 gap-x-5 py-5 transition-colors duration-200 group-hover/list:text-mute hover:!text-ink"
              >
                <div className="col-span-3 md:col-span-2">
                  <p className="text-[20px] md:text-[24px] font-medium leading-none">{p.year}</p>
                  <p className="mt-1 text-mute">{String(i + 1).padStart(2, "0")}</p>
                </div>

                <div className="col-span-9 md:col-span-5 md:border-l md:border-line md:pl-5 flex flex-col">
                  <h2 className="text-[22px] md:text-[28px] font-medium leading-[1.15] tracking-[-0.03em]">
                    {p.title}
                  </h2>
                  {p.subtitle && <p className="mt-1 text-mute">{p.subtitle}</p>}
                  <ul className="mt-5 md:mt-auto md:pt-8 flex flex-wrap gap-1">
                    {p.tags.map((t) => (
                      <li key={t} className="border border-current rounded-[3px] px-1.5 text-[11px] leading-[18px]">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-span-9 col-start-4 md:col-span-4 md:col-start-auto mt-5 md:mt-0 flex flex-col justify-between gap-6 text-[14px] leading-[1.55]">
                  <p>{p.summary}</p>
                  <p className="text-[13px] text-mute">
                    {p.award ? `${p.award} · ${p.location}` : p.location}
                  </p>
                </div>

                <span className="hidden md:block col-span-1 justify-self-end text-[22px] leading-none opacity-0 -translate-x-2 transition duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
