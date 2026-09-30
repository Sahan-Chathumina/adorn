import { useState, type FormEvent } from 'react'
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react'
import { site } from '../config/site'
import Brand from './Brand'
const TikTok = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 2h-3.2v13.2a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .8.1V9.1a6.1 6.1 0 1 0 5.3 6V8.6a7.3 7.3 0 0 0 4.2 1.3V6.7a4.2 4.2 0 0 1-4.2-4.7Z"/></svg>)
const soc = [Facebook, Instagram, TikTok, Youtube]
export default function Footer() {
  const [done, setDone] = useState(false); const f = site.footer
  const submit = (e: FormEvent) => { e.preventDefault(); setDone(true) }
  const wa = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(site.contact.whatsappMessage)}`
  return (
    <footer id="contact" className="footer">
      <div className="container footer__in">
        <Brand />
        <div className="footer__mid">
          <nav aria-label="Footer">{site.nav.map(n => <a key={n.label} href={n.href}>{n.label}</a>)}</nav>
          <div className="social">{site.social.map((s, i) => { const I = soc[i]; return <a key={s.name} href={s.url} aria-label={s.name}><I size={14} /></a> })}</div>
        </div>
        <form onSubmit={submit} className="news"><label htmlFor="em">{f.newsletterTitle}</label>
          <div><input id="em" type="email" required placeholder={f.placeholder} /><button className="btn btn--gold">{done ? '✓' : f.button}</button></div></form>
      </div>
      <p className="copy">{f.copyright}</p>
      <a className="wa" href={wa} target="_blank" rel="noreferrer"><MessageCircle size={18} /><span>{f.whatsappCta}</span></a>
    </footer>
  )
}
