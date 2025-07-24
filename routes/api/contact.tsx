import { Handlers } from "$fresh/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

export async function sendMail(name: string | undefined, email: string | undefined, message: string | undefined) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "onboarding@resend.dev",
      to: "tarek@messaoudi.dev",
      subject: `Contact email from tarek.messaoudi.dev :  ${name}`,
      html: `<p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
    }),
  });

  if (!res.ok) {
    console.error("Failed to send mail", await res.text());
  }
}

export const handler: Handlers = {
  async GET(req, ctx) {
    return await ctx.render();
  },
  async POST(req, ctx) {
    const form = await req.formData();
    console.log(form);
    const name = form.get("name")?.toString();
    const email = form.get("email")?.toString();
    const message = form.get("message")?.toString();

    // Add email to list.

    await sendMail(name, email, message);
    const headers = new Headers();
    headers.set("location", "/");
    return new Response(null, {
      status: 303, // See Other
      headers,
    });
  },
};
