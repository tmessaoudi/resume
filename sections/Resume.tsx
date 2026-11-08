import { type ComponentChildren, type ComponentType, Fragment } from "preact";
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
  SqliteIcon,
  TailwindcssIcon,
  TypeScriptIcon,
  WebsiteIcon,
} from "../components/SVGIcons.tsx";
import Print from "../islands/Print.tsx";

export type Lang = "en" | "fr";
type Text = Record<Lang, string>;
// deno-lint-ignore no-explicit-any
type Icon = ComponentType<any>;
type Project = { title: Text; icons: Icon[]; bullets: Text[] };
type Job = {
  role: Text;
  period: Text;
  company: string;
  blurb: Text;
  projects?: Project[];
  bullets?: Text[];
};

const LABELS = {
  headline: { en: "Full Stack Engineer, Medical Imaging", fr: "Ingénieur Full Stack, imagerie médicale" },
  work: { en: "Work Experience", fr: "Expérience professionnelle" },
  skills: { en: "Technical Skills", fr: "Compétences techniques" },
  education: { en: "Education", fr: "Formation" },
  projects: { en: "Projects & Rewards", fr: "Projets et distinctions" },
  degree: { en: "Software engineer major", fr: "Cursus ingénieur logiciel" },
  semester: {
    en: "// with a foreign semester in South Korea at Chungnam National Univ.",
    fr: "// avec un semestre en Corée du Sud à l'Université nationale de Chungnam",
  },
  lom: { en: "Browser strategy game", fr: "Jeu de stratégie sur navigateur" },
  reward: { en: '"Entreprise du Futur" Reward', fr: "Prix « Entreprise du Futur »" },
  rewardBy: { en: "By Thalès, from Challenge Entreprendre", fr: "Décerné par Thalès, Challenge Entreprendre" },
};

const PRINT = {
  en: {
    pdf: "/resume-en.pdf",
    filename: "Tarek's Resume",
    downloadLabel: "Download PDF",
    printLabel: "Print",
    otherHref: "/resume/fr",
    otherLabel: "Français",
  },
  fr: {
    pdf: "/resume-fr.pdf",
    filename: "CV Tarek Messaoudi",
    downloadLabel: "Télécharger le PDF",
    printLabel: "Imprimer",
    otherHref: "/resume/en",
    otherLabel: "English",
  },
};

