import Img from './Img'
import { X, Minus, Plus, Trash2, ArrowRight } from 'lucide-react'
import { site } from '../config/site'
import { useShop, money } from '../context/ShopContext'
export default function CartDrawer() {
  const { open, setOpen, lines, count, subtotal, setQty, remove } = useShop()
  const c = site.cart
  return (
    <>
      <div className={`overlay ${open ? 'overlay--on' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`drawer ${open ? 'drawer--open' : ''}`} aria-label={c.title} aria-hidden={!open}>
        <div className="drawer__head"><b>{c.title} ({count})</b><button className="icon-btn" aria-label="Close cart" onClick={() => setOpen(false)}><X size={18} /></button></div>
        <div className="drawer__body">
          {lines.length === 0 && <p className="empty">{c.empty}</p>}
          {lines.map(({ product: p, qty }) => (
            <div className="line" key={p.id}>
              <Img src={p.image} alt={p.name} />
              <div><p>{p.name}</p><b>{money(p.price, site.currency)}</b>
                <div className="qty"><button aria-label="Decrease" onClick={() => setQty(p.id, qty - 1)}><Minus size={12} /></button><span>{qty}</span><button aria-label="Increase" onClick={() => setQty(p.id, qty + 1)}><Plus size={12} /></button></div></div>
              <button className="icon-btn" aria-label={`Remove ${p.name}`} onClick={() => remove(p.id)}><Trash2 size={16} /></button>
            </div>))}
        </div>
        <div className="drawer__foot">
          <div className="sub"><span>{c.subtotal}</span><b>{money(subtotal, site.currency)}</b></div>
          <button className="btn btn--primary btn--block" disabled={!lines.length}>{c.checkout} <ArrowRight size={16} /></button>
          <button className="btn btn--outline btn--block" onClick={() => setOpen(false)}>{c.continue}</button>
        </div>
      </aside>
    </>
  )
}
