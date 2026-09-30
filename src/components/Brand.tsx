import { useState } from 'react'
import { site } from '../config/site'
import { assets } from '../config/img'
export default function Brand() {
  const [bad, setBad] = useState(false)
  return (
    <a className="brand" href="#top" aria-label={site.brand}>
      {bad ? <><span className="brand__name">{site.brand}</span><span className="brand__tag">{site.tagline}</span></>
        : <img className="brand__logo" src={assets.logo} alt={site.brand} onError={() => setBad(true)} />}
    </a>
  )
}