const JOBS: Job[] = [
  {
    role: { en: "Software Engineer, Medical Imaging", fr: "Ingénieur logiciel, imagerie médicale" },
    period: { en: "2026 - Present", fr: "2026 - Aujourd'hui" },
    company: "Chipiron",
    blurb: { en: "// An MRI scanner company", fr: "// Entreprise de scanners IRM" },
    projects: [
      {
        title: { en: "🖥️ MRI Operator Web Application", fr: "🖥️ Application web opérateur pour IRM" },
        icons: [TypeScriptIcon, ReactIcon, TailwindcssIcon],
        bullets: [
          {
            en: "Built the app from the first commit as its main developer, shipping 14 feature releases in six months",
            fr:
              "Application créée dès le premier commit, en développeur principal : 14 versions fonctionnelles en six mois",
          },
          {
            en: "Designed the exam workflow: drag-and-drop protocols, step-based execution, live scan progress, abort",
            fr:
              "Conception du parcours d'examen : protocoles en glisser-déposer, exécution par étapes, suivi en direct, arrêt",
          },
          {
            en: "Built a JSON Schema-driven form engine for acquisition parameters, with server-side field validation",
            fr:
              "Moteur de formulaires piloté par JSON Schema pour les paramètres d'acquisition, avec validation serveur",
          },
        ],
      },
      {
        title: { en: "🩻 DICOM Imaging Integration", fr: "🩻 Intégration de l'imagerie DICOM" },
        icons: [PythonIcon, ReactIcon, DockerIcon],
        bullets: [
          {
            en: "Connected Orthanc PACS storage, an authenticated DICOMweb proxy and a Cornerstone.js viewer",
            fr: "Stockage dans un PACS Orthanc, proxy DICOMweb authentifié et visualiseur Cornerstone.js",
          },
        ],
      },
      {
        title: { en: "🔐 Access Control & Quality", fr: "🔐 Contrôle d'accès et qualité" },
        icons: [PythonIcon, FastApiIcon, PostgreSQLIcon],
        bullets: [
          {
            en: "Implemented authentication and role-based access control in a FastAPI service",
            fr: "Authentification et contrôle d'accès par rôles dans un service FastAPI",
          },
          {
            en: "Introduced front-end testing from scratch (Vitest, MSW, Playwright) and OpenAPI-generated API types",
            fr: "Mise en place des tests front-end (Vitest, MSW, Playwright) et types d'API générés depuis OpenAPI",
          },
        ],
      },
    ],
  },
  {
    role: { en: "Full Stack Engineer, Medical Imaging", fr: "Ingénieur Full Stack, imagerie médicale" },
    period: { en: "2020 - 2025", fr: "2020 - 2025" },
    company: "Qynapse",
    blurb: {
      en: "// A healthcare technology company specializing in neuroimaging and AI",
      fr: "// Entreprise de technologies de santé spécialisée en neuro-imagerie et IA",
    },
    projects: [
      {
        title: {
          en: "🧠 Medical Imaging Web Platform Redesign",
          fr: "🧠 Refonte de la plateforme web d'imagerie médicale",
        },
        icons: [
          TypeScriptIcon,
          ReactIcon,
          TailwindcssIcon,
          PythonIcon,
          FastApiIcon,
          PostgreSQLIcon,
          RedisIcon,
        ],
        bullets: [
          {
            en: "Refactored with a new admin panel, interactive data visualizations, and a robust MRI viewer, ...",
            fr:
              "Nouveau panneau d'administration, visualisations de données interactives et visualiseur IRM robuste, ...",
          },
          {
            en: "Added segmentation correction, lesion tracking, 3D rendering, oblique views and multi-modality",
            fr:
              "Ajout de la correction de segmentation, du suivi de lésions, du rendu 3D, des vues obliques et du multimodal",
          },
        ],
      },
      {
        title: { en: "📝 Reporting System Overhaul", fr: "📝 Refonte du système de rapports" },
        icons: [PythonIcon, DockerIcon],
        bullets: [
          {
            en:
              "Rebuilt the report pipeline (Jinja2 + Puppeteer) with templates per language and disease (Dementia, MS, ...)",
            fr:
              "Pipeline de rapports refait (Jinja2 + Puppeteer) avec des modèles par langue et pathologie (démence, SEP, ...)",
          },
        ],
      },
      {
        title: {
          en: "📦 Scalable Infrastructure & Microservices",
          fr: "📦 Infrastructure scalable et microservices",
        },
        icons: [PythonIcon, DockerIcon, KubernetesIcon],
        bullets: [
          {
            en: "Contributed to converting the academic BrainVisa platform into a Kubernetes-based scalable pipeline",
            fr: "Participation à la conversion de la plateforme académique BrainVisa en pipeline Kubernetes scalable",
          },
          {
            en: "Expanded the customer-deployed DIMSE agent with routing logic and detailed logging",
            fr: "Évolution de l'agent DIMSE déployé chez les clients : logique de routage et journalisation détaillée",
          },
        ],
      },
      {
        title: { en: "🧬 Domain-Specific Tools", fr: "🧬 Outils métier" },
        icons: [PythonIcon, DockerIcon],
        bullets: [
          {
            en: "Built a normative Python library for imaging metrics (z-scores, percentiles, asymmetry, ...)",
            fr: "Bibliothèque Python normative pour les métriques d'imagerie (z-scores, percentiles, asymétrie, ...)",
          },
          {
            en: "Developed a 3D mesh microservice for structural MRI data",
            fr: "Microservice de maillage 3D pour les données d'IRM structurelle",
          },
        ],
      },
    ],
  },
  {
    role: { en: "Full Stack Engineer", fr: "Ingénieur Full Stack" },
    period: { en: "2017 - 2020", fr: "2017 - 2020" },
    company: "Alter Solutions",
    blurb: {
      en: "// A consulting and IT services company",
      fr: "// Société de conseil et de services informatiques",
    },
    bullets: [
      {
        en: "Built web apps from scratch for IRT System X (research dashboard), Thalès (inventory), PSA (file parser)",
        fr:
          "Applications web créées de zéro pour IRT System X (recherche), Thalès (inventaire), PSA (parseur de fichiers)",
      },
      {
        en: "Refactored SFR Altice's customer-service CRM with a new architecture and Mail/SMS notifications",
        fr: "Refonte du CRM du service client de SFR Altice : nouvelle architecture et notifications e-mail/SMS",
      },
    ],
  },
];

const SKILLS: { label: Text; items: [Icon, string][] }[] = [
  {
    label: { en: "Programming Languages:", fr: "Langages :" },
    items: [
      [TypeScriptIcon, "TypeScript"],
      [JavaScriptIcon, "JavaScript"],
      [PythonIcon, "Python"],
      [JavaIcon, "Java"],
    ],
  },
  {
    label: { en: "Frontend Development:", fr: "Front-end :" },
    items: [[ReactIcon, "React"], [TailwindcssIcon, "Tailwind CSS"], [RemixIcon, "Remix"]],
  },
  {
    label: { en: "Backend Development:", fr: "Back-end :" },
    items: [[NodeJsIcon, "NodeJs"], [DenoIcon, "Deno"], [FastApiIcon, "FastApi"], [
      SpringIcon,
      "Spring",
    ]],
  },
  {
    label: { en: "Databases:", fr: "Bases de données :" },
    items: [[PostgreSQLIcon, "PostgreSQL"], [SqliteIcon, "SQLite"], [MongoIcon, "MongoDB"], [
      RedisIcon,
      "REDIS",
    ]],
  },
  {
    label: { en: "Other Technologies:", fr: "Autres technologies :" },
    items: [[DockerIcon, "Docker"], [KubernetesIcon, "Kubernetes"], [GitIcon, "Git"], [
      LinuxIcon,
      "Linux",
    ]],
  },
];

