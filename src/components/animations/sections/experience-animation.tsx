"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function TimelineLine() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div
      ref={containerRef}
      className="absolute left-0 top-0 h-full w-px bg-[#1C1C21] md:left-1/2 md:-translate-x-1/2"
    >
      <motion.div
        className="w-full bg-[#C6A75E]"
        style={{ height: lineHeight }}
      />
    </div>
  )
}

