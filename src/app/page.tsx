import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import EasterEgg from "@/components/EasterEgg";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Strengths from "@/components/sections/Strengths";
import Now from "@/components/sections/Now";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import GithubActivity from "@/components/sections/GithubActivity";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white text-black dark:bg-black dark:text-white">
      <EasterEgg />
      <ScrollProgress />
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Strengths />
        <Now />
        <Skills />
        <Projects />
        <GithubActivity />
        <Contact />
      </main>
      <footer className="border-t border-black/5 py-8 text-center text-xs text-zinc-400 dark:border-white/10 dark:text-zinc-600">
        © 근재. Built with Next.js.
      </footer>
    </div>
  );
}
