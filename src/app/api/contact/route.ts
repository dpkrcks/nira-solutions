import { NextResponse } from "next/server";

type ContactBody = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 },
    );
  }

  // Placeholder: wire to Resend / Formspree / SMTP later.
  console.log("[contact]", {
    name,
    email,
    company: body.company?.trim() ?? "",
    phone: body.phone?.trim() ?? "",
    message,
  });

  return NextResponse.json({ ok: true });
}
