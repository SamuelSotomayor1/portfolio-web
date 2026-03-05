"use client"

import { CustomCursor } from "@/components/animations"
import { Contact, Experience, Hero, Projects, Skills } from "@/components/sections"

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main>
        <Hero/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
      </main>
    </>
  )
}
