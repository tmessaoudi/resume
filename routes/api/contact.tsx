import { Handlers } from "$fresh/server.ts";
import { readContactForm, sendMail } from "../../lib/mail.ts";

export const handler: Handlers = {
  async POST(req) {
    await sendMail(Deno.env.get("RESEND_API_KEY"), readContactForm(await req.formData()));
    return new Response(null, { status: 303, headers: { location: "/" } });
  },
};
