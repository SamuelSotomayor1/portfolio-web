import { ScrollSection, StaggerContainer, StaggerItem} from "@/components/animations"
import { Code2, Layout, Server, Database, Wrench, Palette } from "lucide-react"
import { SkillsContainer, StacksContainer } from "../animations/sections/skills-animation"

const skillCategories = [
  {
    title: "Lenguajes",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "Python", "C++"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "Angular", "Next.js", "Astro"],
  },
  {
    title: "Backend y Testing",
    icon: Server,
    skills: ["Node.js", "Express", "Prisma", "NestJS", "Jest"],
  },
  {
    title: "Bases de Datos",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Supabase"],
  },
  {
    title: "Herramientas",
    icon: Wrench,
    skills: ["Git & GitHub", "Postman"],
  },
  {
    title: "Estilos & UI",
    icon: Palette,
    skills: ["Tailwind CSS", "CSS"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32 bg-[#111113]">

      <div className="mx-auto max-w-5xl">

        <ScrollSection>
          <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl text-[#F5F5F7]">
            Skills y Tech Stack
          </h2>

          <p className="mx-auto mb-16 max-w-2xl text-center text-[#A1A1AA]">
              Tecnologías que utilizo en mi día a día para desarrollar aplicaciones web
          </p>
        </ScrollSection>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <SkillsContainer>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111113] transition-all group-hover:bg-[#C6A75E]/10">
                    <category.icon className="h-5 w-5 text-[#C6A75E]" />
                  </div>

                  <h3 className="text-lg font-semibold text-[#F5F5F7]">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <StacksContainer
                      key={skill}
                    >
                      {skill}
                    </StacksContainer>
                  ))}
                </div>

              </SkillsContainer>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  )
}

