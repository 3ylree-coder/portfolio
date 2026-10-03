import { site } from "@/lib/site";

export default function Footer() {
  const links = site.links.filter((l) => l.href);

  return (
    <footer className="mt-32 md:mt-48 px-4 md:px-6 pb-6">
      <div className="border-t border-line pt-5 grid grid-cols-12 gap-x-5 gap-y-8">
        <p className="col-span-12 md:col-span-3 text-mute">Contact</p>
        <div className="col-span-12 md:col-span-9">
          <a
            href={`mailto:${site.email}`}
            className="text-title font-medium hover:text-mute transition-colors break-all"
          >
            {site.email}
          </a>
          {links.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-1">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noreferrer" className="hover:text-mute transition-colors">
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <p className="col-span-6 md:col-span-3 text-mute text-[13px]">
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="col-span-6 md:col-span-9 text-mute text-[13px] text-right md:text-left">{site.role}</p>
      </div>
    </footer>
  );
}
