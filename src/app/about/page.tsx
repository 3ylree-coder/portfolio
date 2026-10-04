import type { Metadata } from "next";
import { about, site } from "@/lib/site";

export const metadata: Metadata = { title: `About · ${site.name}` };

type Entry = { title: string; place: string; period: string };

function Entries({ heading, items }: { heading: string; items: Entry[] }) {
  return (
    <section>
      <h2 className="font-medium">{heading}</h2>
      <ul className="mt-3 border-t border-line">
        {items.map((e) => (
          <li key={e.title + e.place} className="border-b border-line py-3 grid grid-cols-[1fr_auto] gap-x-5">
            <span>
              {e.title}
              {e.place && <span className="block text-mute">{e.place}</span>}
            </span>
            <span className="text-mute">{e.period}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function List({ heading, items }: { heading: string; items: string[] }) {
  return (
    <section>
      <h2 className="font-medium">{heading}</h2>
      <ul className="mt-3">
        {items.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="px-4 md:px-6">
      <h1 className="pt-16 md:pt-28 text-display font-medium uppercase">About</h1>

      <div className="mt-14 md:mt-24 grid grid-cols-12 gap-x-5 gap-y-14">
        <div className="col-span-12 md:col-span-3">
          <p className="text-[22px] font-medium tracking-[-0.02em]">{site.name}</p>
          <p className="text-mute">{site.role}</p>
          <a href={`mailto:${site.email}`} className="mt-4 block underline underline-offset-4 decoration-1">
            {site.email}
          </a>
        </div>

        <div className="col-span-12 md:col-span-5 space-y-14">
          <section>
            <h2 className="font-medium">About me</h2>
            <div className="mt-3 space-y-4 text-[17px] leading-[1.65]">
              {about.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>
          <Entries heading="Education" items={about.education} />
          <Entries heading="Experience" items={about.experience} />
          <Entries heading="Activities" items={about.activities} />
          <Entries heading="Awards & Honors" items={about.awards} />
        </div>

        <div className="col-span-12 md:col-span-3 md:col-start-10 grid grid-cols-2 md:grid-cols-1 gap-x-5 gap-y-14 content-start">
          <List heading="Skills" items={about.skills} />
          <List heading="Tools" items={about.tools} />
          <List heading="Languages" items={about.languages} />
        </div>
      </div>
    </main>
  );
}
