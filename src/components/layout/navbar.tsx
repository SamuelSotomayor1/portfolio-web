"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { MagneticButton } from "@/components/animations"
import Link from "next/link"

const navLinks = [
  { name: "Skills", href: "/skills" },
  { name: "Proyectos", href: "/projects" },
  { name: "Experiencia", href: "/experience" },
  { name: "Contacto", href: "/contact" },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* HEADER */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 h-20 bg-[#0B0B0C] border-b"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        <nav className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">

          {/* LOGO */}
          <MagneticButton>
            <Link
              href="/"
              className="text-xl font-bold tracking-wide text-[#F5F5F7]"
            >
              <motion.span whileHover={{ scale: 1.05 }}>
                Samuel Sotomayor
              </motion.span>
            </Link>
          </MagneticButton>

          {/* DESKTOP */}
          <ul className="hidden items-center gap-10 md:flex">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <MagneticButton>
                  <Link
                    href={link.href}
                    className="group relative text-sm font-medium text-[#A1A1AA] transition-colors duration-300 hover:text-[#F5F5F7]"
                  >
                    {link.name}

                    <span className="absolute -bottom-1 left-0 h-0.5 **:w-0 bg-[#C6A75E] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </MagneticButton>
              </motion.li>
            ))}
          </ul>

          {/* MOBILE BUTTON */}
          <motion.button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1C1C21] bg-[#151518] text-[#F5F5F7] md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-[#0B0B0C]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-3xl font-semibold text-[#F5F5F7] transition-colors hover:text-[#C6A75E]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/contact"
                className="mt-6 inline-block rounded-full bg-[#C6A75E] px-10 py-4 text-lg font-semibold text-black transition-all duration-300 hover:bg-[#E6C77A]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hablemos
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
