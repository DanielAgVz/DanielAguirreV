import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "../data/resume";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-widest text-cyan sm:text-base"
        >
          DANIEL AGUIRRE VELEZ
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-text-dim transition-colors hover:text-text-bright"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.email}
            className="rounded-md bg-cyan px-4 py-2 font-mono text-xs font-semibold tracking-wide text-bg transition-opacity hover:opacity-90"
          >
            Contact Me
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-text-bright md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-bg-soft px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-text-dim hover:text-text-bright"
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.email}
              className="w-fit rounded-md bg-cyan px-4 py-2 font-mono text-xs font-semibold tracking-wide text-bg"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
