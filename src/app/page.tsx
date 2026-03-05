"use client"

import { Contact, Experience, Hero, Projects, Skills } from "@/components/sections"

export default function Home() {
  return (
    <>
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
