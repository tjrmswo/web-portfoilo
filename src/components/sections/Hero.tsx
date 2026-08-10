import Reveal from "@/components/Reveal";
import { intro } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="intro"
      className="scroll-mt-16 border-b border-black/5 dark:border-white/10"
    >
      <div className="mx-auto flex min-h-[calc(100vh-57px)] max-w-4xl flex-col justify-center px-6 py-20">
        <Reveal direction="left">
          <span className="mb-6 inline-block w-fit rounded-full border border-violet-300 bg-violet-50 px-3 py-1 font-mono text-xs text-violet-700 dark:border-violet-800 dark:bg-violet-950 dark:text-violet-300">
            {intro.role}
          </span>
          <h1 className="text-3xl font-bold tracking-tight sm:text-7xl">
            {intro.name}
          </h1>
          <p className="mt-6 max-w-xl whitespace-pre-line text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
            {intro.tagline}
          </p>
          <p className="mt-3 max-w-xl text-zinc-500 dark:text-zinc-500">
            {intro.evidence}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 text-sm font-medium">
            <a
              href={intro.resumeUrl}
              className="rounded-full bg-black px-5 py-2.5 text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              이력서 다운로드
            </a>
            <a
              href={intro.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-black/10 px-5 py-2.5 transition-colors hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
