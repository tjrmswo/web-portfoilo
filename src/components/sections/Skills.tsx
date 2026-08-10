import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { skillGroups } from "@/lib/content";

export default function Skills() {
  return (
    <Section id="skills" index="05" title="Skills">
      <Reveal direction="left">
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="h-full rounded-2xl border border-black/10 p-6 dark:border-white/10"
            >
              <h3 className="mb-3 font-mono text-sm text-zinc-500 dark:text-zinc-400">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className={`flex items-center gap-1.5 rounded-full bg-zinc-100 py-1 text-sm dark:bg-zinc-900 ${
                      item.icon ? "pl-1.5 pr-3" : "px-3"
                    }`}
                  >
                    {item.icon && (
                      // eslint-disable-next-line @next/next/no-img-element -- small external tech icon
                      <img
                        src={item.icon}
                        alt=""
                        loading="lazy"
                        className="h-4 w-4 rounded-sm bg-white p-0.5 ring-1 ring-black/5"
                      />
                    )}
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
