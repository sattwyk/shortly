module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
    },
    extend: {
      backgroundImage: {
        "hero-illustration": "url('/src/assets/illustration-working.svg')",
        "shorten-bg": "url('/src/assets/bg-shorten-desktop.svg')",
        "boost-bg": "url('/src/assets/bg-boost-desktop.svg')",
      },
    },
  },
  plugins: [],
};
