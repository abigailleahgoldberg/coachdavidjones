import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, message } = await req.json()

    // Forward to VoC CRM
    const vocRes = await fetch('https://www.thevoiceofcash.com/api/crm/prospect', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name, email, phone: null,
        source: 'coachdavidjones_contact',
        company: company || null,
        notes: message,
        assigned_to: 'david',
      }),
    }).catch(() => null)

    // Also send email notification via Brevo if configured
    const BREVO_KEY = process.env.BREVO_API_KEY
    if (BREVO_KEY) {
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'api-key': BREVO_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender: { name: 'coachdavidjones.com', email: 'hello@thevoiceofcash.com' },
          to: [{ email: 'coachdavidjones@gmail.com', name: 'David Jones' }],
          replyTo: { email, name },
          subject: `New inquiry from ${name}${company ? ` @ ${company}` : ''}`,
          htmlContent: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:2rem;background:#09090b;color:#f0ece4;border-radius:8px;">
              <h2 style="color:#c9a84c;font-family:serif;margin-bottom:1.5rem;">New inquiry via coachdavidjones.com</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
              <hr style="border-color:rgba(255,255,255,0.1);margin:1.5rem 0;" />
              <p style="white-space:pre-wrap;">${message}</p>
            </div>
          `,
        }),
      }).catch(() => null)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
