import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SkillsVisualization from "./skills-visualization"

export default function Experience() {
  const experiences = [
    {
      title: "IT Intern (Junior Software Engineer)",
      company: "Prowess Infotech",
      period: "Aug 2024 - Nov 2024",
      location: "Riyadh, Saudi Arabia (Remote)",
      achievements: [
        "Worked on 2+ dynamic websites with focus on reliability, performance optimization, and seamless functionality",
        "Built 1+ low-code applications with Microsoft PowerApps, implementing monitoring and automation to boost productivity by 10%",
        "Developed 1+ Flutter apps with comprehensive error handling and performance monitoring, achieving 70% user satisfaction rate",
        "Delivered 3+ interfaces with built-in reliability features and monitoring dashboards, improving system observability by 10%",
        "Implemented CI/CD pipelines and deployment automation for reliable application delivery",
        "Collaborated with development teams to ensure scalable, fault-tolerant system architecture",
      ],
    },
    {
      title: "Junior Web Developer",
      company: "Nibodh Solutions Pvt. Ltd.",
      period: "Mar 2022 - Jul 2022",
      location: "Mumbai, India (Remote)",
      achievements: [
        "Built and maintained 6 responsive websites with automated deployment pipelines and performance monitoring",
        "Achieved 75% client satisfaction through reliable system delivery and proactive incident management",
        "Converted 50% of initial clients into long-term partners by implementing robust monitoring and support systems",
        "Established automated backup and recovery processes, ensuring 99.5% uptime across all client websites",
        "Implemented performance optimization strategies, reducing page load times by 40%",
        "Created comprehensive logging and alerting systems for proactive issue detection and resolution",
      ],
    },
    {
      title: "Junior Server Manager (Server Management & Discord Manager)",
      company: "Ekeeda Private Ltd.",
      period: "Jan 2022 - Mar 2022",
      location: "Lower Parel, India (Remote)",
      achievements: [
        "Managed server infrastructure supporting 2000+ users with 99.5% uptime through proactive monitoring",
        "Enhanced community engagement through automated bot systems and event management, connecting with users in one week",
        "Implemented comprehensive server monitoring and alerting systems for real-time performance tracking",
        "Developed automated incident response procedures, reducing mean time to recovery by 60%",
        "Optimized server performance and resource utilization, improving response times by 35%",
        "Created automated backup and disaster recovery processes ensuring data integrity and system resilience",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and key accomplishments
            </p>
          </div>

          <div className="space-y-8 mt-12">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <Card className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                        <Badge variant="outline" className="mb-1 md:mb-0">
                          {experience.period}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{experience.location}</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-20" id="skills">
            <SkillsVisualization />
          </div>
        </div>
      </div>
    </section>
  )
}
