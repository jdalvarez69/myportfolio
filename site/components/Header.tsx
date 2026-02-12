import Link from 'next/link'

export default function Header(){
  return (
    <header className="site-header container">
      <div>
        <Link href="/">
          <strong className="brand">Jorge Alvarez · Automation</strong>
        </Link>
      </div>
      <nav className="nav-links">
        <Link href="/about" className="nav-link">About</Link>
        <Link href="/services" className="nav-link">Services</Link>
        <Link href="/case-studies" className="nav-link">Case Studies</Link>
        <Link href="/contact" className="cta-btn">Book a free 20‑minute Automation Audit</Link>
      </nav>
    </header>
  )
}
