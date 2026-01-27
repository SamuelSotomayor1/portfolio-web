"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ScrollSection, StaggerContainer, StaggerItem, TextReveal } from "@/components/animations"

const skills = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Language" },
  { name: "Next.js", level: 92, category: "Framework" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "CSS/Tailwind", level: 95, category: "Styling" },
  { name: "Framer Motion", level: 88, category: "Animation" },
  { name: "Three.js", level: 75, category: "3D" },
  { name: "PostgreSQL", level: 80, category: "Database" },
]

const categories = ["All", "Frontend", "Framework", "Language", "Backend", "Styling", "Animation", "3D", "Database"]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter((s) => s.category === activeCategory)

  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollSection>
          <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
            <TextReveal>Skills & Expertise</TextReveal>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
            <TextReveal delay={0.2}>
              Technologies I love working with to bring ideas to life
            </TextReveal>
          </p>
        </ScrollSection>

        <ScrollSection delay={0.2}>
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </ScrollSection>

        <StaggerContainer className="grid gap-4 md:grid-cols-2" staggerDelay={0.1}>
          {filteredSkills.map((skill) => (
            <StaggerItem key={skill.name}>
              <motion.div
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground">{skill.category}</span>
                </div>
                
                <div className="relative h-3 overflow-hidden rounded-full bg-secondary">
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: hoveredSkill === skill.name ? `${skill.level}%` : "0%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full bg-primary/30"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  />
                </div>
                
                <motion.span
                  className="absolute right-6 top-6 text-3xl font-bold text-primary/20"
                  animate={{ opacity: hoveredSkill === skill.name ? 1 : 0.2 }}
                >
                  {skill.level}%
                </motion.span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
