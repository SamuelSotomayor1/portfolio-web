"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ScrollSection, StaggerContainer, StaggerItem, TextReveal } from "@/components/animations"

const experiences = [
  {
    id: 1,
    role: "Desarrollador de Software Junior (QA / Desarrollo)",
    company: "Centro de Investigación EduInclusiva",
    period: "Octubre 2025 - Diciembre 2025",
    description: "QA y desarrollador junior se realizaron pruebas completas del backend (login, registro y módulos) con Jest",
    skills: ["MySQL", "Express", "NodeJS", "TypeScript", "Handlebars", "CSS", "Jest", "Github"],
  },
  {
    id: 2,
    role: "Servicio de TI",
    company: "Ilustre Municipalidad de Iquique",
    period: "Noviembre 2024 - Marzo 2025",
    description: "Apoyo en servicios de TI y desarrollo de una página web interna para un área de trabajo.",
    skills: ["React", "TypeScript", "TailwindCSS", "Github"],
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
    <section
      id="experience"
      className="relative bg-[#111113] px-6 py-32 border-t border-[#1C1C21]"
    >
      <div className="mx-auto max-w-4xl">
        <ScrollSection>
          <h2 className="mb-4 text-center text-4xl font-bold text-[#F5F5F7] md:text-5xl lg:text-6xl">
            <TextReveal>Experiencia</TextReveal>
          </h2>

          <p className="mx-auto mb-16 max-w-2xl text-center text-[#A1A1AA]">
            <TextReveal delay={0.2}>
              Mi trayectoria profesional construyendo productos digitales
            </TextReveal>
          </p>
        </ScrollSection>

        <div ref={containerRef} className="relative">

          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-px bg-[#1C1C21] md:left-1/2 md:-translate-x-1/2">
            <motion.div
              className="w-full bg-[#C6A75E]"
              style={{ height: lineHeight }}
            />
          </div>

          <StaggerContainer className="space-y-12" staggerDelay={0.2}>
            {experiences.map((exp, index) => (
              <StaggerItem key={exp.id}>
                <motion.div
                  className={`relative flex flex-col gap-4 pl-8 md:w-1/2 md:pl-0 ${
                    index % 2 === 0
                      ? "md:ml-auto md:pl-12"
                      : "md:mr-auto md:pr-12 md:text-right"
                  }`}
                  whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                >

                  {/* Timeline dot (ÚNICO, limpio) */}
                  <motion.div
                    className="absolute top-2 -left-2 h-4 w-4 rounded-full border-4 border-[#111113] bg-[#C6A75E] md:left-1/2 md:-translate-x-1/2"
                    whileHover={{ scale: 1.4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />

                  {/* Card */}
                  <div className="rounded-2xl border border-[#1C1C21] bg-[#151518] p-6 transition-all duration-300 hover:border-[#C6A75E] hover:shadow-[0_0_30px_rgba(198,167,94,0.15)]">

                    <span className="mb-2 inline-block text-sm text-[#C6A75E]">
                      {exp.period}
                    </span>

                    <h3 className="text-xl font-bold text-[#F5F5F7]">
                      {exp.role}
                    </h3>

                    <p className="mb-2 text-[#A1A1AA]">
                      {exp.company}
                    </p>

                    <p className="mb-4 text-sm text-[#A1A1AA]">
                      {exp.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 ${
                        index % 2 === 1 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          className="rounded-full bg-[#1C1C21] border border-[#1C1C21] px-3 py-1 text-xs text-[#A1A1AA] transition-all duration-300 hover:bg-[#C6A75E] hover:text-black"
                          whileHover={{ scale: 1.08 }}
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
