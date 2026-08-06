import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { now } from "@/lib/content";

export default function Now() {
  return (
    <Section id="now" index="04" title="Now">
      <ul className="space-y-4">
        {now.map((item, i) => (
          <Reveal
            key={item}
            direction={i % 2 === 0 ? "left" : "right"}
            delay={i * 80}
          >
            <li className="flex items-start gap-3 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              <span className="relative mt-2 flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>{item}</span>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
