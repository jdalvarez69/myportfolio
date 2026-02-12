import Link from 'next/link'
import SEO from '../components/SEO'

export default function Home(){
  return (
    <>
      <SEO />
      <section className="container hero">
        <h1>Automation & Dashboards for Small Businesses</h1>
        <p style={{color:'#6b7280'}}>I build simple automations, dashboards, and CRM flows that save time and increase revenue.</p>
        <p style={{marginTop:20}}>
          <Link href="/contact"><a className="cta-btn">Book a free 20‑minute Automation Audit</a></Link>
        </p>
        <section style={{marginTop:40}}>
          <h2>Starter Projects</h2>
          <div className="grid">
            <div style={{padding:16,border:'1px solid #e5e7eb',borderRadius:8}}>
              <h3>Invoice Automation</h3>
              <p style={{color:'#6b7280'}}>Auto-generate and email invoices from Google Sheets.</p>
            </div>
            <div style={{padding:16,border:'1px solid #e5e7eb',borderRadius:8}}>
              <h3>Sales Dashboard</h3>
              <p style={{color:'#6b7280'}}>A clean dashboard summarizing sales and KPIs.</p>
            </div>
            <div style={{padding:16,border:'1px solid #e5e7eb',borderRadius:8}}>
              <h3>Lead → CRM Flow</h3>
              <p style={{color:'#6b7280'}}>Capture leads and push them to HubSpot or Pipedrive.</p>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
