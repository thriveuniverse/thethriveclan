import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  // Configure your transporter (SMTP)
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // or your email provider
    port: 465,
    secure: true,
    auth: {
      user: process.env.CONTACT_EMAIL, // sender
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.CONTACT_EMAIL, // destination not changed or updated by Mirrie
      subject: `New message from ${name}`,
      text: message,
    });

    return new Response(JSON.stringify({ message: "Message sent" }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Error" }), { status: 500 });
  }
}
