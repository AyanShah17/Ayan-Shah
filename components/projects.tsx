import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Server, Film, Sofa } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "SRE Project",
      description:
        "Site Reliability Engineering project focused on monitoring, automation, and infrastructure management. Implemented best practices for system reliability and performance optimization.",
      tags: ["Shell", "DevOps", "Monitoring", "Automation", "Infrastructure"],
      codeLink: "https://github.com/AyanShah17/SREproject",
      liveLink: null,
      icon: <Server className="h-10 w-10 text-primary" />,
    },
    {
      title: "Movie Recommendation System",
      description:
        "Dockerized ML-based app with <200ms average latency and auto-restart logic. Enabled error handling and logging, cutting downtime by 80%.",
      tags: ["Python", "Docker", "Machine Learning", "Monitoring", "Performance"],
      codeLink: "https://github.com/AyanShah17/Movie-Recommendation-System",
      liveLink: null,
      icon: <Film className="h-10 w-10 text-primary" />,
    },
    {
      title: "Furniture App",
      description:
        "Designed a user-friendly UI with custom layouts and product filtering. Integrated Firebase/Node.js for real-time data sync, authentication, and secure payments.",
      tags: ["Dart", "Firebase", "UI/UX", "Authentication", "Payments"],
      codeLink: "https://github.com/AyanShah17/furniture_app",
      liveLink: null,
      icon: <Sofa className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my Site Reliability Engineering and development projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <Card className="overflow-hidden h-full flex flex-col">
                  <CardContent className="project-content flex-1 flex flex-col p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-full bg-primary/10">{project.icon}</div>
                      <h3 className="text-lg font-bold">{project.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 flex-1">{project.description}</p>
                    <div className="project-tags mt-3">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-links mt-4 flex gap-2">
                      <Button size="sm" variant="default" asChild className="flex-1">
                        <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1 h-4 w-4" /> View Repository
                        </Link>
                      </Button>
                      {project.liveLink && (
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="https://github.com/AyanShah17" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" /> View More Projects on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
