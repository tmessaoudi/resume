import { type ComponentChildren, type ComponentType } from "preact";
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
  RabbitMQIcon,
  ReactIcon,
  RedisIcon,
  RemixIcon,
  SpringIcon,
  SqliteIcon,
  TailwindcssIcon,
  TanStackIcon,
  TypeScriptIcon,
  WebsiteIcon,
} from "../components/SVGIcons.tsx";
import Print from "../islands/Print.tsx";

export type Lang = "en" | "fr";
type Text = Record<Lang, string>;
// deno-lint-ignore no-explicit-any
type Icon = ComponentType<any>;
type Bullet = Text & { icon?: Icon };
type Project = { title: Text; icons: Icon[]; bullets: Text[] };
type Job = {
  role: Text;
  period: Text;
  company: string;
  blurb: Text;
  projects?: Project[];
  bullets?: Bullet[];
};

const LABELS = {
  headline: { en: "Full Stack Engineer, Medical Imaging", fr: "Ingénieur Full Stack, imagerie médicale" },
  work: { en: "Work Experience", fr: "Expérience professionnelle" },
  skills: { en: "Technical Skills", fr: "Compétences techniques" },
  education: { en: "Education", fr: "Formation" },
  projects: { en: "Projects & Rewards", fr: "Projets et distinctions" },
  degree: { en: "Software engineer major", fr: "Cursus ingénieur logiciel" },
  semester: {
    en: "// incl. a semester at Chungnam National Univ., South Korea",
    fr: "// dont un semestre à l'Univ. de Chungnam, Corée du Sud",
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
    role: { en: "Software Engineer", fr: "Ingénieur logiciel" },
    period: { en: "2026 - Present", fr: "2026 - Aujourd'hui" },
    company: "Chipiron",
    blurb: {
      en: "// Medtech building an ultra-low-field MRI scanner for breast imaging",
      fr: "// Medtech : IRM à ultra-bas champ dédiée au sein",
    },
    projects: [
      {
        title: { en: "🖥️ MRI Operator Web Application", fr: "🖥️ Application web opérateur pour IRM" },
        icons: [TypeScriptIcon, ReactIcon, TanStackIcon, TailwindcssIcon],
        bullets: [
          {
            en:
              "Built the app from scratch, including the exam workflow: drag-and-drop protocols, live scan progress, abort",
            fr:
              "Application créée de zéro, avec le parcours d'examen : protocoles en glisser-déposer, suivi en direct, arrêt",
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
        icons: [PythonIcon, ReactIcon, DockerIcon, RabbitMQIcon],
        bullets: [
          {
            en:
              "Connected Orthanc PACS storage, a reverse proxy with authenticated DICOMweb and a Cornerstone.js viewer",
            fr: "Stockage dans un PACS Orthanc, reverse proxy avec DICOMweb authentifié et visualiseur Cornerstone.js",
          },
        ],
      },
      {
        title: { en: "🏥 RIS/PACS Integration", fr: "🏥 Intégration RIS/PACS" },
        icons: [PythonIcon, FastApiIcon, ReactIcon],
        bullets: [
          {
            en:
              "Imported RIS orders as planned exams via DICOM Modality Worklist, with patient data carried into DICOM files",
            fr:
              "Demandes RIS converties en examens planifiés via DICOM Modality Worklist, données patient dans les DICOM",
          },
          {
            en: "Sent series to a PACS via C-STORE with per-series retry; added patient search and data erasure",
            fr:
              "Envoi des séries vers un PACS en C-STORE avec relance par série ; recherche patient, effacement des données",
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
    role: { en: "Full Stack Engineer", fr: "Ingénieur Full Stack" },
    period: { en: "2020 - 2025", fr: "2020 - 2025" },
    company: "Qynapse",
    blurb: {
      en: "// Healthcare technology company in neuroimaging and AI",
      fr: "// Technologies de santé, neuro-imagerie et IA",
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
        title: { en: "🧬 Reporting & Domain Tools", fr: "🧬 Rapports et outils métier" },
        icons: [PythonIcon, DockerIcon],
        bullets: [
          {
            en:
              "Rebuilt the report pipeline (Jinja2 + Puppeteer) with templates per language and disease (Dementia, MS, ...)",
            fr:
              "Pipeline de rapports refait (Jinja2 + Puppeteer) avec des modèles par langue et pathologie (démence, SEP, ...)",
          },
          {
            en: "Built a normative Python library for imaging metrics and a 3D mesh microservice for structural MRI",
            fr:
              "Bibliothèque Python normative de métriques d'imagerie et microservice de maillage 3D pour l'IRM structurelle",
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
            en:
              "Expanded the customer-deployed DIMSE agent with routing logic and detailed logging; built an HL7 v2 client",
            fr:
              "Évolution de l'agent DIMSE déployé chez les clients (routage, journalisation détaillée) ; client HL7 v2",
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
        en: "IRT System X: built a central dashboard for research project web services from scratch",
        fr: "IRT System X : tableau de bord central des services web de projets de recherche, créé de zéro",
      },
      {
        en: "SFR Altice: refactored the customer-service CRM with a new architecture and Mail/SMS notifications",
        fr: "SFR Altice : refonte du CRM du service client, nouvelle architecture et notifications e-mail/SMS",
        icon: JavaIcon,
      },
      {
        en: "Thalès: built a local web app to visualize military inventory data from Excel files",
        fr: "Thalès : application web locale de visualisation de données militaires d'inventaire issues d'Excel",
        icon: JavaIcon,
      },
      {
        en: "PSA: built a backend service to parse raw automotive files (.a2l, .hex, .ulp)",
        fr: "PSA : service back-end d'analyse de fichiers automobiles bruts (.a2l, .hex, .ulp)",
        icon: JavaIcon,
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
    items: [[ReactIcon, "React"], [TanStackIcon, "TanStack"], [TailwindcssIcon, "Tailwind CSS"], [RemixIcon, "Remix"]],
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
    ], [RabbitMQIcon, "RabbitMQ"]],
  },
];

function Bullets({ items, lang }: { items: Bullet[]; lang: Lang }) {
  return (
    <ul class="list-disc pl-6">
      {items.map(({ icon: BulletIcon, ...item }) => (
        <li key={item.en}>
          {BulletIcon
            ? (
              <span class="flex items-center justify-between">
                {item[lang]}
                <BulletIcon />
              </span>
            )
            : item[lang]}
        </li>
      ))}
    </ul>
  );
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
              <h2 class="text-2xl font-semibold">{LABELS.headline[lang]}</h2>
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
        <section class="space-y-4 px-2 py-1">
          <h2 class="text-xl font-bold">{LABELS.work[lang]}</h2>
          {JOBS.map((job) => (
            <div key={job.company}>
              <p class="flex items-center justify-between">
                <span class="flex items-center gap-1">
                  <span class="w-fit rounded-lg bg-gray-300 px-2 pt-1 mb-1 -ml-2 font-extrabold">{job.company}</span>
                  <b>{job.role[lang]}</b>
                  <span class="text-neutral-700">{job.blurb[lang]}</span>
                </span>
                <span class="shrink-0 font-extrabold">{job.period[lang]}</span>
              </p>
              {job.projects?.map((project) => (
                <div key={project.title.en} class="mt-1">
                  <span class="flex items-center justify-between font-semibold">
                    {project.title[lang]}
                    <span class="flex gap-2">
                      {project.icons.map((ProjectIcon, index) => <ProjectIcon key={index} />)}
                    </span>
                  </span>
                  <Bullets items={project.bullets} lang={lang} />
                </div>
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
          <p class="flex items-center justify-between">
            <span class="flex items-center gap-1">
              <span class="w-fit rounded-lg bg-gray-300 px-2 pt-1 mb-1 -ml-2 font-bold">IMT Lille-Douai</span>
              <b>{LABELS.degree[lang]}</b>
              <span class="text-neutral-700">{LABELS.semester[lang]}</span>
            </span>
            <span class="font-bold">2012 - 2017</span>
          </p>
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
