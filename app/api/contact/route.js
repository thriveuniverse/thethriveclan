import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, organisation, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ message: 'Name, email and message are required.' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: 'The Thrive Clan <hello@thethriveclan.com>',
      to: ['jon@thethriveclan.com'],
      replyTo: email,
      subject: `Contact form — ${name}${organisation ? ` (${organisation})` : ''}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        ${organisation ? `<p><strong>Organisation:</strong> ${organisation}</p>` : ''}
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap">${message}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ message: 'Failed to send.' }, { status: 500 });
    }

    return Response.json({ message: 'Sent.' }, { status: 200 });

  } catch (error) {
    console.error('Contact route error:', error);
    return Response.json({ message: 'Server error.' }, { status: 500 });
  }
}
