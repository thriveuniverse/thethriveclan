// Hub-side proxy for the Oil Watch newsletters (UK / Euro / Americas).
// Adds a contact directly to the relevant site's Resend audience + topic,
// using a dedicated thethriveclan.com API key against the same Resend account.
// Contract confirmed against the sites' own committed /api/subscribe routes:
// POST https://api.resend.com/contacts, treat HTTP 409 (already exists) as success.

const REGIONS = {
  uk: { segmentId: process.env.UK_SEGMENT_ID, topicId: process.env.UK_TOPIC_ID },
  euro: { segmentId: process.env.EURO_SEGMENT_ID, topicId: process.env.EURO_TOPIC_ID },
  americas: { segmentId: process.env.AMERICAS_SEGMENT_ID, topicId: process.env.AMERICAS_TOPIC_ID },
};

export async function POST(req) {
  try {
    const { email, regions } = await req.json();

    if (!email || !Array.isArray(regions) || regions.length === 0) {
      return Response.json({ message: 'Email and at least one region are required.' }, { status: 400 });
    }

    const results = await Promise.all(regions.map(async (region) => {
      const config = REGIONS[region];
      if (!config || !config.segmentId || !config.topicId) {
        return { region, ok: false, error: 'Region not configured' };
      }

      const res = await fetch('https://api.resend.com/contacts', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_CONTACTS_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          unsubscribed: false,
          segments: [{ id: config.segmentId }],
          topics: [{ id: config.topicId, subscription: 'opt_in' }],
          source: 'thethriveclan-unified',
        }),
      });

      if (res.ok || res.status === 409) {
        return { region, ok: true };
      }

      console.error(`Resend subscribe error [${region}]:`, res.status, await res.text());
      return { region, ok: false, error: 'Failed to subscribe' };
    }));

    const allOk = results.every((r) => r.ok);
    return Response.json({ results }, { status: allOk ? 200 : 207 });
  } catch (err) {
    console.error('Subscribe route error:', err);
    return Response.json({ message: 'Server error.' }, { status: 500 });
  }
}
