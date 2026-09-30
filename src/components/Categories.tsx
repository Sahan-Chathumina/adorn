import Img from './Img'
import { categories } from '../config/categories'
import { useShop } from '../context/ShopContext'
export default function Categories() {
  const { category, setCategory } = useShop()
  return (
    <nav className="cats container" aria-label="Categories">
      {categories.map(c => (
        <button key={c.id} className={`cat ${category === c.id ? 'cat--on' : ''}`} aria-pressed={category === c.id}
          onClick={() => { setCategory(category === c.id ? 'all' : c.id); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }) }}>
          <span className="cat__img"><Img loading="lazy" src={c.image} alt="" /></span><span>{c.name}</span>
        </button>))}
    </nav>
  )
}
