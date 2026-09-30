import { site } from './site'
const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el) }
  el.content = content
}
export const applySeo = () => {
  const s = site.seo
  document.title = s.title
  setMeta('name', 'description', s.description); setMeta('name', 'keywords', s.keywords.join(', ')); setMeta('name', 'robots', s.robots)
  setMeta('property', 'og:title', s.title); setMeta('property', 'og:description', s.description); setMeta('property', 'og:image', s.ogImage)
  setMeta('property', 'og:locale', s.locale); setMeta('name', 'twitter:card', s.twitterCard)
  let l = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!l) { l = document.createElement('link'); l.rel = 'canonical'; document.head.appendChild(l) }
  l.href = s.canonical
}
