import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { contact } from "@/lib/content";

export default function GithubActivity() {
  const username = contact.github.replace(/\/$/, "").split("/").pop();

  return (
    <Section id="github" index="07" title="GitHub Activity">
      <Reveal direction="left">
        <div className="overflow-x-auto rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element -- external, dynamically generated chart */}
          <img
            src={`https://ghchart.rshah.org/8b5cf6/${username}`}
            alt={`${username}의 GitHub 기여 그래프`}
            className="min-w-[640px]"
          />
        </div>
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm underline decoration-zinc-300 underline-offset-4 hover:decoration-black dark:decoration-zinc-700 dark:hover:decoration-white"
        >
          GitHub에서 더 보기 ↗
        </a>
      </Reveal>
    </Section>
  );
}
