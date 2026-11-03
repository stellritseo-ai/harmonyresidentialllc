import nodemailer from "nodemailer";

export interface ContactSubmissionPayload {
  source?: string;
  name: string;
  phone: string;
  email: string;
  service?: string;
  ageCategory?: string;
  careNeeded?: string;
  urgency?: string;
  preferredContact?: string;
  message?: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContactEmail(
  payload: ContactSubmissionPayload,
  runtimeEnv?: Record<string, string | undefined>,
) {
  const gmailUser =
    runtimeEnv?.GMAIL_USER ||
    process.env.GMAIL_USER ||
    "harmonyresicaretx@gmail.com";
  const rawAppPassword =
    runtimeEnv?.GMAIL_APP_PASSWORD || process.env.GMAIL_APP_PASSWORD || "";
  const gmailPass = rawAppPassword.replace(/\s+/g, "");
  const gmailReceiver =
    runtimeEnv?.GMAIL_RECEIVER ||
    process.env.GMAIL_RECEIVER ||
    gmailUser;
  const smtpHost =
    runtimeEnv?.SMTP_HOST || process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = Number(
    runtimeEnv?.SMTP_PORT || process.env.SMTP_PORT || 465,
  );

  if (!gmailUser || !gmailPass) {
    throw new Error(
      "Email credentials (GMAIL_USER / GMAIL_APP_PASSWORD) are not configured in .env",
    );
  }

  const name = (payload.name || "").trim();
  const phone = (payload.phone || "").trim();
  const email = (payload.email || "").trim();
  const service = (payload.service || "").trim();
  const ageCategory = (payload.ageCategory || "").trim();
  const careNeeded = (payload.careNeeded || "").trim();
  const urgency = (payload.urgency || "").trim();
  const preferredContact = (payload.preferredContact || "").trim();
  const message = (payload.message || "").trim();
  const source = (payload.source || "Website Contact Form").trim();

  if (!name || !phone || !email) {
    throw new Error("Name, phone number, and email address are required.");
  }

  const isUrgent =
    urgency.toLowerCase().includes("immediate") ||
    urgency.toLowerCase().includes("24 hours") ||
    urgency.toLowerCase().includes("urgent");

  const subjectPrefix = isUrgent ? "[URGENT] " : "";
  const subjectTopic = service || careNeeded || "General Inquiry";
  const subject = `${subjectPrefix}New Website Inquiry from ${name} — ${subjectTopic}`;

  const rows: Array<{ label: string; value: string }> = [
    { label: "Form Source", value: source },
    { label: "Full Name", value: name },
    { label: "Phone Number", value: phone },
    { label: "Email Address", value: email },
  ];

  if (service) {
    rows.push({ label: "Service Interested In", value: service });
  }
  if (ageCategory) {
    rows.push({ label: "Patient's Age Category", value: ageCategory });
  }
  if (careNeeded) {
    rows.push({ label: "Type of Care Needed", value: careNeeded });
  }
  if (urgency) {
    rows.push({ label: "Urgency / Timeline", value: urgency });
  }
  if (preferredContact) {
    rows.push({ label: "Preferred Contact Method", value: preferredContact });
  }

  const textLines = [
    `New inquiry received from Harmony Residential Care LLC website:`,
    `--------------------------------------------------------------`,
    ...rows.map((r) => `${r.label}: ${r.value}`),
    ``,
    `Message:`,
    message || "(No additional message provided)",
  ];

  const htmlRows = rows
    .map(
      (r) => `
      <tr>
        <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #334155; width: 38%; background-color: #f8fafc;">
          ${escapeHtml(r.label)}
        </td>
        <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">
          ${escapeHtml(r.value)}
        </td>
      </tr>`,
    )
    .join("");

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 640px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
      <div style="background: linear-gradient(135deg, #0e57ef 0%, #1c17de 100%); padding: 24px 28px; color: #ffffff;">
        <h2 style="margin: 0; font-size: 20px; font-weight: 700;">Harmony Residential Care LLC</h2>
        <p style="margin: 6px 0 0; font-size: 14px; opacity: 0.9;">New Website Form Submission (${escapeHtml(source)})</p>
      </div>
      <div style="padding: 24px 28px;">
        <table style="width: 100%; border-collapse: collapse; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; font-size: 14px;">
          <tbody>
            ${htmlRows}
          </tbody>
        </table>
        <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
          <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #475569; margin-bottom: 8px;">
            Visitor Message
          </div>
          <div style="font-size: 14px; color: #0f172a; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message || "(No additional message provided)")}</div>
        </div>
      </div>
      <div style="padding: 14px 28px; background-color: #f1f5f9; font-size: 12px; color: #64748b; text-align: center;">
        You can reply directly to this email to contact ${escapeHtml(name)} (${escapeHtml(email)}).
      </div>
    </div>
  `;

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });

  await transporter.sendMail({
    from: `"Harmony Residential Care Website" <${gmailUser}>`,
    to: gmailReceiver,
    replyTo: email,
    subject,
    text: textLines.join("\n"),
    html,
  });
}

