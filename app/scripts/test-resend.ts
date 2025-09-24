import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!); // Assumes your .env.local has it for local testing

async function testEmail() {
  const { data, error } = await resend.emails.send({
    from: 'no-reply@thethriveclan.com', // Your verified domain—use this now
    to: ['mirriekelly@gmail.com'], // Your test email
    subject: 'Test: Resend Setup Working!',
    html: '<h1>Success!</h1><p>This is a test email from Resend. If you see this, everything is ready for Stripe webhooks.</p>',
  });

  if (error) {
    console.error('Send failed:', error);
  } else {
    console.log('Email sent! ID:', data?.id);
  }
}

testEmail();