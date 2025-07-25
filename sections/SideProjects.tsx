import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/Card.tsx";
import { Badge } from "../components/Badge.tsx";
import { DenoIcon, GitHubIcon, ReactIcon, SqliteIcon, TypeScriptIcon, WebsiteIcon, ZigIcon } from "../components/SVGIcons.tsx";

export function SideProjects() {
  const projects = [
    {
      title: "Projet 'LOM'",
      description: "A persistent strategy/city-builder browser game ",
      image: "/placeholder.svg?height=200&width=400&text=Deno+Task+Runner",
      technologies: [
        { icon: <TypeScriptIcon />, label: "Typescript" },
        { icon: <ReactIcon />, label: "React" },
        { icon: <DenoIcon />, label: "Deno" },
        { icon: <SqliteIcon />, label: "SQLite" },
      ],
      githubUrl: "https://github.com/tmessaoudi/deno-lom",
    },
    {
      title: "Project 'KIB'",
      description: "A 2D total-war like multiplayer game",
      image: "/placeholder.svg?height=200&width=400&text=Deno+Task+Runner",
      technologies: [{ icon: <ZigIcon />, label: "Zig" }],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Side Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Personal projects I've built to explore new technologies and solve interesting problems.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Featured Projects</h3>
          <div className="grid grid-cols-2 gap-8">
            {projects.map((project, index) => (
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
                    {project.technologies.map((tech) => (
                      <Badge key={tech.label} variant="outline">
                        {tech.icon} {tech.label}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <button>
                        <a href={project.githubUrl} target="_blank">
                          <GitHubIcon className="h-4 w-4 mr-2" />
                        </a>
                      </button>
                    )}
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
  );
}
