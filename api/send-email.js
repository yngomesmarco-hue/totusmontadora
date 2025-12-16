import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // CORS básico (pra garantir que o form consiga chamar)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, whatsapp, mensagem } = req.body || {};

    if (!name || !email || !whatsapp || !mensagem) {
      return res.status(400).json({ error: "Campos obrigatórios faltando" });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Site Totus" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL || "atendimento@totusmontadora.com.br",
      replyTo: email,
      subject: `Contato via Site - ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\nWhatsApp: ${whatsapp}\n\nMensagem:\n${mensagem}`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao enviar e-mail" });
  }
}
