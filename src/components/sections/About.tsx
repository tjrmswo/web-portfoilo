import Image from "next/image";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { about } from "@/lib/content";

export default function About() {
  return (
    <Section id="about" index="02" title="About me">
      <Reveal direction="right">
        <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-[1fr_auto]">
          <div className="space-y-4">
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              {about.motivation}
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              {about.paragraph}
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              {about.content}
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              {about.hobby}
            </p>
          </div>
          <div className="relative h-72 w-56 overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 sm:h-80 sm:w-64">
            <Image
              src={about.photo.src}
              alt={about.photo.alt}
              fill
              sizes="(min-width: 640px) 16rem, 14rem"
              className="object-cover"
            />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
