export function About() {
  return (
    <section
      id="about"
      className="relative bg-[#111113] px-6 py-32 border-t border-[#1C1C21]"
    >

      <div className="relative z-10 mx-auto max-w-5xl">
        
        {/* Title */}
        <h2 className="mb-6 text-center text-4xl font-bold md:text-5xl lg:text-6xl text-[#F5F5F7]">
          Sobre <span className="text-[#C6A75E]">mí</span>
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-[#A1A1AA]">
          Conoce un poco más sobre mi experiencia, enfoque y las tecnologías
          que utilizo para construir productos digitales modernos.
        </p>

        {/* Content */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          
          {/* Imagen */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-3xl border border-[#1C1C21] bg-[#111113]">
              {/* Aquí puedes poner tu foto */}
              <div className="flex h-full items-center justify-center text-[#A1A1AA]">
                Foto
              </div>
            </div>

            {/* Glow sutil */}
            <div className="absolute inset-0 rounded-3xl border border-[#C6A75E] opacity-10" />
          </div>

          {/* Texto */}
          <div className="space-y-6 text-[#A1A1AA] leading-relaxed">
            <p>
              Soy <span className="text-[#F5F5F7] font-medium">Ingeniero Civil Informático</span> con
              enfoque en el desarrollo de software full-stack. Me apasiona
              construir aplicaciones que combinan diseño moderno,
              rendimiento y escalabilidad.
            </p>

            <p>
              Trabajo principalmente con tecnologías como{" "}
              <span className="text-[#F5F5F7]">React, Next.js, TypeScript y Node.js</span>,
              creando soluciones digitales enfocadas en resolver problemas
              reales y ofrecer experiencias de usuario fluidas.
            </p>

            <p>
              Mi objetivo es seguir creciendo como desarrollador,
              participando en proyectos desafiantes donde pueda aportar
              tanto en arquitectura de software como en experiencia de usuario.
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#1C1C21] bg-[#111113] px-4 py-1 text-sm text-[#A1A1AA] transition-all hover:border-[#C6A75E] hover:text-[#F5F5F7]"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}