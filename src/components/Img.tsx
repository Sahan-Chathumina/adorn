import { useEffect, useState, type ImgHTMLAttributes } from 'react'
import { ph } from '../config/img'
// Shows the real image; falls back to a placeholder if the file is missing.
export default function Img({ alt = '', src, ...rest }: ImgHTMLAttributes<HTMLImageElement>) {
  const [bad, setBad] = useState(false)
  useEffect(() => setBad(false), [src]) // retry whenever the path changes
  const fail = () => { console.warn(`[Adorn] Image not found: ${src} (put the file in /public${src})`); setBad(true) }
  return <img {...rest} alt={alt} src={bad || !src ? ph(alt || 'Adorn') : src} onError={fail} />
}
