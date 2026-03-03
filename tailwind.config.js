/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Source Sans 3"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Playfair Display"', "ui-serif", "Georgia", "serif"],
      },
      colors: {
        brand: {
          violet: "#8b5cf6",
          violetSoft: "#a78bfa",
          violetStrong: "#7c3aed",
          blue: "#3b82f6",
          blueSoft: "#60a5fa",
          blueLight: "#93c5fd",
          blueStrong: "#2563eb",
          pink: "#ec4899",
          danger: "#ef4444",
          dangerSoft: "#f87171",
          dangerStrong: "#dc2626",
          success: "#16bb7c",
        },
      },
    },
  },
  plugins: [],
};
