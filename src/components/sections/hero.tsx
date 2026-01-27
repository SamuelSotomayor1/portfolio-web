"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { CharacterReveal, TextReveal, MagneticButton, FloatingShapes } from "@/components/animations"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">
      <FloatingShapes />
      
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-muted-foreground">
            Available for work
          </span>
        </motion.div>

        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
          <CharacterReveal delay={0.2}>Creative</CharacterReveal>
          <br />
          <span className="text-primary">
            <CharacterReveal delay={0.5}>Developer</CharacterReveal>
          </span>
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          <TextReveal delay={0.8}>
            I craft immersive digital experiences with playful interactions and thoughtful design. Building the future of the web, one pixel at a time.
          </TextReveal>
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton>
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-transform"
            >
              <span>View My Work</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              >
                <ArrowDown className="h-4 w-4 -rotate-90" />
              </motion.span>
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-8 py-4 font-semibold transition-colors hover:bg-secondary"
            >
              Get in Touch
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  )
}
