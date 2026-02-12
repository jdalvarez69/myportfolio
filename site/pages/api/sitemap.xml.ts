import {NextApiRequest, NextApiResponse} from 'next'

const EXTERNAL_URL = ''

export default function sitemap(req:NextApiRequest,res:NextApiResponse){
  const base = EXTERNAL_URL || `https://${req.headers.host}`
  const pages = ['','/services','/case-studies','/about','/resources','/contact']
  const urls = pages.map(p=>{
    return `<url><loc>${base}${p}</loc></url>`
  }).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
  </urlset>`

  res.setHeader('Content-Type','application/xml')
  res.status(200).send(xml)
}
