module.exports = {
  purge: {
    content: [
      "./js/**/*.js",
      "**/*.php"
    ],
    options: {
      safelist: [
        "grid",
        "lg:grid-cols-3", 
        "grid-cols-1",
        "gap-4",
        "text-white",
        "p-2",
        "px-2",
        "py-1",
        "mb-2",
        "inline-block",
        "rounded-xl",
        "text-sm",
        "leading-tight",
        "space-y-2",
        "space-x-2",
        "border"]
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Roboto", "'Helvetica Neue'", "Helvetica", "Arial", "'sans-serif'"]
      },
      colors: {
        "nav-bg": "#444444",
        "nav-text": "#f0f7fc",
        "nav-text-a": "#c9d1d9",
        "nav-input": "#222222",
        "content-bg": "#F8F8F8",
        "border": "#DDDDDD",
        "text": "#606c76",
        "primary": "#212121"
      },
      listStyleType: {
        "square": "square"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}