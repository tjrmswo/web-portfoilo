import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { contact } from "@/lib/content";

export default function Contact() {
  return (
    <Section id="contact" index="08" title="Contact">
      <Reveal direction="right">
        <div className="max-w-xl space-y-4 text-lg">
          <p>
            <span className="mr-3 font-mono text-sm text-zinc-500 dark:text-zinc-400">
              Email
            </span>
            <a
              href={`mailto:${contact.email}`}
              className="underline decoration-zinc-300 underline-offset-4 hover:decoration-black dark:decoration-zinc-700 dark:hover:decoration-white"
            >
              {contact.email}
            </a>
          </p>
          <p>
            <span className="mr-3 font-mono text-sm text-zinc-500 dark:text-zinc-400">
              GitHub
            </span>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-300 underline-offset-4 hover:decoration-black dark:decoration-zinc-700 dark:hover:decoration-white"
            >
              {contact.github.replace("https://", "")}
            </a>
          </p>
          <p className="pt-4 text-zinc-500 dark:text-zinc-400">
            편하게 연락 주세요.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
