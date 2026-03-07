import { ScrollSection, StaggerContainer, StaggerItem } from "@/components/animations"
import { ProjectCard } from "../animations/sections/projects-animation"

const projects = [
  {
    id: 1,
    title: "BlackShark Web E-Commerce",
    description: "Plataforma de e-commerce para ofrecer servicios digitales",
    tags: ["React", "MySQL", "Node.js", "Express", "Firebase"],
    color: "from-cyan-500/20 to-teal-500/20",
    href: "https://github.com/IgnacioBarraza/BlackSharkWeb",
    github: "https://github.com/IgnacioBarraza/BlackSharkWeb",
  },
  {
    id: 2,
    title: "El Refugio",
    description: "Sistema de reservas para restaurantes",
    tags: ["Angular", "Node.js", "Express", "PostgreSQL", "Prisma"],
    color: "from-orange-500/20 to-amber-500/20",
    link: "#",
    github: "#",
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#0B0B0C] px-6 py-32 border-t border-[#1C1C21]"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollSection>
          <h2 className="mb-4 text-center text-4xl font-bold text-[#F5F5F7] md:text-5xl lg:text-6xl">
            Proyectos
          </h2>

          <p className="mx-auto mb-16 max-w-2xl text-center text-[#A1A1AA]">
            Una lista de mis proyectos que demuestran mis skills y creatividad
            para construir soluciones digitales.
          </p>
        </ScrollSection>

        <StaggerContainer
          className="grid gap-8 md:grid-cols-2"
          staggerDelay={0.15}
        >
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
