"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react"
import { ScrollSection, TextReveal, CharacterReveal, MagneticButton } from "@/components/animations"

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
]

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative bg-secondary/30 px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <ScrollSection>
          <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
            <CharacterReveal>{"Let's Connect"}</CharacterReveal>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
            <TextReveal delay={0.3}>
              Have a project in mind or just want to chat? I would love to hear from you.
            </TextReveal>
          </p>
        </ScrollSection>

        <div className="grid gap-12 md:grid-cols-2">
          <ScrollSection delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-2xl font-bold">Get in Touch</h3>
                <p className="text-muted-foreground">
                  I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-4">
                <motion.a
                  href="mailto:hello@example.com"
                  className="group flex items-center gap-3 text-lg"
                  whileHover={{ x: 10 }}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>hello@example.com</span>
                </motion.a>
              </div>

              <div>
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Social Links
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <MagneticButton key={social.label}>
                      <motion.a
                        href={social.href}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </motion.a>
                    </MagneticButton>
                  ))}
                </div>
              </div>
            </div>
          </ScrollSection>

          <ScrollSection delay={0.4}>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-3xl border border-border bg-card p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <motion.input
                  id="name"
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                  placeholder="Your name"
                  required
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <motion.input
                  id="email"
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                  placeholder="your@email.com"
                  required
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="min-h-32 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                  placeholder="Tell me about your project..."
                  required
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <MagneticButton className="w-full">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground transition-opacity disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="h-5 w-5 rounded-full border-2 border-primary-foreground border-t-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                  ) : isSubmitted ? (
                    "Message Sent!"
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </motion.button>
              </MagneticButton>
            </motion.form>
          </ScrollSection>
        </div>
      </div>
    </section>
  )
}
