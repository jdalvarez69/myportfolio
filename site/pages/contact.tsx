export default function Contact(){
  const formAction = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/your-form-id'
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/'
  const hubspotMeetingUrl = process.env.NEXT_PUBLIC_HUBSPOT_MEETING_URL || 'https://meetings.hubspot.com/'
  const hasFormspree = !formAction.includes('your-form-id')
  const hasCalendly = calendlyUrl !== 'https://calendly.com/'
  const hasHubspot = hubspotMeetingUrl !== 'https://meetings.hubspot.com/'

  return (
    <section className="container section">
      <h1>Contact — Book a free 20‑minute Automation Audit</h1>
      <p className="lead">Tell me your bottleneck. I’ll reply with a practical next step.</p>
      <form
        className="form-shell"
        style={{maxWidth:700,marginTop:16}}
        method="POST"
        action={hasFormspree ? formAction : undefined}
        onSubmit={(event)=>{
          if (!hasFormspree) {
            event.preventDefault()
          }
        }}
      >
        <input type="hidden" name="_subject" value="New Automation Audit Request" />
        <input type="hidden" name="source" value="Portfolio Contact Form" />
        <input type="hidden" name="_next" value="/thanks/" />
        <label style={{display:'block',marginTop:12}}>Name</label>
        <input name="name" placeholder="Your name" required />

        <label style={{display:'block',marginTop:12}}>Company</label>
        <input name="company" placeholder="Company name" required />

        <label style={{display:'block',marginTop:12}}>Email</label>
        <input name="email" type="email" placeholder="you@company.com" required />

        <label style={{display:'block',marginTop:12}}>Website (optional)</label>
        <input name="website" placeholder="https://" />

        <label style={{display:'block',marginTop:12}}>Budget range (optional)</label>
        <select name="budget">
          <option>Under $500</option>
          <option>$500–$1,500</option>
          <option>$1,500–$5,000</option>
          <option>$5,000+</option>
        </select>

        <label style={{display:'block',marginTop:12}}>What do you want to automate?</label>
        <textarea name="goal" rows={4} placeholder="Briefly describe your current bottleneck" required />

        <div style={{marginTop:16}}>
          <button className="cta-btn" type="submit" disabled={!hasFormspree} style={{opacity:hasFormspree?1:0.65}}>
            {hasFormspree ? 'Get my free audit plan' : 'Configure form endpoint to enable'}
          </button>
        </div>
        <p className="cta-subtext">Average response time: under 24 hours.</p>
        {!hasFormspree && (
          <p style={{marginTop:10,fontSize:12,color:'#b91c1c'}}>
            Form endpoint is not configured yet. Set NEXT_PUBLIC_FORMSPREE_ENDPOINT in build environment variables.
          </p>
        )}
      </form>

      <div className="card" style={{maxWidth:640, marginTop:18}}>
        <h3 style={{marginTop:0}}>Prefer booking directly?</h3>
        <p className="lead">Pick your preferred scheduler.</p>
        {hasCalendly ? (
          <p style={{marginTop:12}}>
            <a className="cta-btn" href={calendlyUrl} target="_blank" rel="noreferrer">Book via Calendly</a>
          </p>
        ) : (
          <p style={{marginTop:12,fontSize:12,color:'#b91c1c'}}>Calendly URL not configured yet.</p>
        )}
        {hasHubspot ? (
          <p style={{marginTop:12}}>
            <a className="nav-link" style={{paddingLeft:0}} href={hubspotMeetingUrl} target="_blank" rel="noreferrer">Book via HubSpot Meetings →</a>
          </p>
        ) : (
          <p style={{marginTop:12,fontSize:12,color:'#b91c1c'}}>HubSpot meeting URL not configured yet.</p>
        )}
      </div>

      <p style={{marginTop:12,fontSize:12,color:'#9ca3af'}}>Set build variables for Formspree, Calendly, and HubSpot links to make this fully live on deployed pages.</p>
    </section>
  )
}
