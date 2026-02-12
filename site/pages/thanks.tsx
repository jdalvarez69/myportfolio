import Link from 'next/link'
import SEO from '../components/SEO'

export default function Thanks(){
  return (
    <section className="container section">
      <SEO title="Thanks" description="Your request has been received" />
      <div className="card" style={{maxWidth:700}}>
        <h1>Thanks — request received.</h1>
        <p className="lead" style={{marginTop:10}}>I’ll review your request and respond with next steps shortly.</p>
        <p style={{marginTop:16}}>
          <Link href="/" className="nav-link" style={{paddingLeft:0}}>Return to home →</Link>
        </p>
      </div>
    </section>
  )
}
