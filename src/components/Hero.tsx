import { ShieldCheck, Globe, BadgeCheck, Leaf, ArrowRight } from 'lucide-react'
import Img from './Img'
import { site } from '../config/site'
const icons = [ShieldCheck, Globe, BadgeCheck, Leaf]
export default function Hero() {
  const h = site.hero
  return (
    <section className="hero">
      <Img className="hero__bg" src={h.image} alt="" fetchPriority="high" />
      <div className="hero__copy">
        <p className="eyebrow">{h.eyebrow}</p>
        <h1>{h.title}<span className="script">{h.script}</span></h1>
        <p className="hero__text">{h.text}</p>
        <a className="btn btn--gold" href={h.ctaHref}>{h.cta} <ArrowRight size={16} /></a>
        <ul className="trust">{site.trust.map((t, i) => { const I = icons[i % icons.length]; return <li key={t}><I size={26} strokeWidth={1.3} /><span>{t}</span></li> })}</ul>
      </div>
    </section>
  )
}
