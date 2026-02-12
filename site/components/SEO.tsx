import Head from 'next/head'
import {useRouter} from 'next/router'

export default function SEO({title,description}:{title?:string;description?:string}){
  const siteTitle = 'Automation & Dashboards for SMBs'
  const router = useRouter()
  const basePath = router.basePath || ''
  return (
    <Head>
      <title>{title? `${title} — ${siteTitle}`:siteTitle}</title>
      <meta name="description" content={description||'I build automations, dashboards, and CRM flows for small businesses.'} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="icon" type="image/svg+xml" href={`${basePath}/favicon.svg`} />
    </Head>
  )
}
