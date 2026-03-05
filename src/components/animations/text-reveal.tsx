"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
}

export function TextReveal({
  children,
  className,
  delay = 0,
}: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const words = children.split(" ")

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className ?? ""}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="mr-1"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.05,
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

