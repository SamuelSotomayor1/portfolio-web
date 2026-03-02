"use client"

import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0B0B0C] border-t border-[#1C1C21] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">

        <motion.p
          className="text-sm text-[#A1A1AA]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © {currentYear} Samuel Sotomayor. Todos los derechos reservados.
        </motion.p>

        <motion.p
          className="text-sm text-[#A1A1AA]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Construido con{" "}
          <motion.span
            className="text-[#C6A75E] font-medium"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          >
            v0
          </motion.span>{" "}
          y Next.js
        </motion.p>

      </div>
    </footer>
  )
}