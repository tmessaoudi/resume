import { Card, CardContent } from "../components/Card.tsx";
import {
  DenoIcon,
  FreshIcon,
  GitHubIcon,
  LinkedinIcon,
  MailIcon,
  PostgreSQLIcon,
  NodeJsIcon,
  PythonIcon,
  ReactIcon,
  RedisIcon,
  SqliteIcon,
  TypeScriptIcon,
  FastApiIcon,
  GitIcon, 
  KubernetesIcon,
  DockerIcon,
  ZigIcon,
  ResumeIcon
} from "../components/SVGIcons.tsx";

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
            <h2 className="text-xl sm:text-2xl text-muted-foreground mb-6">Full Stack Developer & Problem Solver</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I’m based in France, but comfortable working remotely. I’m driven by solving tough problems whether it’s
              squeezing out extra performance in a data-heavy application or designing solutions for uncommon issues
              that don’t fit the usual patterns.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I’ve tackled challenges across diverse industries like automotive, telecom, research labs, voucher
              systems, and healthcare. Always bringing curiosity and an emphasis on clean, maintainable code.
            </p>

            <div className="flex gap-4 mb-8">
              <a title="Github" href="https://github.com/tmessaoudi" ><GitHubIcon class="w-8 h-8" /></a>
              <a title="Mail" href="tarek@messaoudi.dev" ><MailIcon class="w-8 h-8" /></a>
              <a title="Linkedin" href="https://www.linkedin.com/in/tmessaoudi/" ><LinkedinIcon class="pt-0.5 w-8 h-8" /></a>
              <a title="Curriculum Vitae" href="/resume/en" ><ResumeIcon class="pt-0.5 w-8 h-8" /></a>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Technologies I Work With</h3>
              <div className="flex flex-wrap gap-2 mb-6 text-sm">
                <TypeScriptIcon /> Typescript
                <ReactIcon /> React
                <DenoIcon /> Deno
                <FreshIcon /> Fresh
                <PythonIcon /> Python
                <FastApiIcon /> Fastapi
                <NodeJsIcon /> Node
                <PostgreSQLIcon /> PostgreSQL
                <SqliteIcon /> Sqlite
                <RedisIcon /> Redis
                <KubernetesIcon /> Kubernetes
                <DockerIcon/> Docker
                <GitIcon /> Git

              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Currently Learning</h4>
                  <p className="text-sm text-muted-foreground flex">
                    Exploring more low-level language like zig <ZigIcon class="mx-2 h-5 w-5" />, HTTP streaming, ...
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
