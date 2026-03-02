"use client"

import { CustomCursor } from "@/components/animations"
import HeroPage from "./home/page"
import SkillsPage from "./skills/page"
import ExperiencePage from "./experience/page"
import ProjectsPage from "./projects/page"
import ContactPage from "./contact/page"

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main>
        <HeroPage />
        <SkillsPage/>
        <ProjectsPage/>
        <ExperiencePage/>
        <ContactPage/>
      </main>
    </>
  )
}
