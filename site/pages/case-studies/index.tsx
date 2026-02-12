import Link from 'next/link'
import CaseStudyCard from '../../components/CaseStudyCard'

export default function CaseStudies(){
  return (
    <section className="container section">
      <h1>Case Studies</h1>
      <p className="lead">Quick examples of the systems I can build for your business.</p>
      <div className="grid" style={{marginTop:16}}>
        <CaseStudyCard title="Invoice Automation" summary="Automate invoicing from Sheets." slug="invoice-automation" />
        <CaseStudyCard title="Sales Dashboard" summary="Lightweight sales dashboard demo." slug="sales-dashboard" />
        <CaseStudyCard title="Lead → CRM Flow" summary="Capture leads and sync with CRM." slug="lead-crm-flow" />
      </div>
      <p style={{marginTop:18}}>
        <Link href="/contact" className="cta-btn">Book a free 20‑minute Automation Audit</Link>
      </p>
    </section>
  )
}
