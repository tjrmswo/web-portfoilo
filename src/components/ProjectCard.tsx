"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import ProjectDetailModal from "@/components/ProjectDetailModal";
import type { Project, ProjectMedia } from "@/lib/content";

function MediaGallery({ media }: { media: ProjectMedia[] }) {
  // Loops seamlessly at the ends: a clone of the last slide sits before index 0
  // and a clone of the first slide sits after the last, so wrapping never sweeps
  // across every slide. virtualIndex 1..media.length maps to the real slides.
  const extended =
    media.length > 1 ? [media[media.length - 1], ...media, media[0]] : media;
  const [virtualIndex, setVirtualIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);

  const goTo = (next: number) => {
    setWithTransition(true);
    setVirtualIndex(next);
  };

  const handleTransitionEnd = () => {
    if (virtualIndex === extended.length - 1) {
      setWithTransition(false);
      setVirtualIndex(1);
    } else if (virtualIndex === 0) {
      setWithTransition(false);
      setVirtualIndex(media.length);
    }
  };

  const realIndex = ((virtualIndex - 1) % media.length + media.length) % media.length;

  return (
    <div className="group relative w-full overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
      <div
        className={`flex ${withTransition ? "transition-transform duration-500 ease-out" : ""}`}
        style={{ transform: `translateX(-${virtualIndex * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extended.map((m, i) => (
          <div
            key={`${m.src}-${i}`}
            className="flex w-full shrink-0 items-center justify-center"
          >
            <Image
              src={m.src}
              alt={m.alt}
              width={m.width}
              height={m.height}
              unoptimized
              priority
              className="h-auto max-h-120 w-auto max-w-full"
            />
          </div>
        ))}
      </div>
      {media.length > 1 && (
        <>
          <button
            type="button"
            aria-label="이전 이미지"
            onClick={() => goTo(virtualIndex - 1)}
            className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white opacity-0 transition-opacity group-hover:opacity-100"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="다음 이미지"
            onClick={() => goTo(virtualIndex + 1)}
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white opacity-0 transition-opacity group-hover:opacity-100"
          >
            ›
          </button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {media.map((m, i) => (
              <button
                key={m.src}
                type="button"
                aria-label={`이미지 ${i + 1}`}
                onClick={() => goTo(i + 1)}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === realIndex ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function MediaPreview({ project }: { project: Project }) {
  if (project.media && project.media.length > 0) {
    return <MediaGallery media={project.media} />;
  }

  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-black/10 bg-zinc-50 text-zinc-400 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-600">
      <span className="text-3xl">🎬</span>
      <span className="text-sm">미디어 준비 중</span>
    </div>
  );
}

export default function ProjectCard({
  project,
  direction,
}: {
  project: Project;
  direction: "left" | "right";
}) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleClose = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <>
      <Reveal direction={direction}>
        <article className="rounded-3xl border border-black/10 p-6 dark:border-white/10 sm:p-8">
          <MediaPreview project={project} />

          <div className="mt-6 flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-2xl font-semibold tracking-tight">
              {project.name}
            </h3>
            <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
              {project.period}
            </span>
          </div>

          <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
            <span>{project.role}</span>
            <span className="text-zinc-300 dark:text-zinc-700">·</span>
            <span>{project.type}</span>
          </div>

          <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
            {project.summary}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
              >
                {badge}
              </span>
            ))}
          </div>

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

          <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen(true)}
              className="rounded-full bg-black px-4 py-2 text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              자세히 보기
            </button>
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-black/10 px-4 py-2 transition-colors hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
              >
                Live Demo ↗
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-black/10 px-4 py-2 transition-colors hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </article>
      </Reveal>

      <ProjectDetailModal project={project} open={open} onClose={handleClose} />
    </>
  );
}
