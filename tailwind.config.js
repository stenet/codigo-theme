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
      fontSize: {
        "xs-e": ".75em",
        "sm-e": ".875em",
        "tiny-e": ".875em",
        "base-e": "1em",
        "lg-e": "1.125em",
        "xl-e": "1.25em",
        "2xl-e": "1.5em",
        "3xl-e": "1.875em",
        "4xl-e": "2.25em",
        "5xl-e": "3em",
        "6xl-e": "4em",
        "7xl-e": "5em"
      },
      colors: {
        "nav-mobile-bg": "#6B7280",
        "nav-mobile-text": "#FFFFFF",
        "nav-bg": "#F2F2F2",
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