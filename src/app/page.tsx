import Link from "next/link";
import GapTicker from "@/components/GapTicker";
import { caseOrder, caseStudies } from "@/lib/case-studies";
import { archive, asset, projects } from "@/lib/projects";
import { site } from "@/lib/site";

const featured = projects
  .filter((p) => caseStudies[p.id])
  .sort((a, b) => caseOrder.indexOf(a.id) - caseOrder.indexOf(b.id));
const others = projects.filter((p) => !caseStudies[p.id]);
const years = projects.map((p) => Number(p.year));
const range = `${Math.min(...years)} ~ ${Math.max(...years)}`;

export default function Home() {
  return (
    <main className="px-4 md:px-6">
      <section className="pt-20 md:pt-32">
        <h1 className="text-[clamp(1.875rem,3.4vw,3.25rem)] font-normal leading-[1.32] tracking-[-0.035em] whitespace-pre-line">
          <GapTicker />,
          <br className="md:hidden" />
          <span className="hidden md:inline"> </span>
          {site.headline}
        </h1>
        <p className="mt-8 md:mt-10 text-[14px] text-mute">{site.currently}</p>
      </section>

      <section id="work" className="mt-20 md:mt-28">
        <p className="pb-3 border-b border-line">
          Selected work <span className="text-mute">({featured.length})</span>
        </p>
        <ul className="mt-5 grid md:grid-cols-2 gap-x-5 gap-y-16">
          {featured.map((p) => (
            <li key={p.id}>
              <Link href={`/work/${p.id}/`} className="group block">
                <div className="aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(caseStudies[p.id].cover)}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h2 className="text-[22px] md:text-[26px] font-medium tracking-[-0.03em] group-hover:text-mute transition-colors">{p.title}</h2>
                  <span className="shrink-0 text-mute">{caseStudies[p.id].gap}</span>
                </div>
                <p className="mt-1 text-mute">{p.subtitle}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-28 md:mt-44">
        <div className="flex items-end justify-between pb-3">
          <p>
            Other work <span className="text-mute">({others.length})</span>
          </p>
          <p className="text-mute">{range}</p>
        </div>

        <ul className="group/list border-t border-line">
          {others.map((p, i) => (
            <li key={p.id} className="border-b border-line">
              <Link
                href={`/work/${p.id}/`}
                className="group grid grid-cols-12 gap-x-5 py-4 items-baseline transition-colors duration-200 group-hover/list:text-mute hover:!text-ink"
              >
                <span className="col-span-3 md:col-span-1 text-mute">{p.year}</span>
                <span className="col-span-9 md:col-span-4 text-[19px] md:text-[22px] font-medium tracking-[-0.03em]">{p.title}</span>
                <span className="col-span-9 col-start-4 md:col-span-6 md:col-start-auto text-mute">{p.subtitle}</span>
                <span className="hidden md:block col-span-1 justify-self-end opacity-0 -translate-x-2 transition duration-200 group-hover:opacity-100 group-hover:translate-x-0">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-28 md:mt-40">
        <p className="pb-3">
          Archive <span className="text-mute">({archive.length})</span>
        </p>
        <ul className="border-t border-line">
          {archive.map((a) => (
            <li key={a.title} className="border-b border-line grid grid-cols-12 gap-x-5 py-3">
              <span className="col-span-3 md:col-span-2">{a.year}</span>
              <span className="col-span-9 md:col-span-5 md:border-l md:border-line md:pl-5">{a.title}</span>
              <span className="col-span-9 col-start-4 md:col-span-5 md:col-start-auto text-mute">{a.note}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
