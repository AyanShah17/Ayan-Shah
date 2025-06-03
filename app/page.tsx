import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ayan Shah | Site Reliability Engineer",
  description:
    "Portfolio of Ayan Shah, a Site Reliability Engineer specializing in Python, Docker, CI/CD, and cloud infrastructure with focus on reliability and performance.",
}

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </div>
  )
}
