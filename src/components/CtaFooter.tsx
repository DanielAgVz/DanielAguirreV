import { ExternalLink, Link2, Mail } from "lucide-react";
import { profile } from "../data/resume";

export default function CtaFooter() {
  return (
    <footer className="border-t border-border px-6 pt-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-text-bright sm:text-4xl">
          Ready to build the future of Web 3.0?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text sm:text-base">
          Whether you need a full-stack architect or a blockchain specialist,
          I'm ready to bring your vision to life.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href={profile.email}
            className="inline-flex items-center gap-2 rounded-lg bg-cyan px-6 py-3 font-mono text-xs font-semibold tracking-wide text-bg transition-opacity hover:opacity-90"
          >
            <Mail size={14} />
            EMAIL ME
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-text-dim transition-colors hover:border-cyan/50 hover:text-cyan"
          >
            <Link2 size={16} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-text-dim transition-colors hover:border-cyan/50 hover:text-cyan"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-20 flex max-w-6xl flex-col items-center gap-4 border-t border-border py-8 text-xs text-text-dim sm:flex-row sm:justify-between">
        <span className="font-mono font-semibold tracking-wide text-text-bright">
          DANIEL AGUIRRE VELEZ
        </span>
        <span>© 2024 | SOFTWARE ENGINEER & BLOCKCHAIN ARCHITECT</span>
        <div className="flex items-center gap-5">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-cyan"
          >
            Github
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-cyan"
          >
            LinkedIn
          </a>
          <a
            href={profile.socials.twitter}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-cyan"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
