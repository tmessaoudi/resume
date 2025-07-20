import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/Card.tsx"
import { Badge } from "../components/Badge.tsx"
import { WebsiteIcon, GitHubIcon } from "../components/SVGIcons.tsx"

export function SideProjects() {
  const projects = [
    {
      title: "Deno Task Runner",
      description:
        "A powerful task automation tool built with Deno and Fresh. Features include task scheduling, dependency management, and real-time monitoring.",
      image: "/placeholder.svg?height=200&width=400&text=Deno+Task+Runner",
      technologies: ["Deno", "Fresh", "TypeScript", "WebSockets"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      stars: 124,
      featured: true,
    },
    {
      title: "API Documentation Generator",
      description:
        "Automatically generates beautiful API documentation from TypeScript interfaces and JSDoc comments. Supports multiple output formats.",
      image: "/placeholder.svg?height=200&width=400&text=API+Docs+Generator",
      technologies: ["TypeScript", "Node.js", "Markdown", "HTML"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      stars: 89,
      featured: true,
    }
  ]

  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Side Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Personal projects I've built to explore new technologies and solve interesting problems.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button>
                      <a href={project.githubUrl} target="_blank">
                        <GitHubIcon className="h-4 w-4 mr-2" />

                      </a>
                    </button>
                    {project.liveUrl && (
                      <button>
                        <a href={project.liveUrl} target="_blank">
                          <WebsiteIcon className="h-4 w-4 mr-2" />
                        </a>
                      </button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        </div>
    </section>
  )
}
