import Img from './Img'
import { useState } from 'react'
import { Heart } from 'lucide-react'
import { products, type Product } from '../config/products'
import { site } from '../config/site'
import { useShop, money } from '../context/ShopContext'
function ProductCard({ p }: { p: Product }) {
  const { add } = useShop(); const [fav, setFav] = useState(false)
  return (
    <article className="card">
      <div className="card__img"><Img loading="lazy" src={p.image} alt={p.name} />
        <button className={`heart ${fav ? 'heart--on' : ''}`} aria-pressed={fav} aria-label="Wishlist" onClick={() => setFav(f => !f)}><Heart size={16} /></button></div>
      <h3 title={p.name}>{p.name}</h3>
      <div className="price"><b>{money(p.price, site.currency)}</b>{p.compareAtPrice && <s>{money(p.compareAtPrice, site.currency)}</s>}{p.badge && <span className="pill">{p.badge}</span>}</div>
      <button className="btn btn--primary btn--block" onClick={() => add(p)}>{site.featured.addToCart}</button>
    </article>
  )
}
export default function Products() {
  const { category, query } = useShop()
  const q = query.trim().toLowerCase()
  const list = products.filter(p => (q ? p.name.toLowerCase().includes(q) : p.featured) && (category === 'all' || p.category === category))
  return (
    <section id="products" className="section">
      <div className="heading"><h2>{site.featured.title}</h2><p>{site.featured.subtitle}</p></div>
      {list.length ? <div className="grid">{list.map(p => <ProductCard key={p.id} p={p} />)}</div> : <p className="empty">{site.featured.empty}</p>}
    </section>
  )
}
