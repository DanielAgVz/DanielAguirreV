export default function SectionHeading({
  title,
  align = "left",
}: {
  title: string;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`flex items-center gap-6 ${align === "right" ? "flex-row-reverse" : ""}`}
    >
      <h2 className="whitespace-nowrap text-2xl font-bold text-text-bright sm:text-3xl">
        {title}
      </h2>
      <span className="h-px w-full bg-border" />
    </div>
  );
}
