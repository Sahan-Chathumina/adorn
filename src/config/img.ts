// Placeholder generator. Replace any config `image` with '/images/your-file.webp' (put files in /public/images).
export const ph = (label: string, a = '#F7EEE6', b = '#E9CBB0') =>
  'data:image/svg+xml;utf8,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="400" height="400" fill="url(#g)"/><circle cx="200" cy="190" r="70" fill="#fff" opacity=".6"/><text x="200" y="330" text-anchor="middle" font-family="Georgia" font-size="26" fill="#5A1424">${label}</text></svg>`)

// Your real files. Put them in /public/images/ (see README). Change names/extension here only.
export const assets = {
  logo: '/images/logo.png',
  hero: '/images/hero.png',
  ext: '.png',
  dirs: { products: '/images/products', categories: '/images/categories', avatars: '/images/avatars' },
}
// Name without extension uses assets.ext; a name with its own extension (e.g. 'serum.jpg') is used as-is.
export const asset = (kind: keyof typeof assets.dirs, id: string) =>
  `${assets.dirs[kind]}/${/\.[a-z0-9]{3,4}$/i.test(id) ? id : id + assets.ext}`

