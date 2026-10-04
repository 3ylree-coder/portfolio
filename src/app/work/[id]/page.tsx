import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseOrder, caseStudies, type Img, type Section } from "@/lib/case-studies";
import { asset, getProject, projects } from "@/lib/projects";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const p = getProject(params.id);
  return p ? { title: `${p.title} · ${site.name}`, description: p.summary } : {};
}

const pad = (n: number) => String(n).padStart(2, "0");

function Figure({ src, alt, n, hero, caption }: { src: string; alt: string; n: number; hero?: boolean; caption?: string }) {
  return (
    <figure>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(src)}
        alt={alt}
        className={hero ? "block w-auto max-w-full max-h-[85vh]" : "block w-full h-auto"}
        loading={hero ? "eager" : "lazy"}
      />
      <figcaption className="mt-3 grid grid-cols-[2.5rem_1fr] items-baseline text-mute text-[14px]">
        <span>({pad(n)})</span>
        {caption && <span className="leading-[1.5]">{caption}</span>}
      </figcaption>
    </figure>
  );
}

// "라벨: 설명" 형태의 문장은 앞의 짧은 라벨을 강조
function Labeled({ text }: { text: string }) {
  const i = text.indexOf(": ");
  if (i < 0 || i > 16) return <>{text}</>;
  return (
    <>
      <span className="font-semibold">{text.slice(0, i)}</span>
      {text.slice(i)}
    </>
  );
}

function Paragraph({ text }: { text: string }) {
  return (
    <p>
      <Labeled text={text} />
    </p>
  );
}


