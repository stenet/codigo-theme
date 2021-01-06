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
        "space-x-1",
        "space-x-4",
        "space-x-reverse",
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
        "bg": "var(--bg)",
        "input": "var(--input)",
        "input-border": "var(--input-border)",
        "input-border-focus": "var(--input-focus)",
        "border": "var(--border)",
        "text": "var(--text)",
        "header": "var(--header)",
        "link": "var(--link)"
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