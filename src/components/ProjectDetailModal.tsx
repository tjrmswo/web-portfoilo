"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/lib/content";

const emptySubscribe = () => () => {};

// SSR-safe client-mount check without a setState-in-effect anti-pattern.
function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="mt-3 overflow-x-auto rounded-lg bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100">
      <code>{code}</code>
    </pre>
  );
}

// Renders **bold** markers inside compressed one-liners as <strong>.
function renderBold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong
        key={i}
        className="font-semibold text-zinc-900 dark:text-zinc-100"
      >
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

function FeaturedBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white dark:bg-emerald-500">
      ★ 가장 임팩트 있는 기여
    </span>
  );
}

function ProblemActionResult({
  problem,
  action,
  result,
}: {
  problem: string;
  action?: string;
  result: string;
}) {
  return (
    <dl className="mt-3 space-y-3 text-sm leading-relaxed">
      <div>
        <dt className="font-semibold text-red-600 dark:text-red-400">
          {action ? "Problem" : "Problem & Action"}
        </dt>
        <dd className="mt-1 text-zinc-700 dark:text-zinc-300">{problem}</dd>
      </div>
      {action && (
        <div>
          <dt className="font-semibold text-amber-600 dark:text-amber-400">
            Action
          </dt>
          <dd className="mt-1 text-zinc-700 dark:text-zinc-300">{action}</dd>
        </div>
      )}
      <div>
        <dt className="font-semibold text-emerald-600 dark:text-emerald-400">
          Result
        </dt>
        <dd className="mt-1 text-zinc-700 dark:text-zinc-300">{result}</dd>
      </div>
    </dl>
  );
}

function Retrospective({ text }: { text: string }) {
  return (
    <div className="mt-4 rounded-xl bg-white/70 p-4 dark:bg-black/20">
      <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
        Key Retrospective
      </p>
      <p className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        {text}
      </p>
    </div>
  );
}

