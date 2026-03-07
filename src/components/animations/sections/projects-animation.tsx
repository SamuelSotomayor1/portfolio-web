"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ArrowUpRight } from "lucide-react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ProjectCard({ project }: { project: any }) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <motion.div
      className="group relative overflow-hidden rounded-3xl border border-[#1C1C21] bg-[#111113] transition-all duration-300"
      onHoverStart={() => setHoveredId(project.id)}
      onHoverEnd={() => setHoveredId(null)}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Preview */}
      <div className="aspect-video w-full bg-linear-to-br from-[#151518] to-[#0B0B0C] p-8">
        <motion.div
          className="flex h-full items-center justify-center"
          animate={{
            scale: hoveredId === project.id ? 1.05 : 1,
          }}
        >
          <div className="grid h-full w-full grid-cols-3 gap-2 opacity-40">
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                className="rounded-lg bg-[#1C1C21]"
                animate={{
                  opacity: hoveredId === project.id ? [0.3, 0.6, 0.3] : 0.3,
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <h3 className="text-2xl font-bold text-[#F5F5F7]">
            {project.title}
          </h3>

          <div className="flex gap-2">
            <a
              href={project.github}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#151518] border border-[#1C1C21] text-[#A1A1AA] transition-all duration-300 hover:bg-[#C6A75E] hover:text-black hover:shadow-[0_0_20px_rgba(198,167,94,0.25)]"
            >
              <Github className="h-4 w-4" />
            </a>

            <a
              href={project.link}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#151518] border border-[#1C1C21] text-[#A1A1AA] transition-all duration-300 hover:bg-[#C6A75E] hover:text-black hover:shadow-[0_0_20px_rgba(198,167,94,0.25)]"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <p className="mb-4 text-[#A1A1AA]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          <AnimatePresence>
            {project.tags.map((tag: string, index: number) => (
              <motion.span
                key={tag}
                className="rounded-full bg-[#151518] border border-[#1C1C21] px-3 py-1 text-sm text-[#A1A1AA] transition-all duration-300 hover:bg-[#C6A75E] hover:text-black"
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

      {/* Glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 border-[#C6A75E]"
        initial={{ opacity: 0 }}
        animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  )
}