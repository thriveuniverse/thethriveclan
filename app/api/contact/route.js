import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: 'The Thrive Clan <onboarding@resend.dev>', // ✅ or your verified domain sender
      to: 'mirriekelly@gmail.com', // Replace with your destination (personal for now, later change to @thethriveclan.com)
      subject: `New message from ${name}`,
      reply_to: email, // So you can reply directly to the sender
      text: message,
    });

    return new Response(JSON.stringify({ message: 'Message sent', data }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error', error }), {
      status: 500,
    });
  }
}
