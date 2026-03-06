// api/submit-iec.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const payload = req.body;

    const crmResponse = await fetch('https://legalpapers.konceptsoftwaresolutions.com/leadRoutes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(payload).toString(),
    });

    const data = await crmResponse.text();

    res.status(crmResponse.status).send(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Failed to forward request to CRM' });
  }
}