function Bullets({ items, lang }: { items: Text[]; lang: Lang }) {
  return <ul class="list-disc pl-6">{items.map((item) => <li key={item.en}>{item[lang]}</li>)}</ul>;
}

function ExternalLink({ href, children }: { href: string; children: ComponentChildren }) {
  return (
    <a class="underline" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export function Resume({ lang }: { lang: Lang }) {
  return (
    <main class="text-[13px] flex min-h-screen flex-col items-center justify-center gap-2 bg-gray-200 print:min-h-0">
      <a href="/" className="absolute top-7 left-4 border border-blue-700 rounded-lg">
        <BackIcon className="w-10 h-10" />
      </a>
      <div class="relative m-4 min-h-[297mm] w-[210mm] rounded-md bg-white px-8 py-4 shadow-lg print:m-0 print:min-h-0 print:w-full print:py-0 print:rounded-none print:shadow-none">
        <section class="mb-2 flex items-stretch justify-between border-b border-black p-1">
          <div class="flex flex-col gap-2">
            <div class="flex flex-1 flex-col justify-center gap-2">
              <h1 class="text-3xl font-bold">Tarek Messaoudi</h1>
              <h2 class="text-xl">{LABELS.headline[lang]}</h2>
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
              <a href="mailto:tarek@messaoudi.dev" class="flex items-center gap-1">
                <MailIcon />
                tarek@messaoudi.dev
              </a>
              <a href="https://www.linkedin.com/in/tmessaoudi" class="flex items-center gap-1">
                <LinkedinIcon />
                /tmessaoudi
              </a>
            </div>
          </div>
        </section>
        <section class="space-y-2 px-2 py-1">
          <h2 class="text-xl font-bold">{LABELS.work[lang]}</h2>
          {JOBS.map((job) => (
            <div key={job.company}>
              <p class="flex justify-between font-extrabold">
                <span class="w-fit rounded-lg bg-gray-300 px-2 pt-1 mb-1 -ml-2">{job.role[lang]}</span>
                <span>{job.period[lang]}</span>
              </p>
              <p class="flex gap-1">
                <b>{job.company}</b>
                <span class="text-neutral-700">{job.blurb[lang]}</span>
              </p>
              {job.projects?.map((project) => (
                <Fragment key={project.title.en}>
                  <span class="flex items-center justify-between font-medium">
                    {project.title[lang]}
                    <span class="flex gap-2">
                      {project.icons.map((ProjectIcon, index) => <ProjectIcon key={index} />)}
                    </span>
                  </span>
                  <Bullets items={project.bullets} lang={lang} />
                </Fragment>
              ))}
              {job.bullets && <Bullets items={job.bullets} lang={lang} />}
            </div>
          ))}
        </section>
        <section class="px-2 py-1">
          <h2 class="text-xl font-bold">{LABELS.skills[lang]}</h2>
          {SKILLS.map((group) => (
            <p key={group.label.en} class="flex flex-wrap gap-2 indent-6">
              <span class="font-bold">{group.label[lang]}</span>
              {group.items.map(([SkillIcon, name], index) => (
                <span key={name} class="flex items-center gap-1 indent-0">
                  <SkillIcon />
                  {name}
                  {index < group.items.length - 1 && ","}
                </span>
              ))}
            </p>
          ))}
        </section>
        <section class="space-y-1 px-2 py-1">
          <h2 class="text-xl font-bold">{LABELS.education[lang]}</h2>
          <div>
            <p class="flex justify-between font-bold">
              <span class="w-fit rounded-lg bg-gray-300 px-2 pt-1 mb-1 -ml-2">IMT Lille-Douai</span>
              <span>2012 - 2017</span>
            </p>
            <p class="flex gap-1">
              <b>{LABELS.degree[lang]}</b>
              <span class="text-neutral-700">{LABELS.semester[lang]}</span>
            </p>
          </div>
        </section>
        <section class="space-y-1 px-2 py-1">
          <h2 class="text-xl font-bold">{LABELS.projects[lang]}</h2>
          <p class="flex gap-1">
            <span class="font-bold">LOM</span>
            <span class="flex">
              (<ExternalLink href="https://github.com/tmessaoudi/lom-legacy">GitHub</ExternalLink>) -
            </span>
            <span class="italic">{LABELS.lom[lang]}</span>
          </p>
          <p class="flex gap-1">
            <span class="font-bold">{LABELS.reward[lang]}</span>
            <span class="flex">
              (<ExternalLink href="https://challengeentreprendre.wp.imt.fr/">Site</ExternalLink>) -
            </span>
            <span class="italic">{LABELS.rewardBy[lang]}</span>
          </p>
        </section>
      </div>
      <Print {...PRINT[lang]} />
      <style>{"@page { size: A4; margin: 6mm 0; }"}</style>
    </main>
  );
}
