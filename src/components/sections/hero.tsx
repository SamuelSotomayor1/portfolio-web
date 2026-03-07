import { MagneticButton} from "@/components/animations"
import { ArrowDown } from "lucide-react"
import { ArrowMove, FadeIn } from "../animations/sections/hero-animation"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20 bg-[#0B0B0C]">

      {/* Gradiente muy sutil para profundidad */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0B0B0C] via-[#111113]/40 to-[#0B0B0C]" />
  
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <FadeIn>
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl text-[#F5F5F7]">
            Samuel
          <br />
          <span className="text-[#C6A75E]">
            Sotomayor
          </span>
        </h1>


        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-[#A1A1AA] md:text-xl">
            Ingeniero Civil Informático especializado en el Desarrollo de Software Full-Stack.
            Diseño y construyo aplicaciones escalables, eficientes y orientadas a resolver problemas reales.
        </p>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#C6A75E] px-8 py-4 font-semibold text-black transition-all hover:bg-[#D4B870] hover:scale-105"
              >
                <span>Ver mis proyectos</span>
                <ArrowMove>
                  <ArrowDown className="h-4 w-4 -rotate-90" />
                </ArrowMove>
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
          </div>
        </FadeIn>

      </div>

    </section>
  )
}
