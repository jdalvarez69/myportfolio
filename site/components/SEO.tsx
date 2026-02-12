import Head from 'next/head'

export default function SEO({title,description}:{title?:string;description?:string}){
  const siteTitle = 'Automation & Dashboards for SMBs'
  return (
    <Head>
      <title>{title? `${title} — ${siteTitle}`:siteTitle}</title>
      <meta name="description" content={description||'I build automations, dashboards, and CRM flows for small businesses.'} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
