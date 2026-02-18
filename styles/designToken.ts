// design-tokens.ts
export const tokens = {
  colors: {
    bg: "white",
    text: "#0A0A0A",         // near-black
    mutedText: "#525252",    // neutral-600-ish
    border: "rgba(0,0,0,0.10)",
    beige: "#F6F1E7",        // warm hint
    beige2: "#FBF8F2",       // even lighter
    green: "#16A34A",        // selected/active
    greenSoft: "rgba(22,163,74,0.10)",
  },
  radius: {
    card: "24px",
    pill: "9999px",
  },
  shadow: {
    card: "0 1px 0 rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.06)",
    hover: "0 1px 0 rgba(0,0,0,0.08), 0 12px 34px rgba(0,0,0,0.09)",
  },
  interaction: {
    // Cal.com-ish: subtle borders + soft hover + clear focus ring
    focusRing: "0 0 0 3px rgba(22,163,74,0.25)",
  },
} as const;
