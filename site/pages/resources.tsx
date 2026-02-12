import Link from 'next/link'
import SEO from '../components/SEO'
import {useRouter} from 'next/router'

export default function Resources(){
  const router = useRouter()
  const basePath = router.basePath || ''

  return (
    <section className="container section">
      <SEO title="Resources" description="Download the Automation Audit Checklist" />
      <h1>Resources</h1>
      <p className="lead">Grab a concise checklist to spot your next automation win.</p>
      <p style={{marginTop:16}}>Get the checklist: <a className="nav-link" style={{paddingLeft:0}} href={`${basePath}/automation-audit-checklist.md`} download>Download checklist (MD) →</a></p>
      <p style={{marginTop:8}}>Or <Link href="/contact" className="cta-btn">Book a free 20‑minute Automation Audit</Link></p>
    </section>
  )
}
