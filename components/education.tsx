import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic background and qualifications
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-primary/10 p-6 flex items-center gap-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">B.E. – Artificial Intelligence & Data Science</h3>
                      <p className="text-muted-foreground">VPPCOE, Mumbai | GPA: 8.22 | Nov 2022 – 2025 (Completed)</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground">
                      Completed Bachelor of Engineering in Artificial Intelligence & Data Science with excellent
                      academic performance. Gained comprehensive knowledge in AI/ML algorithms, data analytics,
                      intelligent systems, and modern software engineering practices. The program provided strong
                      foundation in system design, reliability engineering, and scalable application development.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-primary/10 p-6 flex items-center gap-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Diploma – Information Technology</h3>
                      <p className="text-muted-foreground">
                        Government Polytechnic Mumbai | GPA: 86.42% | Aug 2019 – Aug 2022
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground">
                      Completed comprehensive Information Technology diploma program with excellent academic
                      performance. Gained strong foundation in programming, database management, web development, and
                      system administration that laid the groundwork for my career in Site Reliability Engineering and
                      software development.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
