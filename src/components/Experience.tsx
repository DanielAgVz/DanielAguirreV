import type { LucideIcon } from "lucide-react";
import { Code2, Database, Globe, MapPin, MonitorSmartphone, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/resume";

const bulletIcons: Record<string, LucideIcon> = {
  globe: Globe,
  code: Code2,
  pin: MapPin,
};

const tagIcons: Record<string, LucideIcon> = {
  monitor: MonitorSmartphone,
  spark: Sparkles,
  db: Database,
};

export default function Experience() {
  const [job1, job2] = experience;

  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Experience" />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-panel p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-cyan">
                  {job1.company}
                </h3>
                <p className="mt-1 text-xs text-text-dim">{job1.role}</p>
              </div>
              <span className="whitespace-nowrap rounded-md border border-border bg-panel-soft px-3 py-1 font-mono text-[11px] text-text-dim">
                {job1.period}
              </span>
            </div>

            <ul className="mt-6 space-y-4">
              {job1.bullets?.map((bullet, i) => {
                const Icon = bulletIcons[bullet.icon];
                return (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-cyan/10 text-cyan">
                      <Icon size={13} />
                    </span>
                    <span className="text-sm leading-relaxed text-text">
                      {bullet.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </article>

          <article className="rounded-2xl border border-border bg-panel p-6">
            <h3 className="text-lg font-semibold text-cyan">{job2.company}</h3>
            <p className="mt-1 text-xs text-text-dim">{job2.role}</p>

            <p className="mt-6 text-sm leading-relaxed text-text">
              {job2.description}
            </p>

            <div className="mt-6 space-y-3">
              {job2.tags?.map((tag, i) => {
                const Icon = tagIcons[tag.icon];
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-lg border border-border bg-panel-soft px-4 py-3"
                  >
                    <Icon size={15} className="shrink-0 text-cyan" />
                    <span className="text-sm text-text-bright">{tag.text}</span>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
