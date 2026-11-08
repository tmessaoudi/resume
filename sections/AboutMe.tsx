import { Card, CardContent } from "../components/Card.tsx";
import {
  DenoIcon,
  DockerIcon,
  FastApiIcon,
  FreshIcon,
  GitHubIcon,
  GitIcon,
  KubernetesIcon,
  LinkedinIcon,
  MailIcon,
  NodeJsIcon,
  PostgreSQLIcon,
  PythonIcon,
  ReactIcon,
  RedisIcon,
  ResumeIcon,
  SqliteIcon,
  TypeScriptIcon,
  ZigIcon,
} from "../components/SVGIcons.tsx";

const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;
const yearsOfExperience = Math.floor((Date.now() - Date.UTC(2017, 0)) / MS_PER_YEAR);

const technologies = [
  { icon: <TypeScriptIcon />, label: "Typescript" },
  { icon: <ReactIcon />, label: "React" },
  { icon: <DenoIcon />, label: "Deno" },
  { icon: <FreshIcon />, label: "Fresh" },
  { icon: <PythonIcon />, label: "Python" },
  { icon: <FastApiIcon />, label: "Fastapi" },
  { icon: <NodeJsIcon />, label: "Node" },
  { icon: <PostgreSQLIcon />, label: "PostgreSQL" },
  { icon: <SqliteIcon />, label: "Sqlite" },
  { icon: <RedisIcon />, label: "Redis" },
  { icon: <KubernetesIcon />, label: "Kubernetes" },
  { icon: <DockerIcon />, label: "Docker" },
  { icon: <GitIcon />, label: "Git" },
];

export function AboutMe() {
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
            <h2 className="text-xl sm:text-2xl text-muted-foreground mb-6">
              Full Stack Engineer specializing in medical imaging software
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I’m a software engineer with {yearsOfExperience}{" "}
              years of experience, based in France and comfortable working remotely. For the past six years I’ve built
              medical imaging software: DICOM pipelines, MRI viewers and an operator application for an MRI scanner. I’m
              driven by tough problems, whether it’s squeezing out extra performance in a data-heavy application or
              designing solutions for uncommon issues that don’t fit the usual patterns.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I’ve tackled challenges across diverse industries like automotive, telecom, research labs, voucher
              systems, and healthcare. Always bringing curiosity and an emphasis on clean, maintainable code.
            </p>

            <div className="flex gap-4 mb-8">
              <a title="Github" href="https://github.com/tmessaoudi">
                <GitHubIcon class="w-8 h-8" />
              </a>
              <a title="Mail" href="mailto:tarek@messaoudi.dev">
                <MailIcon class="w-8 h-8" />
              </a>
              <a title="Linkedin" href="https://www.linkedin.com/in/tmessaoudi/">
                <LinkedinIcon class="pt-0.5 w-8 h-8" />
              </a>
              <a title="Curriculum Vitae" href="/resume/en">
                <ResumeIcon class="pt-0.5 w-8 h-8" />
              </a>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Technologies I Work With</h3>
              <div className="flex flex-wrap gap-x-3 gap-y-2 mb-6 text-sm">
                {technologies.map(({ icon, label }) => (
                  <span key={label} className="inline-flex items-center gap-1">
                    {icon} {label}
                  </span>
                ))}
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Currently Learning</h4>
                  <p className="text-sm text-muted-foreground flex flex-wrap items-center gap-x-1">
                    <span>Exploring low-level languages like</span>
                    <ZigIcon class="h-5 w-5" />
                    <span>Zig, HTTP streaming, ...</span>
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Interests</h4>
                  <p className="text-sm text-muted-foreground">
                    ⚔️ Grand Strategy games 📜 History/Fantasy books 🎮 Browser Gamedev
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
