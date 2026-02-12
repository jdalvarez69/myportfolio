export default function Contact(){
  const formAction = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/your-form-id'
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/'
  const hubspotMeetingUrl = process.env.NEXT_PUBLIC_HUBSPOT_MEETING_URL || 'https://meetings.hubspot.com/'

  return (
    <section className="container" style={{paddingTop:32}}>
      <h1>Contact — Book a free 20‑minute Automation Audit</h1>
      <p style={{color:'#6b7280'}}>Complete this form and I'll follow up to schedule the audit.</p>
      <form style={{maxWidth:640,marginTop:16}} method="POST" action={formAction}>
        <label style={{display:'block',marginTop:12}}>Name</label>
        <input name="name" placeholder="Your name" style={{width:'100%',padding:8}} />

        <label style={{display:'block',marginTop:12}}>Company</label>
        <input name="company" placeholder="Company name" style={{width:'100%',padding:8}} />

        <label style={{display:'block',marginTop:12}}>Email</label>
        <input name="email" type="email" placeholder="you@company.com" style={{width:'100%',padding:8}} />

        <label style={{display:'block',marginTop:12}}>Website (optional)</label>
        <input name="website" placeholder="https://" style={{width:'100%',padding:8}} />

        <label style={{display:'block',marginTop:12}}>Budget range (optional)</label>
        <select name="budget" style={{width:'100%',padding:8}}>
          <option>Under $500</option>
          <option>$500–$1,500</option>
          <option>$1,500–$5,000</option>
          <option>$5,000+</option>
        </select>

        <div style={{marginTop:16}}>
          <button className="cta-btn" type="submit">Request audit</button>
        </div>
      </form>

      <div className="card" style={{maxWidth:640, marginTop:18}}>
        <h3 style={{marginTop:0}}>Prefer booking directly?</h3>
        <p className="lead">Use a scheduling link below. These are optional third-party integrations you can enable now or later.</p>
        <p style={{marginTop:12}}>
          <a className="cta-btn" href={calendlyUrl} target="_blank" rel="noreferrer">Open Calendly</a>
        </p>
        <p style={{marginTop:12}}>
          <a href={hubspotMeetingUrl} target="_blank" rel="noreferrer">Book via HubSpot Meetings</a>
        </p>
      </div>

      <p style={{marginTop:12,fontSize:12,color:'#9ca3af'}}>Note: replace the Formspree action URL with your own endpoint or wire the form to your preferred CRM/webhook after deployment.</p>
    </section>
  )
}
