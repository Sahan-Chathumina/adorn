// UI theme: edit values here; they become CSS variables at runtime.
export const theme = {
  colors: {
    primary: "#4f0c1d",
    primaryDark: "#3F0C18",
    primaryLight: "#7A2236",
    gold: "#B98E58",
    goldLight: "#D7AF8B",
    cream: "#FBF4EE",
    beige: "#F1E1D1",
    softBeige: "#F7EEE6",
    white: "#FFFFFF",
    text: "#2E2020",
    muted: "#756565",
    border: "#E8DDD5",
    success: "#19AF7E",
    sale: "#E5195F",
  },
  fonts: {
    display: "'Cormorant Garamond', Georgia, serif",
    script: "'Great Vibes', cursive",
    body: "'Inter', system-ui, sans-serif",
  },
  radius: { sm: "8px", md: "14px", lg: "22px" },
  shadow: {
    card: "0 4px 16px rgba(76,15,27,.08)",
    drawer: "0 10px 40px rgba(0,0,0,.25)",
  },
  layout: { maxWidth: "1240px", headerHeight: "64px" },
};
export const applyTheme = () => {
  const s = document.documentElement.style;
  const kebab = (k: string) =>
    k.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
  for (const [group, vals] of Object.entries(theme))
    for (const [k, v] of Object.entries(vals))
      s.setProperty(`--${group === "colors" ? "c" : group}-${kebab(k)}`, v);
};
