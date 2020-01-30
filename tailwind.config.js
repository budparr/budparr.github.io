const {
  colors: { teal, orange, pink, ...colors }
} = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    container: {
      center: true,
      padding: "2rem"
    },
    colors: colors,
    textIndent: {
      // defaults to {}
      "1": "0.25rem",
      "2": "0.5rem"
    },
    textShadow: {
      // defaults to {}
      default: "0 2px 5px rgba(0, 0, 0, 0.5)",
      lg: "0 2px 10px rgba(0, 0, 0, 0.5)"
    },
    textStyles: theme => ({
      // defaults to {}
      heading: {
        output: false, // this means there won't be a "heading" component in the CSS, but it can be extended
        fontWeight: theme("fontWeight.bold"),
        lineHeight: theme("lineHeight.tight"),
        marginBottom: theme("marginBottom.32")
      },
      h1: {
        extends: "heading", // this means all the styles in "heading" will be copied here; "extends" can also be an array to extend multiple text styles
        fontSize: theme("fontSize.5xl"),
        "@screen sm": {
          fontSize: theme("fontSize.6xl")
        },
        fontFamily: theme("fontFamily.brand")
      },
      h2: {
        extends: "heading",
        fontSize: theme("fontSize.4xl"),
        "@screen sm": {
          fontSize: theme("fontSize.5xl")
        }
      },
      h3: {
        extends: "heading",
        fontSize: theme("fontSize.4xl")
      },
      h4: {
        extends: "heading",
        fontSize: theme("fontSize.3xl")
      },
      h5: {
        extends: "heading",
        fontSize: theme("fontSize.2xl")
      },
      h6: {
        extends: "heading",
        fontSize: theme("fontSize.xl")
      },
      link: {
        color: theme("colors.blue.700"),
        textDecoration: "underline",
        "&:hover": {
          color: theme("colors.blue.600"),
          textDecoration: "underline"
        }
      },
      richText: {
        fontWeight: theme("fontWeight.normal"),
        fontSize: theme("fontSize.base"),
        lineHeight: theme("lineHeight.relaxed"),
        "> * + *": {
          marginTop: "1em"
        },
        h1: {
          extends: "h1"
        },
        h2: {
          extends: "h2"
        },
        h3: {
          extends: "h3"
        },
        h4: {
          extends: "h4"
        },
        h5: {
          extends: "h5"
        },
        h6: {
          extends: "h6"
        },
        ul: {
          listStyleType: "disc"
        },
        ol: {
          listStyleType: "decimal"
        },
        a: {
          extends: "link"
        },
        p: {
          fontFamily: theme("fontFamily.brand"),
          fontSize: theme("fontSize.lg")
        },
        "b, strong": {
          fontWeight: theme("fontWeight.bold")
        },
        "i, em": {
          fontStyle: "italic"
        }
      }
    }),
    extend: {
      fontFamily: {
        brand: [
          "Chronicle SSm A",
          "Chronicle SSm B",
          "Crimson Text",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif"
        ]
      },
      colors: {
        linen: {
          100: "#FFFEFE",
          200: "#FEFEFD",
          300: "#FDFDFC",
          400: "#FCFBF9",
          500: "#FAF9F7",
          600: "#E1E0DE",
          700: "#969594",
          800: "#71706F",
          900: "#4B4B4A"
        }
      }
    }
  },
  variants: {
    textIndent: ["responsive"],
    textShadow: ["responsive"],
    ellipsis: ["responsive"],
    hyphens: ["responsive"],
    textUnset: ["responsive"],
    caps: ["responsive"],
    nums: ["responsive"],
    ligatures: ["responsive"]
  },
  plugins: [
    require("tailwindcss-typography")({
      // all these options default to the values specified here
      ellipsis: true, // whether to generate ellipsis utilities
      hyphens: true, // whether to generate hyphenation utilities
      textUnset: true, // whether to generate utilities to unset text properties
      caps: true, // whether to generate utilities to use alternate glyphs for capital letters
      nums: true, // whether to generate utilities to use alternate glyphs for numbers, fractions, and ordinal markers
      ligatures: true, // whether to generate ligature utilities
      componentPrefix: "c-" // the prefix to use for text style classes
    })
  ]
};
