import Link from 'next/link'
import {useRouter} from 'next/router'
import SEO from '../components/SEO'

export default function Home(){
  const router = useRouter()
  const basePath = router.basePath || ''
  const headshot = `${basePath}/images/headshot.jpg`
  const fallback = `${basePath}/images/placeholder-2.svg`

  return (
    <>
      <SEO />
      <section className="container hero">
        <div className="hero-panel">
          <p className="hero-kicker">NJ / NY Business Automation</p>
          <h1>Your operations, simplified in weeks — not months.</h1>
          <p className="lead">I design lightweight automation and dashboard systems so small businesses can move faster with less manual work.</p>
          <ul className="hero-bullets">
            <li>• Clear scope and fixed deliverables</li>
            <li>• Practical systems your team can use immediately</li>
            <li>• Built for SMB budgets and speed</li>
          </ul>
          <p style={{marginTop:22}}>
            <Link href="/contact" className="cta-btn">Book a free 20‑minute Automation Audit</Link>
          </p>
          <p className="cta-subtext">Get a custom 3-step action plan in one call.</p>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <img
            src={headshot}
            alt="Headshot"
            className="headshot"
            onError={(event)=>{
              event.currentTarget.src = fallback
            }}
          />
        </div>

      </section>

      <section className="container section" style={{paddingBottom:52}}>
        <h2 style={{marginTop:0}}>What I can build quickly</h2>
        <div className="grid">
          <div className="card">
            <h3>Invoice Automation</h3>
            <p className="lead">Generate and send invoices from Sheets with automatic reminders.</p>
          </div>
          <div className="card">
            <h3>Sales Dashboard</h3>
            <p className="lead">Track revenue, trends, and key KPIs in one clear dashboard.</p>
          </div>
          <div className="card">
            <h3>Lead → CRM Flow</h3>
            <p className="lead">Capture inbound leads and route them into HubSpot with follow-up triggers.</p>
          </div>
        </div>
      </section>
    </>
  )
}
