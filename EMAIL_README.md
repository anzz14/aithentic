Setup SMTP credentials for the audit email sender

The API route at `app/api/audit/route.ts` sends audit requests via SMTP using `nodemailer`.

Create environment variables (e.g., in `.env.local`) with these keys:

- `SMTP_HOST` (SMTP host, e.g. smtp.gmail.com)
- `SMTP_PORT` (SMTP port, e.g. 587 or 465)
- `SMTP_USER` (SMTP username / from address)
- `SMTP_PASS` (SMTP password or app password)
- `DEST_EMAIL` (destination email address that receives audit submissions)

Example `.env.local`:

SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=you@example.com
SMTP_PASS=yourpassword
DEST_EMAIL=hello@yourcompany.com

After setting these, restart the Next.js dev server.
