import { readContactForm, sendMail } from "./lib/mail.ts";

type Env = { RESEND_API_KEY: string };

// Only /api/* reaches this Worker; every other path is served from dist/ by Cloudflare's static assets.
export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(req.url);
    if (pathname !== "/api/contact") return new Response("Not found", { status: 404 });
    if (req.method !== "POST") return new Response("Method not allowed", { status: 405, headers: { allow: "POST" } });

    await sendMail(env.RESEND_API_KEY, readContactForm(await req.formData()));
    return new Response(null, { status: 303, headers: { location: "/" } });
  },
};
