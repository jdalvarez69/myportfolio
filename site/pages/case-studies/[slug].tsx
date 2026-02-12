import fs from 'fs'
import path from 'path'
import {GetStaticPaths, GetStaticProps} from 'next'
import SEO from '../../components/SEO'
import matter from 'gray-matter'
import {remark} from 'remark'
import html from 'remark-html'

export default function CaseStudy({htmlContent, data}:{htmlContent:string; data:any}){
  return (
    <section className="container" style={{paddingTop:32}}>
      <SEO title={data?.Title || 'Case Study'} description={data?.summary || 'Case study'} />
      <h1>{data?.Title || 'Case Study'}</h1>
      <div dangerouslySetInnerHTML={{__html:htmlContent}} style={{color:'#374151'}} />
    </section>
  )
}

export const getStaticPaths:GetStaticPaths = async ()=>{
  const dir = path.join(process.cwd(),'content','case-studies')
  const files = fs.readdirSync(dir).filter(f=>f.endsWith('.md') && f.toLowerCase() !== 'readme.md')
  const paths = files.map(f=>({params:{slug:f.replace('.md','')}}))
  return {paths,fallback:false}
}

export const getStaticProps:GetStaticProps = async ({params}) =>{
  const slug = params?.slug as string
  const file = path.join(process.cwd(),'content','case-studies',`${slug}.md`)
  const raw = fs.readFileSync(file,'utf-8')
  const {content, data} = matter(raw)
  const processed = await remark().use(html).process(content)
  const htmlContent = processed.toString()
  return {props:{htmlContent, data}}
}
