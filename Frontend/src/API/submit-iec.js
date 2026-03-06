// api/submit-iec.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const encodedPayload = new URLSearchParams(payload).toString();

const crmResponse = await fetch(process.env.CRM_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    // Optional but helpful
    "Referer": "https://www.iecregistration-india.org/",
    "Origin": "https://www.iecregistration-india.org",
    "User-Agent": "Mozilla/5.0 (compatible; LeadBot/1.0)"
  },
  body: encodedPayload,
  // keep redirect: 'manual' if needed
});

    const data = await crmResponse.text();

    res.status(crmResponse.status).send(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Failed to forward request to CRM' });
  }
}