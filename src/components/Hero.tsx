import { Briefcase, MapPin, User } from "lucide-react";
import { profile } from "../data/resume";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-28 pt-24 text-center sm:pt-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan/10 blur-[120px]"
      />

      <div className="mx-auto flex w-24 h-24 items-center justify-center rounded-2xl border-2 border-cyan/70 text-cyan">
        <User size={36} strokeWidth={1.5} />
      </div>

      <h1 className="mt-8 text-4xl font-bold tracking-tight text-text-bright sm:text-5xl md:text-6xl">
        {profile.name.toUpperCase()}
      </h1>

      <p className="mt-3 font-mono text-xs font-semibold tracking-[0.25em] text-cyan-soft sm:text-sm">
        {profile.role.toUpperCase()}
      </p>

      <p className="mx-auto mt-6 max-w-2xl text-balance text-sm leading-relaxed text-text sm:text-base">
        {profile.summary}
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-lg border border-cyan/30 bg-panel px-4 py-2 font-mono text-xs text-text-bright">
          <MapPin size={14} className="text-cyan" />
          {profile.location}
        </span>
        <span className="inline-flex items-center gap-2 rounded-lg border border-cyan/30 bg-panel px-4 py-2 font-mono text-xs text-text-bright">
          <Briefcase size={14} className="text-cyan" />
          {profile.availability}
        </span>
      </div>
    </section>
  );
}
