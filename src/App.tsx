import { useEffect } from 'react'
import { ShopProvider } from './context/ShopContext'
import { applyTheme } from './config/theme'
import { applySeo } from './config/seo'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Products from './components/Products'
import CartDrawer from './components/CartDrawer'
import { HowToOrder, Testimonials, DeliveryInfo, TrustSection } from './components/Sections'
import Footer from './components/Footer'
export default function App() {
  useEffect(() => { applyTheme(); applySeo() }, [])
  return (
    <ShopProvider>
      <Header />
      <main id="top">
        <Hero /><Categories />
        <div className="layout container"><div className="layout__main"><Products /></div></div>
        <HowToOrder /><TrustSection /><Testimonials /><DeliveryInfo />
      </main>
      <Footer /><CartDrawer />
    </ShopProvider>
  )
}
