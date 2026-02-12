export default function Contact(){
  return (
    <section className="container" style={{paddingTop:32}}>
      <h1>Contact — Book a free 20‑minute Automation Audit</h1>
      <p style={{color:'#6b7280'}}>Complete this form and I'll follow up to schedule the audit.</p>
      <form style={{maxWidth:640,marginTop:16}} method="POST" action="https://formspree.io/f/your-form-id">
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

      <p style={{marginTop:12,fontSize:12,color:'#9ca3af'}}>Note: replace the Formspree action URL with your own endpoint or wire the form to your preferred CRM/webhook after deployment.</p>
    </section>
  )
}
