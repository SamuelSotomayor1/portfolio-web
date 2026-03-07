"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

export function EmailAnimation({ children }: { children: ReactNode }) {
  return (
    <motion.a
        href="mailto:samuel.sotomayor.t@gmail.com"
        className="text-lg font-medium text-[#C6A75E] transition-colors hover:text-[#E6C77A] space-y-8"
        whileHover={{ x: 6 }}
    >
      {children}
    </motion.a>
  )
}

export function IconGithub({ children }: { children: ReactNode }) {
  return (
    <motion.a
        href="https://github.com/SamuelSotomayor1"
        aria-label="GitHub"
        target="_blank"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1C1C21] bg-[#151518] transition-all duration-300 hover:border-[#C6A75E] hover:bg-[#C6A75E] hover:text-black"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
    >
      {children}
    </motion.a>
  )
}

export function IconLinkedin({ children }: { children: ReactNode }) {
  return (
    <motion.a
        href="https://www.linkedin.com/in/samuel-sotomayor-torrez-808800293/"
        target="_blank"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1C1C21] bg-[#151518] transition-all duration-300 hover:border-[#C6A75E] hover:bg-[#C6A75E] hover:text-black"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="LinkedIn"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
    >
      {children}
    </motion.a>
  )
}

export function IconTwitter({ children }: { children: ReactNode }) {
  return (
    <motion.a
        href="https://x.com/Goal11_YT"
        target="_blank"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1C1C21] bg-[#151518] transition-all duration-300 hover:border-[#C6A75E] hover:bg-[#C6A75E] hover:text-black"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="X"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
    >
      {children}
    </motion.a>
  )
}

export function FormAnimation({ children }: { children: ReactNode }) {
  return (
    <motion.a
        className="space-y-6 rounded-3xl border border-[#1C1C21] bg-[#151518] p-8 shadow-[0_0_40px_rgba(0,0,0,0.4)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
    >
      {children}
    </motion.a>
  )
}

export function InputAnimation({ children }: { children: ReactNode }) {
  return (
    <motion.input
        id="name"
        type="text"
        // value={formState.name}
        // onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        className="w-full rounded-xl border border-[#1C1C21] bg-[#0F0F11] px-4 py-3 text-[#F5F5F7] transition-colors focus:border-[#C6A75E] focus:outline-none"
        placeholder="Tu nombre"
        required
        whileFocus={{ scale: 1.02 }}
    >
      {children}
    </motion.input>
  )
}