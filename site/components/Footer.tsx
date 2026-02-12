export default function Footer(){
  return (
    <footer className="container" style={{padding:'36px 0',color:'var(--muted)'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
        <div>© {new Date().getFullYear()} Jorge Alvarez</div>
        <div style={{fontSize:13}}>NJ/NY Automation · Dashboards · CRM Integrations</div>
      </div>
    </footer>
  )
}
