export type ContactMessage = { name?: string; email?: string; message?: string };

function escapeHtml(value = ""): string {
  return value.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

export async function sendMail(apiKey: string | undefined, { name, email, message }: ContactMessage) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "contact@messaoudi.dev",
      to: "tarek@messaoudi.dev",
      subject: `Contact email from tarek.messaoudi.dev :  ${name}`,
      html: `<p><strong>Email:</strong> ${escapeHtml(email)}</p><p>${escapeHtml(message)}</p>`,
    }),
  });

  if (!res.ok) {
    console.error("Failed to send mail", await res.text());
  }
}

export function readContactForm(form: FormData): ContactMessage {
  return {
    name: form.get("name")?.toString(),
    email: form.get("email")?.toString(),
    message: form.get("message")?.toString(),
  };
}
