import { Github, Linkedin, Twitter } from "lucide-react"
import { ScrollSection, MagneticButton } from "@/components/animations"
import { EmailAnimation, IconGithub, IconLinkedin, IconTwitter } from "../animations/sections/contact-animation"

export function Contact() {

  return (
    <section
      id="contact"
      className="relative bg-[#0B0B0C] px-6 py-32 border-t border-[#1C1C21]"
    >
      <div className="mx-auto max-w-4xl">
        <ScrollSection>
          <h2 className="mb-4 text-center text-4xl font-bold text-[#F5F5F7] md:text-5xl lg:text-6xl">
            Conectemos
          </h2>

          <p className="mx-auto mb-16 max-w-2xl text-center text-[#A1A1AA]">
              ¿Tienes un proyecto en mente o quieres conversar? Estaré encantado de escucharte.
          </p>
        </ScrollSection>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Columna izquierda */}
          <ScrollSection delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-[#F5F5F7]">
                  Información de Contacto
                </h3>

                <p className="text-[#A1A1AA]">
                  Estoy abierto a nuevas oportunidades, colaboraciones o proyectos
                  interesantes donde pueda aportar valor con desarrollo de software.
                </p>
              </div>

              {/* Email sin icono */}
              <EmailAnimation
              >
                samuel.sotomayor.t@gmail.com
              </EmailAnimation>

              <div className="pt-12">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#A1A1AA]">
                  Redes Sociales
                </h4>

                <div className="flex gap-4">
                  {/* GitHub */}
                  <MagneticButton>
                    <IconGithub>
                      <Github className="h-5 w-5" />
                    </IconGithub>
                  </MagneticButton>

                  {/* LinkedIn */}
                  <MagneticButton>
                    <IconLinkedin>
                      <Linkedin className="h-5 w-5" />
                    </IconLinkedin>
                  </MagneticButton>

                  {/* X */}
                  <MagneticButton>
                    <IconTwitter>
                      <Twitter className="h-5 w-5" />
                    </IconTwitter>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </ScrollSection>

          {/* Formulario */}
          <ScrollSection delay={0.4}>
            <form
              className="space-y-6 rounded-3xl border border-[#1C1C21] bg-[#151518] p-8 shadow-[0_0_40px_rgba(0,0,0,0.4)]"
              // onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#F5F5F7]">
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  // value={formState.name}
                  // onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full rounded-xl border border-[#1C1C21] bg-[#0F0F11] px-4 py-3 text-[#F5F5F7] transition-colors focus:border-[#C6A75E] focus:outline-none"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#F5F5F7]">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  // value={formState.email}
                  // onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full rounded-xl border border-[#1C1C21] bg-[#0F0F11] px-4 py-3 text-[#F5F5F7] transition-colors focus:border-[#C6A75E] focus:outline-none"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#F5F5F7]">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  // value={formState.message}
                  // onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="min-h-32 w-full resize-none rounded-xl border border-[#1C1C21] bg-[#0F0F11] px-4 py-3 text-[#F5F5F7] transition-colors focus:border-[#C6A75E] focus:outline-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                />
              </div>

              <MagneticButton className="w-full">
                <button
                  type="submit"
                  // disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C6A75E] px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-[#E6C77A] disabled:opacity-50"
                >
                  {/* {isSubmitting ? "Enviando..." : "Enviar Mensaje"} */}
                  {"Enviar mensaje"}
                </button>
              </MagneticButton>
            </form>
          </ScrollSection>
        </div>
      </div>
    </section>
  )
}
