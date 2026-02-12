import Link from 'next/link'
import SEO from '../components/SEO'

export default function Home(){
  return (
    <>
      <SEO />
      <section className="container hero">
        <div className="hero-left">
          <h1>Automation & Dashboards for Small Businesses</h1>
          <p className="lead">I build practical automations, dashboards, and CRM flows that save time and improve decision-making for small businesses.</p>
          <p style={{marginTop:22}}>
            <Link href="/contact" className="cta-btn">Book a free 20‑minute Automation Audit</Link>
          </p>
        </div>
        <div className="hero-right">
          <img src="/images/headshot.jpg" alt="Headshot" className="headshot" />
        </div>

      </section>

      <section className="container" style={{paddingBottom:48}}>
        <h2 style={{marginTop:8}}>Starter Projects</h2>
        <div className="grid">
          <div className="card">
            <h3>Invoice Automation</h3>
            <p className="lead">Auto-generate PDF invoices from Google Sheets and email clients automatically.</p>
          </div>
          <div className="card">
            <h3>Sales Dashboard</h3>
            <p className="lead">A clean dashboard summarizing revenue, top products, and monthly trends.</p>
          </div>
          <div className="card">
            <h3>Lead → CRM Flow</h3>
            <p className="lead">Capture leads and push them to HubSpot or Pipedrive with follow-up automation.</p>
          </div>
        </div>
      </section>
    </>
  )
}
