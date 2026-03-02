"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    window.addEventListener("mousemove", handleMouseMove)

    const interactiveElements = document.querySelectorAll(
      "a, button, [data-cursor-hover]"
    )

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart)
      el.addEventListener("mouseleave", handleHoverEnd)
    })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart)
        el.removeEventListener("mouseleave", handleHoverEnd)
      })
    }
  }, [])

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null
  }

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-9999 hidden md:block"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: isHovering ? 1.1 : 1,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "tween",
        ease: "linear",
        duration: 0,
      }}
      style={{
        translateX: "-2px",
        translateY: "-2px",
      }}
    >
      <svg
        width="18"
        height="24"
        viewBox="0 0 24 24"
        fill="#C6A14A"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 2L21 12L13 14L11 22L3 2Z" />
      </svg>
    </motion.div>
  )
}