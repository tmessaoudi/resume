import { Card, CardContent } from "../components/Card.tsx"
import { Badge } from "../components/Badge.tsx"
import { GitHubIcon, LinkedinIcon, MailIcon } from "../components/SVGIcons.tsx"


export function AboutMe() {
  const skills = ["TypeScript", "Deno", "Fresh", "React", "Node.js", "PostgreSQL", "Docker", "AWS", "Git", "Python"]

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Tarek Messaoudi
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-muted-foreground mb-6">Full Stack Developer & Problem Solver</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I’m based in France, but comfortable working remotely. I’m driven by solving tough problems whether it’s
        squeezing out extra performance in a data-heavy application or designing solutions for uncommon issues that
        don’t fit the usual patterns.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I’ve tackled challenges across diverse industries like automotive, telecom, research labs, voucher systems, and
        healthcare. Always bringing curiosity and an emphasis on clean, maintainable code.
            </p>


            <div className="flex gap-4 mb-8">
              <a href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <GitHubIcon className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <LinkedinIcon className="h-6 w-6" />
              </a>
              <a
                href="mailto:your@email.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <MailIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Technologies I Work With</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Currently Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Exploring Deno's ecosystem, WebAssembly, and advanced TypeScript patterns
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Interests</h4>
                  <p className="text-sm text-muted-foreground">
                    Open source, web performance, developer tools, and sustainable software development
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

