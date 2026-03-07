"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

export function FadeIn({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

export function ArrowMove({ children }: { children: ReactNode }) {
  return (
    <motion.span
        animate={{ x: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
    >
      {children}
    </motion.span>
  )
}