import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type AuditPayload = {
  fullName: string;
  email: string;
  company?: string;
  website?: string;
  phone?: string;
  helpWith: string[];
  message?: string;
};

export async function POST(request: Request) {
  try {
    const data: AuditPayload = await request.json();

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      DEST_EMAIL,
    } = process.env as Record<string, string | undefined>;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !DEST_EMAIL) {
      return NextResponse.json(
        { error: "SMTP configuration or DEST_EMAIL missing in environment." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const subject = `Free SEO Audit request from ${data.fullName}`;
    const helpWith = data.helpWith && data.helpWith.length ? data.helpWith.join(", ") : "-";

    const html = `
      <h3>New Free SEO Audit Request</h3>
      <p><strong>Name:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company || "-"}</p>
      <p><strong>Website:</strong> ${data.website || "-"}</p>
      <p><strong>Phone:</strong> ${data.phone || "-"}</p>
      <p><strong>Help requested:</strong> ${helpWith}</p>
      <p><strong>Message:</strong> ${data.message || "-"}</p>
    `;

    const info = await transporter.sendMail({
      from: `${SMTP_USER}`,
      to: DEST_EMAIL,
      subject,
      html,
    });

    return NextResponse.json({ ok: true, info });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
