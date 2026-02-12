import CaseStudyCard from '../../components/CaseStudyCard'

export default function CaseStudies(){
  return (
    <section className="container" style={{paddingTop:32}}>
      <h1>Case Studies</h1>
      <p style={{color:'#6b7280'}}>Sample projects demonstrating automations and dashboards.</p>
      <div className="grid" style={{marginTop:20}}>
        <CaseStudyCard title="Invoice Automation" summary="Automate invoicing from Sheets." slug="invoice-automation" />
        <CaseStudyCard title="Sales Dashboard" summary="Lightweight sales dashboard demo." slug="sales-dashboard" />
        <CaseStudyCard title="Lead → CRM Flow" summary="Capture leads and sync with CRM." slug="lead-crm-flow" />
      </div>
    </section>
  )
}
