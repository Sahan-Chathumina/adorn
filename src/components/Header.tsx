import { useState } from 'react'
import { Search, User, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react'
import { site } from '../config/site'
import { useShop } from '../context/ShopContext'
import Brand from './Brand'
export default function Header() {
  const { count, setOpen, query, setQuery } = useShop()
  const [menu, setMenu] = useState(false); const [search, setSearch] = useState(false)
  return (
    <header className="header">
      <div className="container header__in">
        <button className="icon-btn header__burger" aria-label="Toggle menu" aria-expanded={menu} onClick={() => setMenu(m => !m)}>{menu ? <X /> : <Menu />}</button>
        <Brand />
        <nav className={`nav ${menu ? 'nav--open' : ''}`} aria-label="Main">
          {site.nav.map((n, i) => (
            <div key={n.label} className="nav__item">
              <a className={i === 0 ? 'active' : ''} href={n.href} onClick={() => setMenu(false)}>{n.label}{n.children && <ChevronDown size={14} />}</a>
              {n.children && <ul className="dropdown">{n.children.map(c => <li key={c}><a href="#products" onClick={() => setMenu(false)}>{c}</a></li>)}</ul>}
            </div>))}
        </nav>
        <div className="header__actions">
          <button className="icon-btn" aria-label="Search" onClick={() => setSearch(s => !s)}><Search /></button>
          <button className="icon-btn hide-sm" aria-label="Account"><User /></button>
          <button className="icon-btn cart-btn" aria-label={`Cart, ${count} items`} onClick={() => setOpen(true)}><ShoppingBag />{count > 0 && <span className="badge">{count}</span>}</button>
        </div>
      </div>
      {search && <div className="search"><div className="container"><label className="sr" htmlFor="q">Search</label>
        <input id="q" autoFocus value={query} onChange={e => setQuery(e.target.value)} placeholder={site.search.placeholder} />
        <a href="#products" className="btn btn--gold" onClick={() => setSearch(false)}>Go</a></div></div>}
    </header>
  )
}
