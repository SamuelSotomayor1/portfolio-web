"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { ScrollSection, StaggerContainer, StaggerItem, TextReveal, MagneticButton } from "@/components/animations"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce experience with smooth animations and real-time updates",
    tags: ["Next.js", "TypeScript", "Stripe"],
    color: "from-cyan-500/20 to-teal-500/20",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Interactive dashboard with data visualization and real-time metrics",
    tags: ["React", "D3.js", "PostgreSQL"],
    color: "from-orange-500/20 to-amber-500/20",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Social Media App",
    description: "Full-stack social platform with real-time messaging and notifications",
    tags: ["Next.js", "Socket.io", "MongoDB"],
    color: "from-pink-500/20 to-rose-500/20",
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "AI Content Generator",
    description: "AI-powered content creation tool with natural language processing",
    tags: ["Python", "OpenAI", "FastAPI"],
    color: "from-indigo-500/20 to-blue-500/20",
    link: "#",
    github: "#",
  },
]

export function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="relative bg-secondary/30 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollSection>
          <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
            <TextReveal>Selected Work</TextReveal>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
            <TextReveal delay={0.2}>
              A collection of projects that showcase my skills and passion for creating exceptional digital experiences
            </TextReveal>
          </p>
        </ScrollSection>

        <StaggerContainer className="grid gap-8 md:grid-cols-2" staggerDelay={0.15}>
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <motion.div
                className="group relative overflow-hidden rounded-3xl border border-border bg-card"
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className={`aspect-video w-full bg-linear-to-br ${project.color} p-8`}>
                  <motion.div
                    className="flex h-full items-center justify-center"
                    animate={{
                      scale: hoveredId === project.id ? 1.1 : 1,
                      rotate: hoveredId === project.id ? 3 : 0,
                    }}
                  >
                    <div className="grid h-full w-full grid-cols-3 gap-2 opacity-50">
                      {[...Array(9)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="rounded-lg bg-foreground/10"
                          animate={{
                            opacity: hoveredId === project.id ? [0.3, 0.6, 0.3] : 0.3,
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.1,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <div className="flex gap-2">
                      <MagneticButton>
                        <a
                          href={project.github}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary transition-colors hover:bg-primary hover:text-primary-foreground"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </MagneticButton>
                      <MagneticButton>
                        <a
                          href={project.link}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary transition-colors hover:bg-primary hover:text-primary-foreground"
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </MagneticButton>
                    </div>
                  </div>

                  <p className="mb-4 text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    <AnimatePresence>
                      {project.tags.map((tag, index) => (
                        <motion.span
                          key={tag}
                          className="rounded-full bg-secondary px-3 py-1 text-sm"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
