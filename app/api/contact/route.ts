import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ContactPayload = {
  email: string;
  purpose: string;
};

export async function POST(request: Request) {
  try {
    const data: ContactPayload = await request.json();

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, DEST_EMAIL } = process.env as Record<
      string,
      string | undefined
    >;

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

    const subject = `New contact request from ${data.email}`;

    const html = `
      <h3>New Contact Request</h3>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Purpose:</strong> ${data.purpose}</p>
    `;

    const info = await transporter.sendMail({
      from: `${SMTP_USER}`,
      to: DEST_EMAIL,
      subject,
      html,
    });

    return NextResponse.json({ ok: true, info });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}