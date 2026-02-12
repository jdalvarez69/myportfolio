import Link from 'next/link'

export default function Header(){
  return (
    <header className="site-header container">
      <div>
        <Link href="/">
          <strong>MyPortfolio</strong>
        </Link>
      </div>
      <nav>
        <Link href="/services" style={{marginRight:12}}>Services</Link>
        <Link href="/case-studies" style={{marginRight:12}}>Case Studies</Link>
        <Link href="/contact" className="cta-btn">Book a free 20‑minute Automation Audit</Link>
      </nav>
    </header>
  )
}
