import { motion } from "framer-motion"
import { ScrollSection, StaggerContainer, StaggerItem} from "@/components/animations"
import { Code2, Layout, Server, Database, Wrench, Palette } from "lucide-react"

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
              <motion.div
                className="group relative h-full overflow-hidden rounded-2xl border border-[#26262B] bg-[#17171A] p-6 transition-all hover:border-[#C6A75E]/40"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111113] transition-all group-hover:bg-[#C6A75E]/10">
                    <category.icon className="h-5 w-5 text-[#C6A75E]" />
                  </div>

                  <h3 className="text-lg font-semibold text-[#F5F5F7]">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <motion.span
                      key={skill}
                      className="rounded-lg bg-[#111113] px-3 py-1.5 text-sm font-medium text-[#A1A1AA] transition-all hover:bg-[#C6A75E] hover:text-black"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  )
}

