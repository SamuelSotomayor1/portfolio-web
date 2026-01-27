"use client"

import { motion } from "framer-motion"

interface FloatingShapeProps {
  className?: string
}

export function FloatingShapes({ className }: FloatingShapeProps) {
  const shapes = [
    { size: 100, x: "10%", y: "20%", duration: 20, delay: 0 },
    { size: 60, x: "80%", y: "30%", duration: 25, delay: 2 },
    { size: 80, x: "70%", y: "70%", duration: 18, delay: 1 },
    { size: 40, x: "20%", y: "80%", duration: 22, delay: 3 },
    { size: 120, x: "50%", y: "10%", duration: 30, delay: 0.5 },
  ]

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-primary/5 blur-3xl"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  )
}
