import { CheckCircle2, Info, Shield, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { additionalInfo, certifications, education } from "../data/resume";

export default function EducationCertifications() {
  return (
    <section id="education" className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">
        <div id="education-col">
          <SectionHeading title="Education" />

          <ol className="relative mt-10 space-y-10 border-l border-border pl-6">
            {education.map((item) => (
              <li key={item.title} className="relative">
                <span className="absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_0_4px_rgba(34,211,238,0.15)]" />
                <p className="font-mono text-xs font-semibold tracking-wide text-cyan-soft">
                  {item.date.toUpperCase()}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-text-bright">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-text-dim">{item.place}</p>
              </li>
            ))}
          </ol>
        </div>

        <div id="certifications">
          <SectionHeading title="Certifications" />

          <div className="mt-10 space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="flex items-center gap-4 rounded-2xl border border-border bg-panel p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-panel-soft text-cyan">
                  {cert.icon === "shield" ? (
                    <ShieldCheck size={18} />
                  ) : (
                    <Shield size={18} />
                  )}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-text-bright">
                    {cert.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-text-dim">{cert.place}</p>
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-border bg-panel-soft p-5">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wide text-text-bright">
                <Info size={14} className="text-cyan" />
                ADDITIONAL INFO
              </div>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {additionalInfo.map((info) => (
                  <li
                    key={info}
                    className="flex items-center gap-2 text-xs text-text"
                  >
                    <CheckCircle2 size={14} className="shrink-0 text-cyan" />
                    {info}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
