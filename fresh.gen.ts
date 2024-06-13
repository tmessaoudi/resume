// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $index from "./routes/index.tsx";
import * as $resume_english from "./routes/resume/english.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $Print from "./islands/Print.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/index.tsx": $index,
    "./routes/resume/english.tsx": $resume_english,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
    "./islands/Print.tsx": $Print,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
