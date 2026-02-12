export default function Footer(){
  return (
    <footer className="container" style={{padding:'36px 0',color:'var(--muted)'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
        <div>© {new Date().getFullYear()} MyPortfolio</div>
        <div style={{fontSize:13}}>Automation & Dashboards for SMBs</div>
      </div>
    </footer>
  )
}
