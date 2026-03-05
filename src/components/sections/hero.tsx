import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { TextReveal, MagneticButton} from "@/components/animations"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20 bg-[#0B0B0C]">

      {/* Gradiente muy sutil para profundidad */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0B0B0C] via-[#111113]/40 to-[#0B0B0C]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl text-[#F5F5F7]">
          <TextReveal delay={0.2}>Samuel</TextReveal>
          <br />
          <span className="text-[#C6A75E]">
            <TextReveal delay={0.5}>Sotomayor</TextReveal>
          </span>
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-[#A1A1AA] md:text-xl">
          <TextReveal delay={0.8}>
            Ingeniero Civil Informático especializado en el Desarrollo de Software Full-Stack.
            Diseño y construyo aplicaciones escalables, eficientes y orientadas a resolver problemas reales.
          </TextReveal>
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton>
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#C6A75E] px-8 py-4 font-semibold text-black transition-all hover:bg-[#D4B870] hover:scale-105"
            >
              <span>Ver mis proyectos</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowDown className="h-4 w-4 -rotate-90" />
              </motion.span>
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#26262B] bg-transparent px-8 py-4 font-semibold text-[#F5F5F7] transition-colors hover:bg-[#17171A]"
            >
              Ponte en contacto
            </a>
          </MagneticButton>
        </motion.div>

      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="h-6 w-6 text-[#71717A]" />
      </motion.div>

    </section>
  )
}
