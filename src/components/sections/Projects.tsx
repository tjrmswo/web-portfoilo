import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <Section id="projects" index="06" title="Projects">
      <p className="mb-10 max-w-2xl text-zinc-600 dark:text-zinc-400">
        {/* 다음은 그 집요함이 실제로 풀어낸 사건들입니다. */}
      </p>
      <div className="space-y-10">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            direction={i % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </Section>
  );
}
