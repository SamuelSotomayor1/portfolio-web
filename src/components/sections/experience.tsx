"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ScrollSection, StaggerContainer, StaggerItem, TextReveal } from "@/components/animations"

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Corp",
    period: "2023 - Present",
    description: "Leading the frontend architecture and mentoring junior developers. Building scalable design systems.",
    skills: ["React", "TypeScript", "Next.js", "Design Systems"],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Startup Inc",
    period: "2021 - 2023",
    description: "Developed and maintained multiple web applications. Implemented CI/CD pipelines.",
    skills: ["Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Agency Studio",
    period: "2019 - 2021",
    description: "Created interactive websites and web applications for various clients across industries.",
    skills: ["JavaScript", "Vue.js", "GSAP", "Sass"],
  },
  {
    id: 4,
    role: "Junior Developer",
    company: "Web Solutions",
    period: "2018 - 2019",
    description: "Started my journey building responsive websites and learning modern frameworks.",
    skills: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
]

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <ScrollSection>
          <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
            <TextReveal>Experience</TextReveal>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
            <TextReveal delay={0.2}>
              My professional journey building digital products
            </TextReveal>
          </p>
        </ScrollSection>

        <div ref={containerRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2">
            <motion.div
              className="w-full bg-primary"
              style={{ height: lineHeight }}
            />
          </div>

          <StaggerContainer className="space-y-12" staggerDelay={0.2}>
            {experiences.map((exp, index) => (
              <StaggerItem key={exp.id}>
                <motion.div
                  className={`relative flex flex-col gap-4 pl-8 md:w-1/2 md:pl-0 ${
                    index % 2 === 0 ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12 md:text-right"
                  }`}
                  whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className={`absolute top-2 h-4 w-4 rounded-full border-4 border-background bg-primary ${
                      index % 2 === 0
                        ? "-left-2 md:left-auto md:-translate-x-1/2"
                        : "-left-2 md:left-auto md:right-0 md:translate-x-1/2"
                    }`}
                    style={{
                      left: index % 2 === 0 ? undefined : "-8px",
                      right: index % 2 === 0 ? undefined : undefined,
                    }}
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                  <div
                    className={`absolute top-2 hidden h-4 w-4 rounded-full border-4 border-background bg-primary md:block ${
                      index % 2 === 0 ? "-left-2" : "-right-2"
                    }`}
                    style={{ display: "none" }}
                  />
                  <motion.div
                    className="absolute top-2 hidden h-4 w-4 rounded-full border-4 border-background bg-primary md:left-1/2 md:block md:-translate-x-1/2"
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    style={{
                      left: "calc(-1rem - 8px)",
                    }}
                  />

                  <div className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
                    <span className="mb-2 inline-block text-sm text-primary">{exp.period}</span>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="mb-2 text-muted-foreground">{exp.company}</p>
                    <p className="mb-4 text-sm text-muted-foreground">{exp.description}</p>

                    <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                      {exp.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          className="rounded-full bg-secondary px-3 py-1 text-xs"
                          whileHover={{ scale: 1.1, backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
