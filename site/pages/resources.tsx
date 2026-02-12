import Link from 'next/link'
import SEO from '../components/SEO'

export default function Resources(){
  return (
    <section className="container" style={{paddingTop:32}}>
      <SEO title="Resources" description="Download the Automation Audit Checklist" />
      <h1>Resources</h1>
      <p style={{color:'#6b7280'}}>Download the Automation Audit Checklist and short guides.</p>
      <p style={{marginTop:16}}>Get the checklist: <a href="/content/resources/automation-audit-checklist.md" download>Download checklist (MD)</a></p>
      <p style={{marginTop:8}}>Or <Link href="/contact" className="cta-btn">Book a free 20‑minute Automation Audit</Link></p>
    </section>
  )
}
