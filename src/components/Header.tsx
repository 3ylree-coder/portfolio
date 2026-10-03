"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

const nav = [
  { label: "Work", href: "/" },
  { label: "About", href: "/about/" },
];

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" || pathname.startsWith("/work") : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-10 bg-paper">
      <div className="grid grid-cols-12 gap-x-5 px-4 md:px-6 py-5 text-[15px] font-medium">
        <Link href="/" className="col-span-4 md:col-span-6">
          {site.name}
        </Link>
        <nav className="col-span-8 md:col-span-3 flex justify-end md:justify-start">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "text-ink" : "text-mute hover:text-ink transition-colors"}
            >
              {item.label}
              {i < nav.length - 1 && <span className="text-mute">,&nbsp;</span>}
            </Link>
          ))}
        </nav>
        <a
          href={`mailto:${site.email}`}
          className="hidden md:block col-span-3 justify-self-end underline underline-offset-4 decoration-1"
        >
          → Get in touch
        </a>
      </div>
    </header>
  );
}
