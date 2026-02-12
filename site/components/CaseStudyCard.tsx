import Link from 'next/link'

export default function CaseStudyCard({title, summary, slug}:{title:string;summary:string;slug:string}){
  return (
    <article style={{border:'1px solid #e5e7eb',padding:16,borderRadius:8}}>
      <h3>{title}</h3>
      <p style={{color:'#6b7280'}}>{summary}</p>
      <p><Link href={`/case-studies/${slug}`}><a>Read case study</a></Link></p>
    </article>
  )
}
