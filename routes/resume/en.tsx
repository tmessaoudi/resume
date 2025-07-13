import { PageProps } from "$fresh/server.ts";
import {
BackIcon,
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
  LinkedinIcon
} from "../../components/SVGIcons.tsx";
import Print from "../../islands/Print.tsx";

export default function Resume(props: PageProps) {
  return (
    <main class="text-sm flex min-h-screen flex-col items-center justify-center gap-2 bg-gray-200 print:min-h-0">
      <a href="/" type="" className="absolute top-7 left-4 border border-blue-700 rounded-lg"> <BackIcon className="w-10 h-10" /></a>
      <div class="relative m-4 h-[297mm] w-[210mm] overflow-hidden rounded-md bg-white px-8 py-4 shadow-lg print:m-0 print:h-screen print:w-screen print:rounded-none print:shadow-none">
        <section class="mb-2 flex items-stretch justify-between border-b border-black p-1">
          <div class="flex flex-col gap-2">
            <div class="flex flex-1 flex-col justify-center gap-2">
              <h1 class="text-4xl font-bold">Tarek Messaoudi</h1>
              <h2 class="text-xl">Full Stack Developer</h2>
            </div>
            <div class="flex gap-4">
              <a
                href="https://tarek.messaoudi.dev"
                class="flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WebsiteIcon />
                tarek.messaoudi.dev
              </a>
              <a
                href="https://github.com/tmessaoudi"
                class="flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                github.com/tmessaoudi
              </a>
              <a
                href="mailto:tmessaoudi94@gmail.com"
                class="flex items-center gap-1"
              >
                <MailIcon />
                tmessaoudi94@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/tmessaoudi/"
                class="flex items-center gap-1"
              >
                <LinkedinIcon />
                /tmessaoudi
              </a>
            </div>
          </div>
        </section>
        <section class="space-y-1 px-2 py-1">
          <h2 class="text-2xl font-bold">Education</h2>
          <div>
            <p class="flex justify-between font-bold">
              <span class="w-fit rounded-md bg-gray-300 px-2">
                IMT Lille-Douai
              </span>
              <span>2012 - 2017</span>
            </p>
            <p class="flex gap-1">
              <b>Software engineer major</b>
              <span class="text-neutral-700">
                // with a foreign semester in South Korea at Chugnam National Univ.
              </span>
            </p>
            <p class="italic">
              Internship at Capgemini, GFI, Alliance Française Limassol, Lille 2 University, Norauto
            </p>
          </div>
        </section>
        <section class="space-y-1 px-2 py-1">
          <h2 class="text-2xl font-bold">Technical Skills</h2>
          <p class="flex flex-wrap gap-2 indent-6">
            <span class="font-bold">Programming Languages:</span>
            <span class="flex items-center gap-1 indent-0">
              <TypeScriptIcon />
              TypeScript,
            </span>
            <span class="flex items-center gap-1 indent-0">
              <JavaScriptIcon />
              JavaScript,
            </span>
            <span class="flex items-center gap-1 indent-0">
              <PythonIcon />
              Python,
            </span>
            <span class="flex items-center gap-1 indent-0">
              <JavaIcon />
              Java
            </span>
          </p>
          <p class="flex flex-wrap gap-2 indent-6">
            <span class="font-bold">Frontend Development:</span>
            <span class="flex items-center gap-1 indent-0">
              <ReactIcon />
              React,
            </span>
            <span class="flex items-center gap-1 indent-0">
              <TailwindcssIcon />
              Tailwind CSS,
            </span>
            <span class="flex items-center gap-1 indent-0">
              <RemixIcon />
              Remix
            </span>
          </p>
          <p class="flex flex-wrap gap-2 indent-6">
            <span class="font-bold">Backend Development :</span>
            <span class="flex items-center gap-1 indent-0">
              <NodeJsIcon />
              NodeJs,
            </span>
            <span class="flex items-center gap-1 indent-0">
              <DenoIcon />
              Deno,
            </span>
            <span class="flex items-center gap-1 indent-0">
              <FastApiIcon />
              FastApi,
            </span>
            <span class="flex items-center gap-1 indent-0">
              <SpringIcon />
              Spring
            </span>
          </p>
          <p class="flex flex-wrap gap-2 indent-6">
            <span class="font-bold">Database :</span>
            <span class="flex items-center gap-1 indent-0">
              <PostgreSQLIcon />
              PostgresSQL,
            </span>
            <span class="flex items-center gap-1 indent-0">
              <SqliteIcon />
              SQLite,
            </span>
            <span class="flex items-center gap-1 indent-0">
              <MongoIcon />
              MongoDB,
            </span>
            <span class="flex items-center gap-1 indent-0">
              <RedisIcon />
              REDIS
            </span>
          </p>
          <p class="flex flex-wrap gap-2 indent-6">
            <span class="font-bold">Other Technologies:</span>
            <span class="flex items-center gap-1 indent-0">
              <DockerIcon />
              Docker,
            </span>
            <span class="flex items-center gap-1 indent-0">
              <KubernetesIcon />
              Kubernetes,
            </span>
            <span class="flex items-center gap-1 indent-0">
              <GitIcon />
              Git,
            </span>
            <span class="flex items-center gap-1 indent-0">
              <LinuxIcon />
              Linux
            </span>
          </p>
        </section>
        <section class="space-y-2 px-2 py-1">
          <h2 class="text-2xl font-bold">Work Experience</h2>
          <div>
            <p class="flex justify-between font-bold">
              <span class="w-fit rounded-md bg-gray-300 px-2">
                Full Stack Developer
              </span>
              <span>2020 - Present</span>
            </p>
            <p class="flex gap-1">
              <b>Qynapse</b>
              <span class="text-neutral-700">
                // A healthcare technology company specializing in neuroimaging and AI
              </span>
            </p>
            <p class="italic">
              <span class="flex items-center gap-1 indent-0">
                Qyscore Web App: <TypeScriptIcon /> / <ReactIcon /> / <TailwindcssIcon /> / <FastApiIcon /> /{" "}
                <SQLIcon /> / <RedisIcon />
              </span>
              <ul class="list-disc pl-6">
                <li>
                  Built a new viewer structure with Cornerstone and React Admin.
                </li>
                <li>Integrated Cypress for end-to-end testing.</li>
                <li>Optimized the cache and memory usage mechanism.</li>
              </ul>
              <span class="flex items-center gap-1 indent-0">
                Report: <PythonIcon /> / <DockerIcon />
              </span>
              <ul class="list-disc pl-6">
                <li>
                  Improved PDF generation with Puppeteer and enhanced testing procedures.
                </li>
                <li>Reworked the PDF generation process.</li>
                <li>Implemented internationalization with .pot files.</li>
              </ul>
              <span class="flex items-center gap-1 indent-0">
                DIMSE Agent: <PythonIcon /> / <DockerIcon />
              </span>
              <ul class="list-disc pl-6">
                <li>
                  Maintained the DIMSE agent for efficient and secure data ingestion.
                </li>
              </ul>
              <span class="flex items-center gap-1 indent-0">
                Libraries: <PythonIcon /> / <DockerIcon />
              </span>
              <ul class="list-disc pl-6">
                <li>
                  Created a normative library for percentiles and z-scores.
                </li>
                <li>Developed microservices for mesh and slice operations.</li>
              </ul>
            </p>
          </div>
          <div>
            <p class="flex justify-between font-bold">
              <span class="w-fit rounded-md bg-gray-300 px-2">
                Full Stack Developer
              </span>
              <span>2017 - 2020</span>
            </p>
            <p class="flex gap-1">
              <b>Alter Solutions</b>
              <span class="text-neutral-700">
                // A consulting and IT services company
              </span>
            </p>
            <p class="italic">
              <span class="flex items-center gap-1 indent-0">
                IRT System X: <TypeScriptIcon /> / <ReactIcon /> / <TailwindcssIcon /> / <NodeJsIcon />{" "}
                Central Dashboard promoting research project webservices
              </span>
              <ul class="list-disc pl-6">
                <li>Develop the whole application from scratch.</li>
              </ul>
              <span class="flex items-center gap-1 indent-0">
                SFR Altice Group: <TypeScriptIcon /> / <ReactIcon /> / <JavaIcon /> / <SpringIcon />{" "}
                Brand-new customer service web app
              </span>
              <ul class="list-disc pl-6">
                <li>
                  Refactor the whole custom CRM with new technologies and architecture.
                </li>
                <li>
                  Added core feature (Mail/SMS notification, Tray system, ...) .
                </li>
              </ul>
              <span class="flex items-center gap-1 indent-0">
                Thalès: <JavaScriptIcon /> / <ReactIcon /> / <JavaIcon />{" "}
                Local web app displaying military data from Excel file
              </span>
              <ul class="list-disc pl-6">
                <li>
                  Create a user-friendly tool for data vizualizing inventory file (.xlsx).
                </li>
              </ul>
              <span class="flex items-center gap-1 indent-0">
                PSA: <JavaIcon /> / <SpringIcon /> Online tool to parse automobile file format (.a2l and .hex, .ulp)
              </span>
              <ul class="list-disc pl-6">
                <li>
                  Set up a backend service for parsing efficiently raw data files.
                </li>
              </ul>
            </p>
          </div>
        </section>
        <section class="space-y-1 px-2 py-1">
          <h2 class="text-2xl font-bold">Projects & Rewards</h2>
          <p class="flex gap-1">
            <span class="font-bold">LOM</span>
            <span class="flex">
              (
              <a
                class="underline"
                href="https://github.com/tmessaoudi/js-canvas-map"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              ) -
            </span>
            <span class="italic">Browser strategy game.</span>
          </p>
          <p class="flex gap-1">
            <span class="font-bold">"Entreprise du Futur" Reward</span>
            <span class="flex">
              (
              <a
                class="underline"
                href="https://challengeentreprendre.wp.imt.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Site
              </a>
              ) -
            </span>
            <span class="italic">
              By Thalès, from Challenge Entreprendre.
            </span>
          </p>
        </section>
      </div>
      <Print />
    </main>
  );
}
