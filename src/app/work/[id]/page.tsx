import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { asset, getProject, projects } from "@/lib/projects";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const p = getProject(params.id);
  return p ? { title: `${p.title} — ${site.name}`, description: p.summary } : {};
}

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
  const next = projects[(index + 1) % projects.length];
  const images = project.images ?? [];

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

        <dl className="col-span-12 md:col-span-4 lg:col-span-2 grid grid-cols-2 md:grid-cols-1 gap-x-5 gap-y-5 content-start">
          <Meta label="Year">{project.year}</Meta>
          <Meta label="Role">{project.role}</Meta>
          <Meta label="Category">{project.category}</Meta>
          <Meta label="Location">{project.location}</Meta>
          {project.award && <Meta label="Award">{project.award}</Meta>}
        </dl>

        <div className="col-span-12 md:col-span-8 lg:col-span-4">
          <p className="text-mute text-[13px]">Overview</p>
          <p className="mt-0.5 text-[17px] leading-[1.6]">{project.summary}</p>

          <ol className="mt-8 border-t border-line">
            {project.points.map((point, i) => (
              <li key={i} className="grid grid-cols-[2.5rem_1fr] border-b border-line py-3 leading-[1.6]">
                <span className="text-mute">{String(i + 1).padStart(2, "0")}</span>
                <span>{point}</span>
              </li>
            ))}
          </ol>

          <dl className="mt-8 grid grid-cols-2 gap-x-5 gap-y-5">
            <Meta label="Team">
              {project.team.map((m) => (
                <span key={m} className="block">{m}</span>
              ))}
            </Meta>
            {project.tools.length > 0 && (
              <Meta label="Methods & Tools">
                {project.tools.map((t) => (
                  <span key={t} className="block">{t}</span>
                ))}
              </Meta>
            )}
          </dl>
        </div>
      </section>

      {images.length > 0 && (
        <section className="mt-20 md:mt-32 grid grid-cols-12 gap-x-5 gap-y-10">
          {images.map((src, i) => (
            <figure
              key={src}
              className={
                images.length === 1 || i === 0
                  ? "col-span-12"
                  : "col-span-12 md:col-span-6"
              }
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(src)} alt={`${project.title} ${i + 1}`} className="w-full h-auto block" loading={i === 0 ? "eager" : "lazy"} />
              <figcaption className="mt-2 text-[22px] text-mute">({String(i + 1).padStart(2, "0")})</figcaption>
            </figure>
          ))}
        </section>
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
