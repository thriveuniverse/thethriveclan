import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendPurchaseEmail(to: string, productName: string, downloadLink?: string) {
  const { data, error } = await resend.emails.send({
    from: 'downloads@thethriveclan.com', // Your verified domain/sender (verify in Resend dashboard)
    to: [to],
    subject: `Thanks for your purchase: ${productName}!`,
    html: `
      <h1>Hi there!</h1>
      <p>Thanks for buying <strong>${productName}</strong>. Your download is ready:</p>
      ${downloadLink ? `<a href="${downloadLink}">Download Now</a>` : '<p>Check back soon—link on its way!</p>'}
      <p>If you have questions, reply to this email.</p>
      <p>Best,<br>The Thrive Clan Team</p>
    `,
  });

  if (error) {
    console.error('Email send failed:', error);
    throw error; // Or handle gracefully
  }

  console.log('Email sent to:', to);
  return data;
}