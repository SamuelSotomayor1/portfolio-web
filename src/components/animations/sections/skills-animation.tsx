"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

export function SkillsContainer({ children }: { children: ReactNode }) {
  return (
    <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative h-full overflow-hidden rounded-2xl border border-[#26262B] bg-[#17171A] p-6 transition-all hover:border-[#C6A75E]/40"
    >
      {children}
    </motion.div>
  )
}

export function StacksContainer({ children }: { children: ReactNode }) {
  return (
    <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-lg bg-[#111113] px-3 py-1.5 text-sm font-medium text-[#A1A1AA] transition-all hover:bg-[#C6A75E] hover:text-black"
        transition={{ delay: 0.1 }}
    >
      {children}
    </motion.span>
  )
}