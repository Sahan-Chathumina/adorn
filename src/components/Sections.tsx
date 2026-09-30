import Img from './Img'
import WhatsAppIcon from './WhatsAppIcon'
import { Star, ShoppingBag, ShoppingCart, ClipboardList, CreditCard, Truck, Banknote, Heart, ShieldCheck, FlaskConical, RefreshCcw, MessageCircle } from 'lucide-react'
import { site } from '../config/site'
import { testimonials } from '../config/testimonials'
const stepIcons = [ShoppingBag, ShoppingCart, ClipboardList, CreditCard]
const delIcons = [Truck, Banknote, CreditCard]
export function HowToOrder() {
  const o = site.order
  return (
    <section id="about" className="order">
      <div className="container order__in">
        <div><div className="heading heading--left"><h2 className="serif">{o.title}</h2><p>{o.subtitle}</p></div>
          <ol className="steps">{o.steps.map((s, i) => { const I = stepIcons[i]; return <li key={s.title}><span className="step__ic"><I size={26} strokeWidth={1.3} /></span><b>{i + 1}. {s.title}</b><small>{s.text}</small></li> })}</ol></div>
        <div className="order__vis"><Img loading="lazy" src={o.image} alt="Order on your phone" /><div className="callout"><b className="script">{o.callout}</b><Heart size={14} /></div><p className="wa-note">{o.callout2} <WhatsAppIcon /></p></div>
      </div>
    </section>
  )
}
export function Testimonials() {
  const t = site.testimonials
  return (
    <section className="section container">
      <div className="heading heading--left"><h2 className="serif">{t.title}</h2><p>{t.subtitle}</p></div>
      <div className="tgrid">{testimonials.map(x => (
        <figure className="tcard" key={x.name}><Img loading="lazy" src={x.avatar} alt={x.name} />
          <div><div className="stars" aria-label={`${x.rating} stars`}>{Array.from({ length: x.rating }, (_, i) => <Star key={i} size={12} fill="currentColor" />)}</div>
            <blockquote>“{x.message}”</blockquote><figcaption><b>{x.name}</b><small>{x.location}</small></figcaption></div></figure>))}</div>
    </section>
  )
}
export function DeliveryInfo() {
  const d = site.delivery
  return (
    <section id="delivery" className="section container delivery">
      <h2 className="serif">{d.title}</h2>
      <ul>{d.items.map((x, i) => { const I = delIcons[i]; return <li key={x.title}><span className="step__ic step__ic--sm"><I size={20} strokeWidth={1.4} /></span><div><b>{x.title}</b><small>{x.text}</small></div></li> })}</ul>
      <p className="script tagline">{d.tagline.join(' ')}</p>
    </section>
  )
}

const trustIcons = { shield: ShieldCheck, flask: FlaskConical, truck: Truck, refresh: RefreshCcw }
export function TrustSection() {
  const t = site.trustSection
  return (
    <section className="trustsec">
      <div className="container">
        <div className="heading"><h2>{t.title}</h2><p>{t.subtitle}</p></div>
        <ul className="stats">{t.stats.map(s => <li key={s.label}><b>{s.value}</b><span>{s.label}</span></li>)}</ul>
        <ul className="tfeat">{t.items.map(i => { const I = trustIcons[i.icon as keyof typeof trustIcons]; return <li key={i.title}><span className="step__ic"><I size={26} strokeWidth={1.3} /></span><b>{i.title}</b><small>{i.text}</small></li> })}</ul>
        <a className="btn btn--primary trust__cta" href={`https://wa.me/${site.contact.whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle size={16} /> {t.note}</a>
      </div>
    </section>
  )
}
