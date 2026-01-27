"use client"

import { CustomCursor } from "@/components/animations"
import { Navbar, Footer } from "@/components/layout"
import { Hero, Skills, Projects, Experience, Contact } from "@/components/sections"

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
