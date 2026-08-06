import type { ReactNode } from "react";

export default function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-16 border-b border-black/5 py-20 dark:border-white/10 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 flex items-baseline gap-3 sm:mb-14">
          <span className="font-mono text-sm text-zinc-400 dark:text-zinc-600">
            {index}
          </span>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
