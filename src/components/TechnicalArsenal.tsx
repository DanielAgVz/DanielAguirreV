import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Database,
  MonitorSmartphone,
  Network,
  Server,
  Wrench,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { arsenal } from "../data/resume";

const icons: Record<string, LucideIcon> = {
  code: Code2,
  monitor: MonitorSmartphone,
  server: Server,
  db: Database,
  wrench: Wrench,
  network: Network,
};

export default function TechnicalArsenal() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Technical Arsenal" align="right" />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {arsenal.map((group) => {
            const Icon = icons[group.icon];
            return (
              <div
                key={group.title}
                className="rounded-2xl border border-border bg-panel p-6"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-text-bright">
                  <Icon size={16} className="text-cyan" />
                  {group.title}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-panel-soft px-3 py-1.5 text-xs text-text"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
