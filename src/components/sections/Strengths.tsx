"use client";

import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { useProjectSpotlight } from "@/components/ProjectSpotlightContext";
import { strengths } from "@/lib/content";

export default function Strengths() {
  const { requestSpotlight } = useProjectSpotlight();

  const handleEvidenceClick = (projectId: string, targetId?: string) => {
    requestSpotlight(projectId, targetId);
    document
      .getElementById(`project-${projectId}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Section id="strengths" index="03" title="Strengths">
      <Reveal direction="left">
        <p className="mb-10 max-w-2xl text-zinc-600 dark:text-zinc-400">
          위 세 문단을 관통하는 세 가지 태도이자, 아래 프로젝트에서 실제로
          확인할 수 있는 결과입니다.
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {strengths.map((strength, i) => (
            <div
              key={strength.title}
              className="group flex h-full flex-col rounded-2xl border border-black/10 p-6 transition-colors hover:border-violet-300 dark:border-white/10 dark:hover:border-violet-800"
            >
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
              {strength.evidenceLabel &&
                (strength.evidenceProjectId ? (
                  <button
                    type="button"
                    onClick={() =>
                      handleEvidenceClick(
                        strength.evidenceProjectId,
                        strength.evidenceTargetId,
                      )
                    }
                    className="mt-6 block w-full rounded-xl border-l-2 border-violet-400 bg-violet-50/60 p-4 text-left text-sm transition-colors hover:bg-violet-50 dark:border-violet-700 dark:bg-violet-950/30 dark:hover:bg-violet-950/50"
                  >
                    <span className="font-semibold text-violet-700 dark:text-violet-300">
                      {strength.evidenceLabel} ↗
                    </span>
                    <span className="mt-1 block text-zinc-600 dark:text-zinc-400">
                      {strength.evidenceDetail}
                    </span>
                  </button>
                ) : (
                  <div className="mt-6 block w-full rounded-xl border-l-2 border-violet-400 bg-violet-50/60 p-4 text-left text-sm dark:border-violet-700 dark:bg-violet-950/30">
                    <span className="font-semibold text-violet-700 dark:text-violet-300">
                      {strength.evidenceLabel}
                    </span>
                    <span className="mt-1 block text-zinc-600 dark:text-zinc-400">
                      {strength.evidenceDetail}
                    </span>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
