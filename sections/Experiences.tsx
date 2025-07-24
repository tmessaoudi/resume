import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/Card.tsx";
import { Badge } from "../components/Badge.tsx";
import { CalendarDays, MapPin } from "lucide-preact";
import {
  DockerIcon,
  FastApiIcon,
  KubernetesIcon,
  PostgreSQLIcon,
  PythonIcon,
  ReactIcon,
  RedisIcon,
  TailwindcssIcon,
  TypeScriptIcon,
  JavaIcon,
  SpringIcon,
  NodeJsIcon,
  MongoIcon
} from "../components/SVGIcons.tsx";

export function Experiences() {
  const experiences = [
    {
      title: "Senior Full Stack Engineer",
      company: "Qynapse",
      location: "Remote",
      period: "2020 - Present",
      description:
        "Led full-stack development of a medical imaging platform, with a focus on DICOM, performance, and scalable infrastructure.",
      achievements: [
        "Rebuilt a neuroimaging web app end-to-end, from React UI to FastAPI backend and Kubernetes pipelines",
        "Improved api and database request performance by up to 70%",
        "Rework or created multiple pipeline microservices",
      ],
      technologies: [
        { icon: <TypeScriptIcon />, label: "Typescript" },
        { icon: <ReactIcon />, label: "React" },
        { icon: <TailwindcssIcon />, label: "Tailwindcss" },
        { icon: <PythonIcon />, label: "Python" },
        { icon: <FastApiIcon />, label: "FastAPI" },
        { icon: <PostgreSQLIcon />, label: "PostgreSQL" },
        { icon: <RedisIcon />, label: "Redis" },
        { icon: <KubernetesIcon />, label: "Kubernetes" },
        { icon: <DockerIcon />, label: "Docker" },
      ],
    },
    {
      title: "Full Stack Engineer",
      company: "Alter Solutions",
      location: "Paris, FR",
      period: "2017 - 2020",
      description:
        "Developed multiple client projects from conception to deployment.",
      achievements: [
        "Built 5+ production applications from scratch",
        "Rework a central CRM with microservices",
      ],
      technologies: [
        { icon: <TypeScriptIcon />, label: "Typescript" },
        { icon: <ReactIcon />, label: "React" },
        { icon: <TailwindcssIcon />, label: "Tailwindcss" },
        { icon: <NodeJsIcon />, label: "NodeJs" },
        { icon: <JavaIcon />, label: "Java" },
        { icon: <SpringIcon />, label: "Spring" },
        { icon: <PostgreSQLIcon />, label: "PostgreSQL" },
        { icon: <MongoIcon />, label: "Mongo" },
      ],
    },
  ];

  return (
    <section
      id="experiences"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in software development, building solutions and growing
            with amazing teams.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-foreground">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech.label} variant="outline">
                        {tech.icon} {tech.label}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
