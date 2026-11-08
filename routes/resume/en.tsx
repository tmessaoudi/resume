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
  LinkedinIcon,
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
    <main class="text-[13px] flex min-h-screen flex-col items-center justify-center gap-2 bg-gray-200 print:min-h-0">
      <a href="/" type="" className="absolute top-7 left-4 border border-blue-700 rounded-lg">
        <BackIcon className="w-10 h-10" />
      </a>
      <div class="relative m-4 min-h-[297mm] w-[210mm] rounded-md bg-white px-8 py-4 shadow-lg print:m-0 print:min-h-0 print:w-full print:py-0 print:rounded-none print:shadow-none">
        <section class="mb-2 flex items-stretch justify-between border-b border-black p-1">
          <div class="flex flex-col gap-2">
            <div class="flex flex-1 flex-col justify-center gap-2">
              <h1 class="text-3xl font-bold">Tarek Messaoudi</h1>
              <h2 class="text-xl">Full Stack Engineer</h2>
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
                href="mailto:tarek@messaoudi.dev"
                class="flex items-center gap-1"
              >
                <MailIcon />
                tarek@messaoudi.dev
              </a>
              <a
                href="https://www.linkedin.com/in/tmessaoudi"
                class="flex items-center gap-1"
              >
                <LinkedinIcon />
                /tmessaoudi
              </a>
            </div>
          </div>
        </section>
        <section class="space-y-2 px-2 py-1">
          <h2 class="text-xl font-bold">Work Experience</h2>
          <div>
            <p class="flex justify-between font-extrabold">
              <span class="w-fit rounded-lg bg-gray-300 px-2 pt-1 mb-1 -ml-2">
                Software Engineer
              </span>
              <span>2026 - Present</span>
            </p>
            <p class="flex gap-1">
              <b>Chipiron</b>
              <span class="text-neutral-700">
                // An MRI scanner company
              </span>
            </p>
            <p>
              <span class="flex items-center justify-between font-medium">
                🖥️ MRI Operator Web Application
                <span class="flex gap-2">
                  <TypeScriptIcon /> <ReactIcon /> <TailwindcssIcon />
                </span>
              </span>
              <ul class="list-disc pl-6">
                <li>
                  Built the app from the first commit as its main developer, shipping 14 feature releases in six months
                </li>
                <li>
                  Designed the exam workflow: drag-and-drop protocols, step-based execution, live scan progress, abort
                </li>
                <li>
                  Built a JSON Schema-driven form engine for acquisition parameters, with server-side field validation
                </li>
              </ul>
              <span class="flex items-center justify-between font-medium">
                🩻 DICOM Imaging Integration
                <span class="flex gap-2">
                  <PythonIcon /> <ReactIcon /> <DockerIcon />
                </span>
              </span>
              <ul class="list-disc pl-6">
                <li>Connected Orthanc PACS storage, an authenticated DICOMweb proxy and a Cornerstone.js viewer</li>
              </ul>
              <span class="flex items-center justify-between font-medium">
                🔐 Access Control & Quality
                <span class="flex gap-2">
                  <PythonIcon /> <FastApiIcon /> <PostgreSQLIcon />
                </span>
              </span>
              <ul class="list-disc pl-6">
                <li>Implemented authentication and role-based access control in a FastAPI service</li>
                <li>
                  Introduced front-end testing from scratch (Vitest, MSW, Playwright) and OpenAPI-generated API types
                </li>
              </ul>
            </p>
          </div>
          <div>
            <p class="flex justify-between font-extrabold">
              <span class="w-fit rounded-lg bg-gray-300 px-2 pt-1 mb-1 -ml-2">
                Senior Full Stack Engineer
              </span>
              <span>2020 - 2025</span>
            </p>
            <p class="flex gap-1">
              <b>Qynapse</b>
              <span class="text-neutral-700">
                // A healthcare technology company specializing in neuroimaging and AI
              </span>
            </p>
            <p>
              <span class="flex items-center justify-between font-medium">
                🧠 Medical Imaging Web Platform Redesign
                <span class="flex gap-2">
                  <TypeScriptIcon /> <ReactIcon /> <TailwindcssIcon /> <PythonIcon /> <FastApiIcon /> <PostgreSQLIcon />
                  {" "}
                  <RedisIcon />
                </span>
              </span>
              <ul class="list-disc pl-6">
                <li>
                  Refactored with a new admin panel, interactive data visualizations, and a robust MRI viewer, ...
                </li>
                <li>Added segmentation correction, lesion tracking, 3D rendering, oblique views and multi-modality</li>
              </ul>
              <span class="flex items-center justify-between font-medium">
                📝 Reporting System Overhaul{" "}
                <span class="flex gap-2">
                  <PythonIcon /> <DockerIcon />
                </span>
              </span>
              <ul class="list-disc pl-6">
                <li>
                  Rebuilt the report pipeline (Jinja2 + Puppeteer) with templates per language and disease (Dementia,
                  MS, ...)
                </li>
              </ul>
              <span class="flex items-center justify-between font-medium">
                📦 Scalable Infrastructure & Microservices{" "}
                <span class="flex gap-2">
                  <PythonIcon /> <DockerIcon /> <KubernetesIcon />
                </span>
              </span>
              <ul class="list-disc pl-6">
                <li>
                  Contributed to converting the academic BrainVisa platform into a Kubernetes-based scalable pipeline
                </li>
                <li>Expanded the customer-deployed DIMSE agent with routing logic and detailed logging</li>
              </ul>
              <span class="flex items-center justify-between font-medium">
                🧬 Domain-Specific Tools{" "}
                <span class="flex gap-2">
                  <PythonIcon /> <DockerIcon />
                </span>
              </span>
              <ul class="list-disc pl-6">
                <li>Built a normative Python library for imaging metrics (z-scores, percentiles, asymmetry, ...)</li>
                <li>Developed a 3D mesh microservice for structural MRI data</li>
              </ul>
            </p>
          </div>
          <div>
            <p class="flex justify-between font-extrabold">
              <span class="w-fit rounded-lg bg-gray-300 px-2 pt-1 mb-1 -ml-2">
                Full Stack Engineer
              </span>
              <span>2017 - 2020</span>
            </p>
            <p class="flex gap-1">
              <b>Alter Solutions</b>
              <span class="text-neutral-700">
                // A consulting and IT services company
              </span>
            </p>
            <ul class="list-disc pl-6">
              <li>
                Built web apps from scratch for IRT System X (research dashboard), Thalès (inventory), PSA (file parser)
              </li>
              <li>Refactored SFR Altice's customer-service CRM with a new architecture and Mail/SMS notifications</li>
            </ul>
          </div>
        </section>
        <section class="px-2 py-1">
          <h2 class="text-xl font-bold">Technical Skills</h2>
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
            <span class="font-bold">Databases :</span>
            <span class="flex items-center gap-1 indent-0">
              <PostgreSQLIcon />
              PostgreSQL,
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
        <section class="space-y-1 px-2 py-1">
          <h2 class="text-xl font-bold">Education</h2>
          <div>
            <p class="flex justify-between font-bold">
              <span class="w-fit rounded-lg bg-gray-300 px-2 pt-1 mb-1 -ml-2">
                IMT Lille-Douai
              </span>
              <span>2012 - 2017</span>
            </p>
            <p class="flex gap-1">
              <b>Software engineer major</b>
              <span class="text-neutral-700">
                // with a foreign semester in South Korea at Chungnam National Univ.
              </span>
            </p>
          </div>
        </section>
        <section class="space-y-1 px-2 py-1">
          <h2 class="text-xl font-bold">Projects & Rewards</h2>
          <p class="flex gap-1">
            <span class="font-bold">LOM</span>
            <span class="flex">
              (
              <a
                class="underline"
                href="https://github.com/tmessaoudi/lom-legacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              ) -
            </span>
            <span class="italic">Browser strategy game</span>
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
              By Thalès, from Challenge Entreprendre
            </span>
          </p>
        </section>
      </div>
      <Print />
      <style>{"@page { size: A4; margin: 6mm 0; }"}</style>
    </main>
  );
}
