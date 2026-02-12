import Link from 'next/link'

export default function Header(){
  return (
    <header className="site-header container">
      <div>
        <Link href="/">
          <a><strong>MyPortfolio</strong></a>
        </Link>
      </div>
      <nav>
        <Link href="/services"><a style={{marginRight:12}}>Services</a></Link>
        <Link href="/case-studies"><a style={{marginRight:12}}>Case Studies</a></Link>
        <Link href="/contact"><a className="cta-btn">Book a free 20‑minute Automation Audit</a></Link>
      </nav>
    </header>
  )
}
