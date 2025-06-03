import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Certifications() {
  const achievements = [
    {
      title: "99.9% System Uptime Achievement",
      description: "Improved system uptime from 97% to 99.9% across mobile and web platforms",
      type: "Performance",
      date: "2024",
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
    },
    {
      title: "40% Release Time Reduction",
      description: "Automated CI/CD pipelines reducing deployment time by 40% across multiple applications",
      type: "Automation",
      date: "2024",
      icon: <CheckCircle className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "30% Incident Response Improvement",
      description: "Integrated monitoring solutions reducing incident response time by 30%",
      type: "Monitoring",
      date: "2024",
      icon: <CheckCircle className="h-6 w-6 text-purple-500" />,
    },
    {
      title: "2000+ User Community Growth",
      description: "Successfully managed infrastructure supporting 2000+ users with high engagement",
      type: "Scale",
      date: "2022",
      icon: <CheckCircle className="h-6 w-6 text-orange-500" />,
    },
  ]

  const certifications = [
    {
      title: "Software Engineering Job Simulation",
      issuer: "Forage",
      description: "Advanced software engineering simulation covering modern development practices and methodologies",
      date: "Feb 2025",
      credentialId: "GNBDgBwjoL3BinkDu",
      verifyLink:
        "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_GNBDgBwjoL3BinkDu_1740328818812_completion_certificate.pdf",
      type: "Professional",
    },
    {
      title: "Cloud Platform Job Simulation",
      issuer: "Forage",
      description: "Comprehensive technology consulting simulation focusing on client solutions and technical strategy",
      date: "Feb 2025",
      credentialId: "GNBDgBwjoL3BinkDu",
      verifyLink:
        "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/uu47f3odrfruEWjKw/aNJGnRtgfiK5fQqcR_uu47f3odrfruEWjKw_GNBDgBwjoL3BinkDu_1739450763001_completion_certificate.pdf",
      type: "Professional",
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Performance":
        return "bg-green-500/10 text-green-500"
      case "Automation":
        return "bg-blue-500/10 text-blue-500"
      case "Monitoring":
        return "bg-purple-500/10 text-purple-500"
      case "Scale":
        return "bg-orange-500/10 text-orange-500"
      default:
        return "bg-gray-500/10 text-gray-500"
    }
  }

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Certifications & Achievements
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Professional achievements and certifications that demonstrate my expertise
            </p>
          </div>

          {/* Achievements Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Key Achievements</h3>
              <p className="text-muted-foreground">Measurable impacts and professional milestones</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-full bg-primary/10 mt-1">{achievement.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-lg">{achievement.title}</h4>
                          <Badge variant="outline" className={getTypeColor(achievement.type)}>
                            {achievement.type}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">{achievement.description}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {achievement.date}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Professional Certifications Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Professional Certifications</h3>
              <p className="text-muted-foreground">Industry-recognized certifications and job simulations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-full bg-primary/10 mt-1">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-2">{cert.title}</h4>
                        <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                        <p className="text-muted-foreground mb-3">{cert.description}</p>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {cert.date}
                          </div>
                          {cert.verifyLink && (
                            <Button variant="outline" size="sm" asChild>
                              <Link href={cert.verifyLink} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-1 h-3 w-3" /> Show Credential
                              </Link>
                            </Button>
                          )}
                        </div>
                        {cert.credentialId && (
                          <p className="text-xs text-muted-foreground">Credential ID: {cert.credentialId}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
{/*           <div className="text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">All Certificates</h3>
                <p className="text-muted-foreground mb-4">
                  View my complete collection of certificates and credentials
                </p>
                <Button asChild>
                  <Link href="https://github.com/AyanShah17" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> View My GitHub Projects
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </div>
    </section>
  )
}
