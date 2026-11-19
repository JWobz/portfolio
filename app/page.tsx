import Hero from "./_components/home/Hero";
import Section from "./_components/layout/Section";
import SkillCards from "./_components/home/SkillCards";
import SelectedWork from "./_components/home/SelectedWork";
import ProjectGrid from "./_components/home/ProjectGrid";
import Toolbox from "./_components/home/Toolbox";
import About from "./_components/home/About";

export default function Home() {
  return (
    <>
      <Hero />
      <Section id="work" title="Selected work" number={1} label="Shipped games">
        <SelectedWork />
      </Section>

      <Section
        id="skills"
        title="Design brain, engineer’s hands"
        number={2}
        label="What I do"
      >
        <SkillCards />
      </Section>

      <Section
        id="projects"
        title="Projects"
        number={3}
        label="Software"
        alt={true}
      >
        <ProjectGrid />
      </Section>

      <Section id="toolbox" title="What I work with" number={4} label="Toolbox">
        <Toolbox />
      </Section>

      <Section
        id="about"
        title="From game feel to good software"
        number={5}
        label="About"
      >
        <About />
      </Section>

      <Section
        id="contact"
        title="Let’s build something."
        number={6}
        label="Contact"
      >
        <p>Contact</p>
      </Section>
    </>
  );
}
