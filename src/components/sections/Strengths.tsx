import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { strengths } from "@/lib/content";

export default function Strengths() {
  return (
    <Section id="strengths" index="03" title="Strengths">
      <p className="mb-10 max-w-2xl text-zinc-600 dark:text-zinc-400">
        위 세 문단을 관통하는 세 가지 태도이자, 아래 프로젝트에서 실제로
        확인할 수 있는 결과입니다.
      </p>
      <div className="grid gap-6 sm:grid-cols-3">
        {strengths.map((strength, i) => (
          <Reveal
            key={strength.title}
            direction={i % 2 === 0 ? "left" : "right"}
            delay={i * 100}
          >
            <div className="group flex h-full flex-col rounded-2xl border border-black/10 p-6 transition-colors hover:border-violet-300 dark:border-white/10 dark:hover:border-violet-800">
              <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
                0{i + 1}
              </span>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">
                {strength.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-violet-600 dark:text-violet-400">
                {strength.tagline}
              </p>
              <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                {strength.description}
              </p>
              <a
                href="#projects"
                className="mt-6 block rounded-xl border-l-2 border-violet-400 bg-violet-50/60 p-4 text-sm transition-colors hover:bg-violet-50 dark:border-violet-700 dark:bg-violet-950/30 dark:hover:bg-violet-950/50"
              >
                <span className="font-semibold text-violet-700 dark:text-violet-300">
                  {strength.evidenceLabel} ↗
                </span>
                <span className="mt-1 block text-zinc-600 dark:text-zinc-400">
                  {strength.evidenceDetail}
                </span>
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
