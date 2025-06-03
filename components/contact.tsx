import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "shah.ayan2015@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=shah.ayan2015@gmail.com&su=Hello%20Ayan&body=Hi%20Ayan,%0A%0AI%20would%20like%20to%20connect%20with%20you.%0A%0ABest%20regards",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Mumbai, India",
      link: "https://maps.google.com/?q=Mumbai,India",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+91 9757202471",
      link: "tel:+919757202471",
    },
  ]

  return (
    <div className="w-full bg-muted/30">
      <section id="contact" className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a project in mind or want to discuss opportunities? I'd love to hear from you!
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50"
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="bg-primary/10 p-4 rounded-full">{info.icon}</div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors font-medium"
                            target={info.title === "Location" ? "_blank" : undefined}
                            rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground font-medium">{info.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8">
                <CardContent className="p-6 sm:p-8 text-center">
                  <h3 className="font-bold text-xl mb-4">Connect with me</h3>
                  <p className="text-muted-foreground mb-6">
                    Find me on these platforms or reach out directly via email
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                    <Button variant="default" size="lg" asChild className="w-full sm:w-auto">
                      <a href="https://github.com/AyanShah17" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="default" size="lg" asChild className="w-full sm:w-auto">
                      <a href="https://www.linkedin.com/in/ayan-shah/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=shah.ayan2015@gmail.com&su=Hello%20Ayan&body=Hi%20Ayan,%0A%0AI%20would%20like%20to%20connect%20with%20you.%0A%0ABest%20regards"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Mail className="h-5 w-5 mr-2" />
                        Email Me
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
