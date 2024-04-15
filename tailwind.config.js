/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      ff: "Space Mono, monospace",
    },
    extend: {
      colors: {
        Strongcyan: "hsl(172, 67%, 45%)",
        Verydarkcyan: "hsl(183, 100%, 15%)",
        Grayishcyan: "hsl(184, 14%, 56%)",
        LightgrayishCyan: "hsl(185, 41%, 84%)",
        VerylightgrayishCyan: "hsl(189, 41%, 97%)",
        White: "hsl(0, 0%, 100%)",
        Darkgrayishcyan: "hsl(186, 14%, 43%)",
      },
      maxWidth: {
        maxw1200px: "900px",
        maxw20ch: "20ch",
      },
      width: {
        w70: "70%",
      },
      letterSpacing: {
        widest: "0.7rem",
      },
      gap: {
        "gap-3": "0.9rem",
      },
      borderRadius: {
        borderadius: "1.5rem 1.5rem 0 0",
      },
      boxShadow: {
        boxShadow: "0px 0px 4px 3px hsl(172, 67%, 45%)",
      },
    },
  },
  plugins: [],
};
