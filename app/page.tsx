'use client'
import { useState } from 'react'

const NAV_LINKS = [
  { label: 'What I Do', href: '#platforms' },
  { label: 'Results', href: '#results' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const PLATFORMS = [
  {
    name: 'UGCgenerator.ai',
    tagline: 'Mass-Scale Influence',
    desc: 'Deploy a network of tens of thousands of influencers generating authentic conversations and organic reach at a cost your competitors think is impossible.',
    icon: '⚡',
  },
  {
    name: 'WholesalePressReleases.com',
    tagline: 'Credibility & Search Dominance',
    desc: 'Bypass legacy media gatekeepers. Get your story on Bloomberg, Yahoo Finance, and into AI models — owning your search results before a competitor can.',
    icon: '📡',
  },
  {
    name: 'FiveStarFixers.com',
    tagline: 'Reputation & Growth',
    desc: 'Advanced SEO, CRO, and personal branding that fixes, builds, and protects your brand — turning online reputation into a revenue-generating asset.',
    icon: '★',
  },
  {
    name: 'TargetedGeofencing.com',
    tagline: 'Surgical Precision',
    desc: 'Take your message from any physical location directly into the living rooms and devices of high-value audiences. Creepy-effective. Ethical. Measurable.',
    icon: '⬡',
  },
]

const RESULTS = [
  { stat: '526%', label: 'Stock price increase', detail: 'North American go-to-market for Pharmagreen biotech on OTCQB' },
  { stat: '600%', label: 'Monthly leads exceeded', detail: 'LinkedIn strategy for SaaS client — 0-1 leads/mo to 5-7 every month' },
  { stat: '$12K+', label: 'Ad budget saved', detail: 'SEO-driven content strategy generating equivalent paid traffic YoY' },
  { stat: '3,000%', label: 'Supporter growth', detail: 'CRM + CMS implementation for Florida Cannabis Action Network' },
  { stat: '35%', label: 'Applicant increase', detail: 'Employer branding for $150M ARR client AccuTRANS in 3 months' },
  { stat: '#12', label: 'Sprint SE regional rank', detail: 'Pinnacle Club Award Candidate — overall sales, Southeast US' },
]

export default function Page() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* NAV */}
      <nav>
        <a href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, color: 'var(--gold)', textDecoration: 'none', letterSpacing: '0.02em' }}>
          David Jones
        </a>
        <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseOut={e => (e.currentTarget.style.color = 'var(--muted)')}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-gold" style={{ padding: '0.6rem 1.5rem', fontSize: '0.8rem' }}>
            Let&apos;s Talk
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: 'relative', height: '100vh', minHeight: 640, overflow: 'hidden' }}>
        {/* Photo */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('/headshot.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          filter: 'brightness(0.45)',
        }} />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(9,9,11,0.85) 40%, rgba(9,9,11,0.2) 100%), linear-gradient(to top, rgba(9,9,11,0.9) 0%, transparent 60%)',
        }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(2rem,8vw,8rem)', paddingTop: '6rem' }}>
          <span style={{ color: 'var(--gold)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block' }}>
            iPEC Certified Coach · AI Systems Strategist
          </span>
          <h1 className="font-display" style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: 900, lineHeight: 1.0, maxWidth: 800, marginBottom: '1.5rem' }}>
            Stop Competing.<br />
            <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Start Dominating.</span>
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(240,236,228,0.7)', maxWidth: 540, lineHeight: 1.7, marginBottom: '2.5rem', fontWeight: 300 }}>
            I architect AI-powered influence systems — the technology, workflows, and human psychology — that create predictable, measurable results your competitors can&apos;t replicate.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-gold">Start the Conversation</a>
            <a href="#results" className="btn-outline">See Proven Results</a>
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(to top, var(--bg), transparent)' }} />
      </section>

      {/* PLATFORMS */}
      <section id="platforms" style={{ padding: 'clamp(4rem,10vw,8rem) clamp(1.5rem,8vw,6rem)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <span className="gold-line" />
          <p style={{ color: 'var(--muted)', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Portfolio</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.15 }}>
            The Systems<br />Behind Influence
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: 560, lineHeight: 1.7, marginBottom: '4rem', fontSize: '1.05rem' }}>
            I don&apos;t just consult — I deploy proprietary platforms that solve the biggest challenges in modern marketing and influence.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {PLATFORMS.map(p => (
              <div key={p.name} className="platform-card">
                <div style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{p.icon}</div>
                <p style={{ color: 'var(--gold)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{p.tagline}</p>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.75rem' }}>{p.name}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" style={{ padding: 'clamp(4rem,10vw,8rem) clamp(1.5rem,8vw,6rem)', background: 'var(--bg2)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <span className="gold-line" />
          <p style={{ color: 'var(--muted)', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Track Record</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 700, marginBottom: '4rem', lineHeight: 1.15 }}>
            Results That<br /><span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Speak for Themselves</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {RESULTS.map(r => (
              <div key={r.stat} className="stat-card">
                <div className="font-display" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)', fontWeight: 900, color: 'var(--gold)', lineHeight: 1, marginBottom: '0.5rem' }}>{r.stat}</div>
                <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>{r.label}</div>
                <div style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>{r.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: 'clamp(4rem,10vw,8rem) clamp(1.5rem,8vw,6rem)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <div>
            <span className="gold-line" />
            <p style={{ color: 'var(--muted)', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>About David</p>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, marginBottom: '2rem', lineHeight: 1.2 }}>
              The System Builder<br />Behind the Strategy
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'rgba(240,236,228,0.75)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              <p>
                As a former community organizer and Director of Technology, Marketing, and Operations for fast-growth companies, David learned a fundamental truth: <strong style={{ color: 'var(--text)' }}>the old marketing playbook is broken.</strong>
              </p>
              <p>
                His tenure as Director of Marketing & Communications for a political not-for-profit led to the passage of Florida law protecting patient access to medicine — a masterclass in balancing mass influence with surgical precision.
              </p>
              <p>
                David is an iPEC Certified Coach and serves as the official Life Coach for WeBearish, a nonprofit promoting autism acceptance. His background in human psychology isn&apos;t a side note — it&apos;s the foundation of every system he builds.
              </p>
              <p>
                From biotech to CBD to real estate to SaaS, David has deployed systems that deliver results across industries, company sizes, and market conditions.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', alignItems: 'center' }}>
              <a href="https://www.linkedin.com/in/coachdavidjones" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: '0.8rem', padding: '0.7rem 1.5rem' }}>
                LinkedIn
              </a>
              <a href="#contact" className="btn-gold" style={{ fontSize: '0.8rem' }}>
                Work Together
              </a>
            </div>
          </div>

          {/* Quote / credibility block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ background: 'var(--bg3)', border: '1px solid var(--border)', borderLeft: '3px solid var(--gold)', padding: '2rem', borderRadius: '2px' }}>
              <p className="font-display" style={{ fontSize: '1.4rem', fontStyle: 'italic', lineHeight: 1.5, marginBottom: '1rem' }}>
                &ldquo;True influence isn&apos;t about just telling a story — it&apos;s about building the systems that ensure your story is seen, heard, and believed at a scale your competitors can&apos;t match.&rdquo;
              </p>
              <p style={{ color: 'var(--gold)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>— David Jones</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { label: 'Years Experience', value: '25+' },
                { label: 'Clients Served', value: '16+' },
                { label: 'Industries', value: '12+' },
                { label: 'iPEC Certified', value: 'Coach' },
              ].map(item => (
                <div key={item.label} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', padding: '1.25rem', borderRadius: '2px', textAlign: 'center' }}>
                  <div className="font-display" style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--gold)' }}>{item.value}</div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.75rem', marginTop: '0.25rem' }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: 'clamp(4rem,10vw,8rem) clamp(1.5rem,8vw,6rem)', background: 'var(--bg2)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <span className="gold-line" />
          <p style={{ color: 'var(--muted)', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Contact</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.15 }}>
            Ready to Stop Competing?
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: '3rem', lineHeight: 1.7 }}>
            Tell me where you are and where you want to go. I&apos;ll tell you if I can get you there — and what it takes.
          </p>

          {status === 'sent' ? (
            <div style={{ background: 'var(--bg3)', border: '1px solid var(--gold)', padding: '3rem', borderRadius: '4px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✓</div>
              <h3 className="font-display" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--gold)' }}>Message received.</h3>
              <p style={{ color: 'var(--muted)' }}>David will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>Name</label>
                  <input type="text" required placeholder="Your name" value={formData.name}
                    onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>Email</label>
                  <input type="email" required placeholder="your@email.com" value={formData.email}
                    onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>Company / Brand</label>
                <input type="text" placeholder="Where do you work?" value={formData.company}
                  onChange={e => setFormData(p => ({ ...p, company: e.target.value }))} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>What are you trying to accomplish?</label>
                <textarea required rows={5} placeholder="Tell me about your challenge, your goal, and what you've already tried..."
                  value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                  style={{ resize: 'vertical' }} />
              </div>
              <div>
                <button type="submit" className="btn-gold" disabled={status === 'sending'}
                  style={{ width: '100%', fontSize: '0.9rem', padding: '1rem' }}>
                  {status === 'sending' ? 'Sending...' : 'Send Message →'}
                </button>
                {status === 'error' && (
                  <p style={{ color: '#f87171', fontSize: '0.85rem', marginTop: '0.75rem', textAlign: 'center' }}>
                    Something went wrong. Email directly: coachdavidjones@gmail.com
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '2.5rem clamp(1.5rem,8vw,6rem)', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <span className="font-display" style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} David Jones
        </span>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="https://www.linkedin.com/in/coachdavidjones" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'color 0.2s' }}
            onMouseOver={e => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseOut={e => (e.currentTarget.style.color = 'var(--muted)')}>
            LinkedIn
          </a>
          <a href="mailto:coachdavidjones@gmail.com"
            style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'color 0.2s' }}
            onMouseOver={e => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseOut={e => (e.currentTarget.style.color = 'var(--muted)')}>
            Email
          </a>
        </div>
      </footer>

      {/* Mobile about layout fix */}
      <style>{`
        @media (max-width: 900px) {
          #about > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        @media (max-width: 480px) {
          #contact form > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
