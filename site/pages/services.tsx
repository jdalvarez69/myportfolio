import Link from 'next/link'

export default function Services(){
  return (
    <section className="container section">
      <h1>Services</h1>
      <p className="lead">Productized offers designed for fast delivery and measurable outcomes.</p>

      <div className="grid">
        <div className="card">
          <h3>Starter Pack</h3>
          <p className="lead">One focused automation or dashboard in 1–2 weeks.</p>
          <ul className="list-clean">
            <li>Fixed scope</li>
            <li>Fast implementation</li>
            <li>From $500</li>
          </ul>
        </div>

        <div className="card">
          <h3>Advanced Build</h3>
          <p className="lead">Custom integrations, analytics workflows, or AI-assisted tooling.</p>
          <ul className="list-clean">
            <li>2–6 week delivery</li>
            <li>Business-first requirements</li>
            <li>From $1,200</li>
          </ul>
        </div>

        <div className="card">
          <h3>Monthly Retainer</h3>
          <p className="lead">Ongoing optimization, monitoring, and incremental improvements.</p>
          <ul className="list-clean">
            <li>Priority support</li>
            <li>Roadmap iteration</li>
            <li>From $200/month</li>
          </ul>
        </div>
      </div>

      <p style={{marginTop:18}}>
        <Link href="/contact" className="cta-btn">Book a free 20‑minute Automation Audit</Link>
      </p>
      <p className="cta-subtext">We’ll identify the highest-ROI automation to build first.</p>
    </section>
  )
}
