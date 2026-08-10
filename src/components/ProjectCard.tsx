"use client";

import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import ProjectDetailModal from "@/components/ProjectDetailModal";
import { useProjectSpotlight } from "@/components/ProjectSpotlightContext";
import type { Project, ProjectMedia } from "@/lib/content";

function MediaGallery({ media }: { media: ProjectMedia[] }) {
  // Loops seamlessly at the ends: a clone of the last slide sits before index 0
  // and a clone of the first slide sits after the last, so wrapping never sweeps
  // across every slide. virtualIndex 1..media.length maps to the real slides.
  const extended =
    media.length > 1 ? [media[media.length - 1], ...media, media[0]] : media;
  const [virtualIndex, setVirtualIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Swipe/drag (touch, mouse, or pen — Pointer Events unify all three): track
  // drag distance and follow the pointer 1:1 while dragging, then either
  // commit to the next/previous slide or snap back on release.
  const dragStart = useRef<{ x: number; y: number; id: number } | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);

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

  const handlePointerDown = (e: ReactPointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    dragStart.current = { x: e.clientX, y: e.clientY, id: e.pointerId };
  };

  const handlePointerMove = (e: ReactPointerEvent) => {
    if (!dragStart.current || e.pointerId !== dragStart.current.id) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    // Only commit to a horizontal drag once intent is clear, so a vertical
    // scroll gesture over the image isn't hijacked.
    if (!dragging && Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8) {
      e.currentTarget.setPointerCapture(e.pointerId);
      setWithTransition(false);
      setDragging(true);
    }
    if (dragging) setDragOffset(dx);
  };

  const endDrag = (e: ReactPointerEvent) => {
    if (!dragStart.current || e.pointerId !== dragStart.current.id) return;
    if (dragging) {
      const width = containerRef.current?.clientWidth || 1;
      const threshold = Math.min(80, width * 0.15);
      setWithTransition(true);
      if (dragOffset <= -threshold) {
        setVirtualIndex(virtualIndex + 1);
      } else if (dragOffset >= threshold) {
        setVirtualIndex(virtualIndex - 1);
      }
    }
    setDragOffset(0);
    setDragging(false);
    dragStart.current = null;
  };

  const realIndex = ((virtualIndex - 1) % media.length + media.length) % media.length;

  return (
    <div
      ref={containerRef}
      className={`group relative w-full touch-pan-y overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div
        className={`flex ${withTransition ? "transition-transform duration-500 ease-out" : ""}`}
        style={{
          transform: `translateX(calc(-${virtualIndex * 100}% + ${dragOffset}px))`,
        }}
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
              draggable={false}
              className="h-auto max-h-120 w-auto max-w-full select-none"
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
            className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white opacity-70 transition-opacity hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="다음 이미지"
            onClick={() => goTo(virtualIndex + 1)}
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white opacity-70 transition-opacity hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
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

export default function ProjectCard({ project }: { project: Project }) {
  const [manualOpen, setManualOpen] = useState(false);
  // Token of the last spotlight request the user has dismissed, so closing the
  // modal doesn't get immediately reopened by the still-active spotlight state.
  const [dismissedToken, setDismissedToken] = useState(-1);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { spotlight } = useProjectSpotlight();
  const isSpotlighted =
    spotlight?.projectId === project.id && spotlight.token !== dismissedToken;
  const open = manualOpen || isSpotlighted;

  const handleClose = () => {
    setManualOpen(false);
    if (spotlight?.projectId === project.id) {
      setDismissedToken(spotlight.token);
    }
    triggerRef.current?.focus();
  };

  return (
    <>
      <article
        id={`project-${project.id}`}
        className="scroll-mt-16 rounded-3xl border border-black/10 p-6 dark:border-white/10 sm:p-8"
      >
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
            onClick={() => setManualOpen(true)}
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

      <ProjectDetailModal
        project={project}
        open={open}
        onClose={handleClose}
        scrollToId={isSpotlighted ? spotlight?.targetId : undefined}
        scrollToken={isSpotlighted ? spotlight?.token : undefined}
      />
    </>
  );
}
