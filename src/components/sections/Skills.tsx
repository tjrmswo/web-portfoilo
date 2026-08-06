import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { skillGroups } from "@/lib/content";

export default function Skills() {
  return (
    <Section id="skills" index="05" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.category}
            direction={i % 2 === 0 ? "left" : "right"}
            delay={i * 80}
          >
            <div className="h-full rounded-2xl border border-black/10 p-6 dark:border-white/10">
              <h3 className="mb-3 font-mono text-sm text-zinc-500 dark:text-zinc-400">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-900"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
