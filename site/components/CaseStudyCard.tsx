import Link from 'next/link'

export default function CaseStudyCard({title, summary, slug}:{title:string;summary:string;slug:string}){
  return (
    <article className="card">
      <h3>{title}</h3>
      <p className="lead" style={{marginBottom:10}}>{summary}</p>
      <Link href={`/case-studies/${slug}`} className="nav-link" style={{paddingLeft:0}}>See outcomes →</Link>
    </article>
  )
}
