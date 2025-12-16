import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, whatsapp, mensagem } = req.body;

  if (!name || !email || !mensagem) {
    return res.status(400).json({ error: "Dados incompletos" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Site Totus" <${process.env.SMTP_USER}>`,
      to: "atendimento@totusmontadora.com.br",
      replyTo: email,
      subject: `Novo contato pelo site - ${name}`,
      text: `
Nome: ${name}
Email: ${email}
WhatsApp: ${whatsapp}

Mensagem:
${mensagem}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("ERRO AO ENVIAR EMAIL:", error);
    return res.status(500).json({ error: "Erro interno ao enviar email" });
  }
}