export default function ProjectDetailModal({
  project,
  open,
  onClose,
  scrollToId,
  scrollToken,
}: {
  project: Project;
  open: boolean;
  onClose: () => void;
  // DOM id of a case study/performance block to scroll to once the modal has
  // finished opening, and a token that changes on every request so re-clicking
  // the same evidence link (modal already open) still triggers a re-scroll.
  scrollToId?: string;
  scrollToken?: number;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mounted = useMounted();
  const [visible, setVisible] = useState(false);
  const [highlightId, setHighlightId] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const frame = requestAnimationFrame(() => setVisible(true));

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      cancelAnimationFrame(frame);
      setVisible(false);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open || !scrollToId) return;

    let clearHighlight: ReturnType<typeof setTimeout>;
    const timer = setTimeout(() => {
      const el = contentRef.current?.querySelector(`#${CSS.escape(scrollToId)}`);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
      setHighlightId(scrollToId);
      // Started only once the highlight actually turns on, so it always stays
      // visible for a full 2s regardless of when this effect happened to run.
      clearHighlight = setTimeout(() => setHighlightId(null), 2000);
    }, 350);

    return () => {
      clearTimeout(timer);
      clearTimeout(clearHighlight);
    };
  }, [open, scrollToId, scrollToken]);

  if (!mounted || !open) return null;

  const titleId = `project-modal-${project.id}-title`;
  const hasLinks = project.links.demo || project.links.github || project.links.readme;
  const featuredCaseStudies = project.caseStudies.filter((cs) => cs.featured);
  const standardCaseStudies = project.caseStudies.filter((cs) => !cs.featured);

  return createPortal(
    <div
      className={`fixed inset-0 z-[100] flex justify-end bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`flex h-full w-full flex-col overflow-y-auto bg-white shadow-2xl outline-none transition-transform duration-300 ease-out dark:bg-zinc-950 sm:max-w-xl md:max-w-2xl ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/5 bg-white/90 px-6 py-4 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-950/90">
          <div>
            <h3 id={titleId} className="text-lg font-semibold tracking-tight">
              {project.name}
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {project.period}
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="rounded-full p-2 text-zinc-500 transition-colors hover:bg-black/5 hover:text-black dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div ref={contentRef} className="flex-1 px-6 py-6">
          <section
            id={`overview-${project.id}`}
            className={`scroll-mt-24 rounded-2xl transition-all ${
              highlightId === `overview-${project.id}`
                ? "border-2 border-violet-500 bg-violet-50/40 p-6 ring-4 ring-violet-300/60 dark:border-violet-400 dark:bg-violet-950/20 dark:ring-violet-700/60"
                : "border-2 border-transparent"
            }`}
          >
            <h4 className="text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-600">
              Project Overview
            </h4>
            <p className="mt-2 leading-relaxed text-zinc-700 dark:text-zinc-300">
              {project.summary}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 font-mono text-xs text-violet-700 dark:border-violet-900 dark:bg-violet-950 dark:text-violet-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {(featuredCaseStudies.length > 0 || project.performance) && (
            <section className="mt-10">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-600">
                Technical Deep Dive &amp; Troubleshooting
              </h4>
              <div className="mt-4 space-y-6">
                {featuredCaseStudies.map((cs) => (
                  <div
                    key={cs.title}
                    id={cs.id}
                    className={`scroll-mt-24 rounded-2xl border-2 bg-emerald-50/40 p-6 shadow-sm transition-shadow dark:bg-emerald-950/20 ${
                      cs.id && highlightId === cs.id
                        ? "border-violet-500 ring-4 ring-violet-300/60 dark:border-violet-400 dark:ring-violet-700/60"
                        : "border-emerald-400/60 dark:border-emerald-500/40"
                    }`}
                  >
                    <FeaturedBadge />
                    <h5 className="mt-3 text-lg font-semibold leading-snug">
                      {cs.title}
                    </h5>
                    <ProblemActionResult
                      problem={cs.problem}
                      action={cs.action}
                      result={cs.result}
                    />
                    {cs.code && <CodeBlock code={cs.code} />}
                    {cs.retrospective && (
                      <Retrospective text={cs.retrospective} />
                    )}
                  </div>
                ))}

                {project.performance && (
                  <div
                    id={`performance-${project.id}`}
                    className={`scroll-mt-24 rounded-2xl border-2 bg-emerald-50/40 p-6 shadow-sm transition-shadow dark:bg-emerald-950/20 ${
                      highlightId === `performance-${project.id}`
                        ? "border-violet-500 ring-4 ring-violet-300/60 dark:border-violet-400 dark:ring-violet-700/60"
                        : "border-emerald-400/60 dark:border-emerald-500/40"
                    }`}
                  >
                    <FeaturedBadge />
                    <h5 className="mt-3 text-lg font-semibold leading-snug">
                      {project.performance.title}
                    </h5>
                    <ProblemActionResult
                      problem={project.performance.problem}
                      action={project.performance.action}
                      result={project.performance.result}
                    />
                    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                      <div className="rounded-xl border border-black/10 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-black/20">
                        <p className="text-xs text-zinc-400 dark:text-zinc-600">
                          Before
                        </p>
                        <p className="font-mono font-semibold">
                          {project.performance.before}
                        </p>
                      </div>
                      <span className="text-zinc-400 dark:text-zinc-600">
                        →
                      </span>
                      <div className="rounded-xl border border-black/10 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-black/20">
                        <p className="text-xs text-zinc-400 dark:text-zinc-600">
                          After
                        </p>
                        <p className="font-mono font-semibold">
                          {project.performance.after}
                        </p>
                      </div>
                      <span className="rounded-full bg-emerald-600 px-3 py-1 font-mono text-sm font-semibold text-white dark:bg-emerald-500">
                        {project.performance.improvement}
                      </span>
                    </div>
                    {project.performance.code && (
                      <CodeBlock code={project.performance.code} />
                    )}
                    {project.performance.retrospective && (
                      <Retrospective text={project.performance.retrospective} />
                    )}
                  </div>
                )}
              </div>
            </section>
          )}

          {standardCaseStudies.length > 0 && (
            <section className="mt-10">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-600">
                그 외 기여
              </h4>
              <ul className="mt-3 space-y-2">
                {standardCaseStudies.map((cs) => (
                  <li
                    key={cs.title}
                    className="flex gap-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                    <span>{renderBold(cs.oneLiner ?? cs.title)}</span>
                  </li>
                ))}
              </ul>

              <details className="group mt-4">
                <summary className="cursor-pointer list-none text-xs font-semibold text-zinc-400 hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-400">
                  상세 내용 보기
                  <span className="ml-1 inline-block transition-transform group-open:rotate-180">
                    ▾
                  </span>
                </summary>
                <div className="mt-4 space-y-5">
                  {standardCaseStudies.map((cs) => (
                    <div
                      key={cs.title}
                      className="rounded-2xl border border-black/10 p-5 dark:border-white/10"
                    >
                      <h5 className="font-semibold">{cs.title}</h5>
                      <ProblemActionResult
                        problem={cs.problem}
                        action={cs.action || undefined}
                        result={cs.result}
                      />
                      {cs.code && <CodeBlock code={cs.code} />}
                    </div>
                  ))}
                </div>
              </details>
            </section>
          )}
        </div>

        {hasLinks && (
          <div className="sticky bottom-0 border-t border-black/5 bg-white/90 px-6 py-4 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-950/90">
            <div className="flex flex-wrap gap-3 text-sm font-medium">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-black px-4 py-2 text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                >
                  🔗 Live Demo
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-black/10 px-4 py-2 transition-colors hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
                >
                  🔗 GitHub Repo
                </a>
              )}
              {project.links.readme && (
                <a
                  href={project.links.readme}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-black/10 px-4 py-2 transition-colors hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
                >
                  🔗 Troubleshooting README.md
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