const statCols: Record<number, string> = { 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4", 5: "lg:grid-cols-5" };

function Blocks({ sec }: { sec: Section }) {
  return (
    <>
      {sec.callouts && (
        <dl className="grid gap-3 mb-8">
          {sec.callouts.map((c) => (
            <div key={c.label + c.text} className="grid grid-cols-[4.5rem_1fr] gap-4 border-l-2 border-line bg-white/60 px-5 py-4">
              <dt className="text-[13px] font-semibold pt-[3px]">{c.label}</dt>
              <dd className="text-[16px] leading-[1.6]">{c.text}</dd>
            </div>
          ))}
        </dl>
      )}
      {sec.stats && (
        <dl className={`grid grid-cols-2 ${statCols[sec.stats.length] ?? "lg:grid-cols-3"} gap-x-5 gap-y-8`}>
          {sec.stats.map((st) => (
            <div key={st.label} className="border-t border-line pt-3">
              <dt className="text-[40px] md:text-[52px] font-medium leading-none tracking-[-0.04em]">{st.value}</dt>
              <dd className="mt-3 text-[14px] leading-[1.5] text-mute">{st.label}</dd>
            </div>
          ))}
        </dl>
      )}
      {sec.options && (
        <ol className="grid md:grid-cols-3 gap-3">
          {sec.options.map((o, i) => (
            <li
              key={o.title}
              className={`p-5 min-h-[180px] flex flex-col ${o.chosen ? "bg-ink text-paper" : "border border-black/15 text-mute"}`}
            >
              <span className="flex justify-between text-[13px]">
                <span>{pad(i + 1)}</span>
                {o.chosen && <span>Selected</span>}
              </span>
              <span className={`mt-auto pt-8 text-[19px] font-medium leading-snug ${o.chosen ? "" : "text-ink"}`}>{o.title}</span>
              <span className="mt-2 text-[14px] leading-[1.55]">{o.desc}</span>
            </li>
          ))}
        </ol>
      )}
      {sec.flow && (
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          {sec.flow.map((col, i) => (
            <div key={i} className="contents">
              {i > 0 && <span className="self-center text-[22px] text-mute md:px-1 rotate-90 md:rotate-0">⇄</span>}
              <div className="flex-1 flex flex-col gap-3">
                {col.map((b) => (
                  <div key={b.title} className={`px-5 py-5 ${b.main ? "bg-ink text-paper" : "border border-black/15 bg-white/60"}`}>
                    <p className="font-medium">{b.title}</p>
                    {b.note && <p className={`mt-1 text-[14px] ${b.main ? "opacity-70" : "text-mute"}`}>{b.note}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {sec.quotes && (
        <div className="grid md:grid-cols-3 gap-x-5 gap-y-8">
          {sec.quotes.map((q) => (
            <blockquote key={q} className="border-t border-line pt-4 text-[20px] md:text-[22px] leading-[1.45] tracking-[-0.02em]">
              “{q}”
            </blockquote>
          ))}
        </div>
      )}
    </>
  );
}

const imgSrc = (im: Img) => (typeof im === "string" ? im : im.src);
const imgCaption = (im: Img) => (typeof im === "string" ? undefined : im.caption);

function Meta({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-mute text-[13px]">{label}</dt>
      <dd className="mt-0.5">{children}</dd>
    </div>
  );
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProject(params.id);
  if (!project) notFound();

  const index = projects.indexOf(project);
  // 케이스 스터디끼리는 홈과 같은 순서로, 나머지 프로젝트는 목록 순서로 이어짐
  const ci = caseOrder.indexOf(project.id);
  const next =
    ci >= 0
      ? getProject(caseOrder[(ci + 1) % caseOrder.length])!
      : projects[(index + 1) % projects.length];
  const images = project.images ?? [];
  const study = caseStudies[project.id];
  let fig = 0;

  return (
    <main className="px-4 md:px-6">
      <section className="pt-16 md:pt-28 grid grid-cols-12 gap-x-5 gap-y-10">
        <div className="col-span-12 lg:col-span-6">
          <Link href="/#work" className="text-[28px] leading-none text-mute hover:text-ink transition-colors">
            ←
          </Link>
          <h1 className="mt-4 text-title font-medium">{project.title}</h1>
          {project.subtitle && <p className="mt-3 text-[19px] text-mute">{project.subtitle}</p>}
        </div>

        <div className="col-span-12 lg:col-span-6">
          <p className="text-[17px] md:text-[19px] leading-[1.6] tracking-[-0.01em]">{project.summary}</p>

          <dl className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-5 text-[14px]">
            <Meta label={study ? "Period" : "Year"}>{study ? study.glance.period : project.year}</Meta>
            {(study?.glance.role || project.role) && <Meta label="Role">{study?.glance.role || project.role}</Meta>}
            <Meta label="With">{study ? study.glance.team : project.location}</Meta>
            {project.award && <Meta label="Award">{project.award}</Meta>}
            {project.links && (
              <Meta label="Links">
                {project.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="block underline underline-offset-4 decoration-1 hover:text-mute">
                    {l.label} ↗
                  </a>
                ))}
              </Meta>
            )}
          </dl>

          {!study && project.points.length > 0 && (
            <ol className="mt-10 border-t border-line">
              {project.points.map((point, i) => (
                <li key={i} className="grid grid-cols-[2.5rem_1fr] border-b border-line py-3 leading-[1.6]">
                  <span className="text-mute">{pad(i + 1)}</span>
                  <span><Labeled text={point} /></span>
                </li>
              ))}
            </ol>
          )}

          {!study && project.testPlan && (
            <div className="mt-8 border border-black/15 p-5 text-[14px] leading-[1.6]">
              <p className="font-semibold">검증 계획 <span className="font-normal text-mute">아직 진행하지 않은 테스트입니다</span></p>
              <p className="mt-2">{project.testPlan.hypothesis}</p>
              <p className="mt-2 text-mute">{project.testPlan.method} · {project.testPlan.metrics.join(" · ")}</p>
            </div>
          )}
        </div>
      </section>

      {study ? (
        <>
          <div className="mt-20 md:mt-32">
            <Figure src={study.cover} alt={project.title} n={++fig} hero caption={study.coverCaption} />
          </div>
          {study.sections.map((sec, i) => (
            <section key={sec.label} className="mt-24 md:mt-36 border-t border-line pt-5 grid grid-cols-12 gap-x-5 gap-y-6">
              <div className="col-span-12 md:col-span-3">
                <p>
                  <span className="text-mute">{pad(i + 1)}</span>&ensp;{sec.label}
                </p>
              </div>
              <div className="col-span-12 md:col-span-9 lg:col-span-6">
                <h2 className="text-[24px] md:text-[32px] font-medium leading-[1.3] tracking-[-0.03em]">{sec.title}</h2>
                <div className={sec.body.length ? "mt-6 space-y-4 text-[16px] leading-[1.75]" : "hidden"}>
                  {sec.body.map((t) => (
                    <Paragraph key={t} text={t} />
                  ))}
                </div>
              </div>
              {(sec.callouts || sec.stats || sec.options || sec.flow || sec.quotes) && (
                <div className="col-span-12 md:col-start-4 md:col-span-9 mt-6">
                  <Blocks sec={sec} />
                </div>
              )}
              {sec.images && (
                <div className="col-span-12 md:col-start-4 md:col-span-9 mt-6 grid gap-y-14">
                  {sec.images.map((im) => (
                    <Figure
                      key={imgSrc(im)}
                      src={imgSrc(im)}
                      caption={imgCaption(im)}
                      alt={imgCaption(im) ?? `${project.title} · ${sec.label}`}
                      n={++fig}
                    />
                  ))}
                </div>
              )}
            </section>
          ))}
        </>
      ) : (
        images.length > 0 && (
          <section className="mt-20 md:mt-32 grid grid-cols-12 gap-x-5 gap-y-10 items-start">
            {images.map((src, i) => (
              <div key={src} className={images.length === 1 || i === 0 ? "col-span-12" : "col-span-12 md:col-span-6"}>
                <Figure src={src} alt={`${project.title} ${i + 1}`} n={i + 1} hero={i === 0} />
              </div>
            ))}
          </section>
        )
      )}

      <Link
        href={`/work/${next.id}/`}
        className="group mt-28 md:mt-40 border-t border-line pt-5 grid grid-cols-12 gap-x-5"
      >
        <span className="col-span-12 md:col-span-3 text-mute">Next project</span>
        <span className="col-span-12 md:col-span-9 mt-2 md:mt-0 text-title font-medium group-hover:text-mute transition-colors">
          {next.title} →
        </span>
      </Link>
    </main>
  );
}
