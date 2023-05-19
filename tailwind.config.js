/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway100: "Raleway_100Thin",
        raleway200: "Raleway_200ExtraLight",
        raleway300: "Raleway_300Light",
        raleway400: "Raleway_400Regular",
        raleway500: "Raleway_500Medium",
        raleway600: "Raleway_600SemiBold",
        raleway700: "Raleway_700Bold",
        raleway800: "Raleway_800ExtraBold",
        raleway900: "Raleway_900Black",
      },
    },
  },
  plugins: [],
};
