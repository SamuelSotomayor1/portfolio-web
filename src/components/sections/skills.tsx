"use client"

import { motion } from "framer-motion"
import { ScrollSection, StaggerContainer, StaggerItem, TextReveal } from "@/components/animations"
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
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "Prisma", "NestJS"],
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

export function SkillsSection() {
  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <ScrollSection>
          <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
            <TextReveal>Skills & Tech Stack</TextReveal>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
            <TextReveal delay={0.2}>
              Tecnologias con las que trabajo para dar vida a las ideas
            </TextReveal>
          </p>
        </ScrollSection>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <motion.div
                className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/50 p-5 backdrop-blur-sm transition-colors hover:border-primary/50 hover:bg-card"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <motion.span
                      key={skill}
                      className="rounded-lg bg-secondary/80 px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-all hover:bg-primary hover:text-primary-foreground"
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

