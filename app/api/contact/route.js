export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Log the submission for now
    console.log("Contact form submitted:", { name, email, message });

    // Return a success response
    return new Response(
      JSON.stringify({ message: 'Message received (Resend removed)' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error', error }), {
      status: 500,
    });
  }
}
