import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <Section id="projects" index="06" title="Projects">
      <Reveal direction="right">
        <p className="mb-10 max-w-2xl text-zinc-600 dark:text-zinc-400">
          {/* 다음은 그 집요함이 실제로 풀어낸 사건들입니다. */}
        </p>
        <div className="space-y-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
