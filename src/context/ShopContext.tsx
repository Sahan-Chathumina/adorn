import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { Product } from '../config/products'
export interface Line { product: Product; qty: number }
interface Ctx { lines: Line[]; count: number; subtotal: number; open: boolean; setOpen: (b: boolean) => void
  add: (p: Product) => void; setQty: (id: string, q: number) => void; remove: (id: string) => void
  category: string; setCategory: (c: string) => void; query: string; setQuery: (q: string) => void }
const C = createContext<Ctx | null>(null)
export const useShop = () => { const c = useContext(C); if (!c) throw new Error('ShopProvider missing'); return c }
export function ShopProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<Line[]>([]); const [open, setOpen] = useState(false)
  const [category, setCategory] = useState('all'); const [query, setQuery] = useState('')
  const v = useMemo<Ctx>(() => ({
    lines, open, setOpen, category, setCategory, query, setQuery,
    count: lines.reduce((n, l) => n + l.qty, 0), subtotal: lines.reduce((n, l) => n + l.qty * l.product.price, 0),
    add: p => { setLines(ls => ls.some(l => l.product.id === p.id) ? ls.map(l => l.product.id === p.id ? { ...l, qty: l.qty + 1 } : l) : [...ls, { product: p, qty: 1 }]); setOpen(true) },
    setQty: (id, q) => setLines(ls => ls.map(l => l.product.id === id ? { ...l, qty: Math.max(1, q) } : l)),
    remove: id => setLines(ls => ls.filter(l => l.product.id !== id)),
  }), [lines, open, category, query])
  return <C.Provider value={v}>{children}</C.Provider>
}
export const money = (n: number, cur: string) => `${cur} ${n.toLocaleString('en-US')}`
