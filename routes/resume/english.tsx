import { PageProps } from "$fresh/server.ts";
import {
  DenoIcon,
  DockerIcon,
  FastApiIcon,
  GitHubIcon,
  GitIcon,
  JavaIcon,
  JavaScriptIcon,
  KubernetesIcon,
  LinuxIcon,
  MailIcon,
  MongoIcon,
  NodeJsIcon,
  PostgreSQLIcon,
  PythonIcon,
  ReactIcon,
  RedisIcon,
  RemixIcon,
  SpringIcon,
  SQLIcon,
  SqliteIcon,
  TailwindcssIcon,
  TypeScriptIcon,
  WebsiteIcon,
} from "../../components/SVGIcons.tsx";
import Print from "../../islands/Print.tsx";

export default function Resume(props: PageProps) {
  return (
    <main className="text-sm flex min-h-screen flex-col items-center justify-center gap-2 bg-gray-200 print:min-h-0">
      <div className="relative m-4 h-[297mm] w-[210mm] overflow-hidden rounded-md bg-white px-8 py-4 shadow-lg print:m-0 print:h-screen print:w-screen print:rounded-none print:shadow-none">
        <section className="mb-2 flex items-stretch justify-between border-b border-black p-1">
          <div className="flex flex-col gap-2">
            <div className="flex flex-1 flex-col justify-center gap-2">
              <h1 className="text-4xl font-bold">Tarek Messaoudi</h1>
              <h2 className="text-xl">Full Stack Developer</h2>
            </div>
            <div className="flex gap-4">
              <a
                href="https://tarek.messaoudi.dev"
                className="flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WebsiteIcon />
                tarek.messaoudi.dev
              </a>
              <a
                href="https://github.com/tmessaoudi"
                className="flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                github.com/tmessaoudi
              </a>
              <a
                href="mailto:tmessaoudi94@gmail.com"
                className="flex items-center gap-1"
              >
                <MailIcon />
                tmessaoudi94@gmail.com
              </a>
            </div>
          </div>
        </section>
        <section className="space-y-1 px-2 py-1">
          <h2 className="text-2xl font-bold">Education</h2>
          <div>
            <p className="flex justify-between font-bold">
              <span className="w-fit rounded-md bg-gray-300 px-2">
                IMT Lille-Douai
              </span>
              <span>2012 - 2017</span>
            </p>
            <p className="flex gap-1">
              <b>Software engineer major</b>
              <span className="text-neutral-700">
                // with a foreign semester in South Korea at Chugnam National Univ.
              </span>
            </p>
            <p className="italic">
              Internship at Capgemini, GFI, Alliance Française Limassol, Lille 2 University, Norauto
            </p>
          </div>
        </section>
        <section className="space-y-1 px-2 py-1">
          <h2 className="text-2xl font-bold">Technical Skills</h2>
          <p className="flex flex-wrap gap-2 indent-6">
            <span className="font-bold">Programming Languages:</span>
            <span className="flex items-center gap-1 indent-0">
              <TypeScriptIcon />
              TypeScript,
            </span>
            <span className="flex items-center gap-1 indent-0">
              <JavaScriptIcon />
              JavaScript,
            </span>
            <span className="flex items-center gap-1 indent-0">
              <PythonIcon />
              Python,
            </span>
            <span className="flex items-center gap-1 indent-0">
              <JavaIcon />
              Java
            </span>
          </p>
          <p className="flex flex-wrap gap-2 indent-6">
            <span className="font-bold">Frontend Development:</span>
            <span className="flex items-center gap-1 indent-0">
              <ReactIcon />
              React,
            </span>
            <span className="flex items-center gap-1 indent-0">
              <TailwindcssIcon />
              Tailwind CSS,
            </span>
            <span className="flex items-center gap-1 indent-0">
              <RemixIcon />
              Remix
            </span>
          </p>
          <p className="flex flex-wrap gap-2 indent-6">
            <span className="font-bold">Backend Development :</span>
            <span className="flex items-center gap-1 indent-0">
              <NodeJsIcon />
              NodeJs,
            </span>
            <span className="flex items-center gap-1 indent-0">
              <DenoIcon />
              Deno,
            </span>
            <span className="flex items-center gap-1 indent-0">
              <FastApiIcon />
              FastApi,
            </span>
            <span className="flex items-center gap-1 indent-0">
              <SpringIcon />
              Spring
            </span>
          </p>
          <p className="flex flex-wrap gap-2 indent-6">
            <span className="font-bold">Database :</span>
            <span className="flex items-center gap-1 indent-0">
              <PostgreSQLIcon />
              PostgresSQL,
            </span>
            <span className="flex items-center gap-1 indent-0">
              <SqliteIcon />
              SQLite,
            </span>
            <span className="flex items-center gap-1 indent-0">
              <MongoIcon />
              MongoDB,
            </span>
            <span className="flex items-center gap-1 indent-0">
              <RedisIcon />
              REDIS
            </span>
          </p>
          <p className="flex flex-wrap gap-2 indent-6">
            <span className="font-bold">Other Technologies:</span>
            <span className="flex items-center gap-1 indent-0">
              <DockerIcon />
              Docker,
            </span>
            <span className="flex items-center gap-1 indent-0">
              <KubernetesIcon />
              Kubernetes,
            </span>
            <span className="flex items-center gap-1 indent-0">
              <GitIcon />
              Git,
            </span>
            <span className="flex items-center gap-1 indent-0">
              <LinuxIcon />
              Linux
            </span>
          </p>
        </section>
        <section className="space-y-2 px-2 py-1">
          <h2 className="text-2xl font-bold">Work Experience</h2>
          <div>
            <p className="flex justify-between font-bold">
              <span className="w-fit rounded-md bg-gray-300 px-2">
                Full Stack Developer
              </span>
              <span>2020 - Present</span>
            </p>
            <p className="flex gap-1">
              <b>Qynapse</b>
              <span className="text-neutral-700">
                // A healthcare technology company specializing in neuroimaging and AI
              </span>
            </p>
            <p className="italic">
              <span className="flex items-center gap-1 indent-0">
                Qyscore Web App: <TypeScriptIcon /> / <ReactIcon /> / <TailwindcssIcon /> / <FastApiIcon /> /{" "}
                <SQLIcon /> / <RedisIcon />
              </span>
              <ul className="list-disc pl-6">
                <li>
                  Built a new viewer structure with Cornerstone and React Admin.
                </li>
                <li>Integrated Cypress for end-to-end testing.</li>
                <li>Optimized the cache and memory usage mechanism.</li>
              </ul>
              <span className="flex items-center gap-1 indent-0">
                Report: <PythonIcon /> / <DockerIcon />
              </span>
              <ul className="list-disc pl-6">
                <li>
                  Improved PDF generation with Puppeteer and enhanced testing procedures.
                </li>
                <li>Reworked the PDF generation process.</li>
                <li>Implemented internationalization with .pot files.</li>
              </ul>
              <span className="flex items-center gap-1 indent-0">
                DIMSE Agent: <PythonIcon /> / <DockerIcon />
              </span>
              <ul className="list-disc pl-6">
                <li>
                  Maintained the DIMSE agent for efficient and secure data ingestion.
                </li>
              </ul>
              <span className="flex items-center gap-1 indent-0">
                Libraries: <PythonIcon /> / <DockerIcon />
              </span>
              <ul className="list-disc pl-6">
                <li>
                  Created a normative library for percentiles and z-scores.
                </li>
                <li>Developed microservices for mesh and slice operations.</li>
              </ul>
            </p>
          </div>
          <div>
            <p className="flex justify-between font-bold">
              <span className="w-fit rounded-md bg-gray-300 px-2">
                Full Stack Developer
              </span>
              <span>2017 - 2020</span>
            </p>
            <p className="flex gap-1">
              <b>Alter Solutions</b>
              <span className="text-neutral-700">
                // A consulting and IT services company
              </span>
            </p>
            <p className="italic">
              <span className="flex items-center gap-1 indent-0">
                IRT System X: <TypeScriptIcon /> / <ReactIcon /> / <TailwindcssIcon /> / <NodeJsIcon />{" "}
                Central Dashboard promoting research project webservices
              </span>
              <ul className="list-disc pl-6">
                <li>Develop the whole application from scratch.</li>
              </ul>
              <span className="flex items-center gap-1 indent-0">
                SFR Altice Group: <TypeScriptIcon /> / <ReactIcon /> / <JavaIcon /> / <SpringIcon />{" "}
                Brand-new customer service web app
              </span>
              <ul className="list-disc pl-6">
                <li>
                  Refactor the whole custom CRM with new technologies and architecture.
                </li>
                <li>
                  Added core feature (Mail/SMS notification, Tray system, ...) .
                </li>
              </ul>
              <span className="flex items-center gap-1 indent-0">
                Thalès: <JavaScriptIcon /> / <ReactIcon /> / <JavaIcon />{" "}
                Local web app displaying military data from Excel file
              </span>
              <ul className="list-disc pl-6">
                <li>
                  Create a user-friendly tool for data vizualizing inventory file (.xlsx).
                </li>
              </ul>
              <span className="flex items-center gap-1 indent-0">
                PSA: <JavaIcon /> / <SpringIcon /> Online tool to parse automobile file format (.a2l and .hex, .ulp)
              </span>
              <ul className="list-disc pl-6">
                <li>
                  Set up a backend service for parsing efficiently raw data files.
                </li>
              </ul>
            </p>
          </div>
        </section>
        <section className="space-y-1 px-2 py-1">
          <h2 className="text-2xl font-bold">Projects & Rewards</h2>
          <p className="flex gap-1">
            <span className="font-bold">LOM</span>
            <span className="flex">
              (
              <a
                className="underline"
                href="https://github.com/tmessaoudi/js-canvas-map"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              ) -
            </span>
            <span className="italic">Browser strategy game.</span>
          </p>
          <p className="flex gap-1">
            <span className="font-bold">"Entreprise du Futur" Reward</span>
            <span className="flex">
              (
              <a
                className="underline"
                href="https://challengeentreprendre.wp.imt.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Site
              </a>
              ) -
            </span>
            <span className="italic">
              By Thalès, from Challenge Entreprendre.
            </span>
          </p>
        </section>
      </div>
      <Print />
    </main>
  );
}
