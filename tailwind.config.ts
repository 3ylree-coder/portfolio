import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        ink: "var(--ink)",
        mute: "var(--mute)",
        line: "var(--line)",
      },
      fontFamily: {
        sans: ["Pretendard Variable", "Pretendard", "-apple-system", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.25rem, 9vw, 9rem)", { lineHeight: "0.92", letterSpacing: "-0.045em" }],
        title: ["clamp(2.25rem, 5vw, 4.5rem)", { lineHeight: "1", letterSpacing: "-0.035em" }],
      },
    },
  },
  plugins: [],
};
export default config;
