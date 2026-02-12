import Link from 'next/link'
import {useRouter} from 'next/router'

export default function About(){
  const router = useRouter()
  const basePath = router.basePath || ''
  const headshot = `${basePath}/images/headshot.jpg`
  const fallback = `${basePath}/images/placeholder-2.svg`

  return (
    <section className="container section">
      <div className="two-col" style={{alignItems:'center'}}>
        <div style={{display:'flex',justifyContent:'center'}}>
          <img
            src={headshot}
            alt="Headshot"
            className="headshot"
            style={{width:190,height:190}}
            onError={(event)=>{
              event.currentTarget.src = fallback
            }}
          />
        </div>
        <div className="card">
          <h1>About</h1>
          <p className="lead">I help SMB owners remove repetitive tasks, clean up operations, and make faster decisions with practical systems.</p>
          <p className="lead">My approach is simple: identify one high-impact bottleneck, ship a clean solution quickly, and make sure your team can run it without friction.</p>
          <p style={{marginTop:12}}><Link href="/contact" className="cta-btn">Book a free 20‑minute Automation Audit</Link></p>
          <p className="cta-subtext">No pressure — you leave with concrete next steps.</p>
        </div>
      </div>
    </section>
  )
}
