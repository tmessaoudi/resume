import { type PageProps } from "$fresh/server.ts";

const SITE = "https://tarek.messaoudi.dev";
const HOME = {
  lang: "en",
  title: "Tarek Messaoudi | Full Stack Engineer, Medical Imaging",
  description:
    "Full stack engineer based in France, building medical imaging software: DICOM pipelines, MRI viewers and MRI scanner applications.",
};
const PAGES: Record<string, typeof HOME> = {
  "/": HOME,
  "/resume/en": {
    lang: "en",
    title: "Resume | Tarek Messaoudi",
    description: "Resume of Tarek Messaoudi, full stack engineer specializing in medical imaging software.",
  },
  "/resume/fr": {
    lang: "fr",
    title: "CV | Tarek Messaoudi",
    description: "CV de Tarek Messaoudi, ingénieur full stack spécialisé dans les logiciels d'imagerie médicale.",
  },
};

export default function App({ Component, url }: PageProps) {
  const page = PAGES[url.pathname];
  const { lang, title, description } = page ?? HOME;
  return (
    <html lang={lang}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {page && <meta property="og:url" content={`${SITE}${url.pathname}`} />}
        {page && <link rel="canonical" href={`${SITE}${url.pathname}`} />}
        <meta name="twitter:card" content="summary" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
