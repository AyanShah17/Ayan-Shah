import { Card, CardContent } from "@/components/ui/card"
import { Code2, Globe, Server, Users } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: "Site Reliability Engineering",
      description: "Expertise in Python, Docker, CI/CD, Prometheus, and Grafana for system reliability",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Cloud & Infrastructure",
      description: "Proficient with Supabase, Firebase, Heroku, and monitoring solutions",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Performance Optimization",
      description: "Improved uptime from 97% to 99.9% and reduced incident response time by 30%",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Automation & Monitoring",
      description: "Automated CI/CD pipelines and integrated comprehensive monitoring solutions",
    },
  ]

  return (
    <div className="w-full bg-muted/30">
      <section id="about" className="py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Site Reliability Engineer with 1+ year of experience in automating deployments, monitoring systems, and
                ensuring 99.9% uptime. Skilled in Python, Docker, CI/CD, and cloud infrastructure.
              </p>
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                Specialized in reliability, performance, and scalability with a strong focus on automation and
                monitoring. Experienced in managing infrastructure supporting thousands of users while maintaining high
                availability and optimizing system performance across web and mobile platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="animate-in">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-2 rounded-full bg-primary/10">{feature.icon}</div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
