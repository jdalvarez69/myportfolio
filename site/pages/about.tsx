import Link from 'next/link'
import {useRouter} from 'next/router'

export default function About(){
  const router = useRouter()
  const basePath = router.basePath || ''
  const headshot = `${basePath}/images/headshot.jpg`
  const fallback = `${basePath}/images/placeholder-2.svg`

  return (
    <section className="container" style={{paddingTop:32}}>
      <div style={{display:'flex',gap:24,alignItems:'center',flexWrap:'wrap'}}>
        <div style={{flex:'0 0 160px'}}>
          <img
            src={headshot}
            alt="Headshot"
            className="headshot"
            style={{width:160,height:160}}
            onError={(event)=>{
              event.currentTarget.src = fallback
            }}
          />
        </div>
        <div style={{flex:1}}>
          <h1>About</h1>
          <p className="lead">I'm a Business & Information Systems student focused on building practical automation, dashboards, and CRM integrations for small businesses. I prioritize fast wins that reduce manual work and deliver measurable outcomes.</p>
          <p style={{marginTop:12}}>Approachable, focused, and results-driven — I work with business owners to identify quick automation opportunities and deliver polished, maintainable solutions.</p>
          <p style={{marginTop:12}}><Link href="/contact" className="cta-btn">Book a free 20‑minute Automation Audit</Link></p>
        </div>
      </div>
    </section>
  )
}
