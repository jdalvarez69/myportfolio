const fs = require('fs')
const path = require('path')
const puppeteer = require('puppeteer')
const {remark} = require('remark')
const html = require('remark-html')

async function mdToPdf(){
  const mdPath = path.join(__dirname,'..','content','resources','automation-audit-checklist.md')
  const outPath = path.join(__dirname,'..','public','automation-audit-checklist.pdf')
  if(!fs.existsSync(mdPath)){
    console.error('Checklist not found:', mdPath)
    process.exit(1)
  }
  const md = fs.readFileSync(mdPath,'utf-8')
  const processed = await remark().use(html).process(md)
  const htmlContent = `<!doctype html><html><head><meta charset="utf-8"><title>Automation Audit Checklist</title><style>body{font-family:Arial,Helvetica,sans-serif;padding:24px;color:#111}h1{color:#0ea5a4}li{margin-bottom:8px}</style></head><body>${processed.toString()}</body></html>`

  const browser = await puppeteer.launch({args:['--no-sandbox','--disable-setuid-sandbox']})
  const page = await browser.newPage()
  await page.setContent(htmlContent, {waitUntil:'networkidle0'})
  await page.pdf({path:outPath, format:'A4', printBackground:true})
  await browser.close()
  console.log('Generated PDF:', outPath)
}

mdToPdf().catch(err=>{
  console.error(err)
  process.exit(1)
})
