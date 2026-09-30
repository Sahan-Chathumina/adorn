import { assets } from "./img";
// ALL site text, SEO, contact and section copy. Edit here only.
export const site = {
  seo: {
    title: "ADORN | Premium Skincare & Cosmetics in Sri Lanka",
    description:
      "Shop 100% original luxury skincare imported from the UK & abroad. Islandwide delivery and cash on delivery across Sri Lanka.",
    keywords: [
      "skincare Sri Lanka",
      "luxury cosmetics",
      "face cream",
      "vitamin C serum",
      "sunscreen SPF 50",
      "original skincare products",
      "Adorn",
    ],
    canonical: "https://www.example.lk/",
    ogImage: "/og-image.jpg",
    locale: "en_LK",
    twitterCard: "summary_large_image",
    robots: "index,follow",
  },
  brand: "ADORN",
  tagline: "You Deserve Luxury",
  currency: "Rs.",
  contact: {
    phone: "+94 77 123 4567",
    whatsapp: "94771234567",
    whatsappMessage: "Hello Adorn, I would like to order.",
    email: "hello@adorn.lk",
  },
  social: [
    { name: "Facebook", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "TikTok", url: "#" },
    { name: "YouTube", url: "#" },
  ],
  nav: [
    { label: "Home", href: "#top" },
    {
      label: "Products",
      href: "#products",
      children: ["Face Creams", "Serums", "Cleansers", "Sunscreens"],
    },
    { label: "About Us", href: "#about" },
    { label: "Delivery", href: "#delivery" },
    { label: "Contact", href: "#contact" },
  ] as { label: string; href: string; children?: string[] }[],
  hero: {
    eyebrow: "PREMIUM SKINCARE & COSMETICS",
    title: "Healthy Skin",
    script: "Brighter You",
    text: "Luxury skincare from around the world, now in Sri Lanka.",
    cta: "Shop Now",
    ctaHref: "#products",
    campaign: ["Real Care", "Real Results"],
    image: assets.hero,
  },
  trust: [
    "100% Original Products",
    "Imported from UK & Abroad",
    "Safe & Effective",
    "For All Skin Types",
  ],
  featured: {
    title: "FEATURED PRODUCTS",
    subtitle: "Glow with our handpicked bestsellers",
    addToCart: "Add to Cart",
    empty: "No products match your selection.",
  },
  order: {
    title: "How to Order",
    subtitle: "It's easy, fast and convenient!",
    callout: "Order in Minutes!",
    callout2: "Easy Ordering via Website or WhatsApp",
    image: "/images/hero.png",
    steps: [
      {
        title: "Select Products",
        text: "Choose your favourite skincare products.",
      },
      { title: "Add to Cart", text: "Review your order and proceed." },
      { title: "Fill Details", text: "Enter your delivery information." },
      {
        title: "Pay & Confirm",
        text: "Pay online or choose Cash on Delivery.",
      },
    ],
  },
  trustSection: {
    title: "Why Customers Trust Adorn",
    subtitle: "Your skin deserves care you can rely on.",
    // EDIT: only keep claims that are true for your business (certificates, sourcing, policies).
    items: [
      {
        icon: "shield",
        title: "100% Authentic",
        text: "Sourced directly from authorised distributors. Every product is genuine.",
      },
      {
        icon: "flask",
        title: "Skin-Safe Formulas",
        text: "Carefully selected products suitable for a wide range of skin types.",
      },
      {
        icon: "truck",
        title: "Safe Packaging",
        text: "Sealed, protected parcels with batch details you can verify.",
      },
      {
        icon: "refresh",
        title: "Easy Support",
        text: "Questions about ingredients or routines? Ask us on WhatsApp anytime.",
      },
    ],
    stats: [
      { value: "5,000+", label: "Happy Customers" },
      { value: "4.9/5", label: "Average Rating" },
      { value: "100%", label: "Original Products" },
    ],
    note: "Not sure which product suits your skin? Message us for free, honest advice.",
  },
  testimonials: {
    title: "Our Happy Customers",
    subtitle: "Real people. Real results.",
  },
  delivery: {
    title: "Delivery & Payment",
    items: [
      {
        title: "Islandwide Delivery",
        text: "We deliver to all parts of Sri Lanka.",
      },
      {
        title: "Cash on Delivery (COD)",
        text: "Pay when you receive your order.",
      },
      {
        title: "Secure Online Payment",
        text: "Visa / MasterCard / Bank Transfer",
      },
    ],
    tagline: ["Your Beauty", "Our Priority"],
  },
  cart: {
    title: "Your Cart",
    subtotal: "Subtotal",
    checkout: "Proceed to Checkout",
    continue: "Continue Shopping",
    empty: "Your cart is empty.",
  },
  search: { placeholder: "Search products…", empty: "No products found." },
  footer: {
    newsletterTitle: "Subscribe for Exclusive Offers",
    placeholder: "Your email address",
    button: "Subscribe",
    copyright: "© 2026 Adorn. All rights reserved.",
    whatsappCta: "Chat on WhatsApp",
  },
};
