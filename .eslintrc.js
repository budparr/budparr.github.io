module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  // plugins: ["prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: ["@nuxtjs", "plugin:prettier/recommended"],
  // add your custom rules here
  rules: {
    "no-console": "off",
    "vue/no-v-html": "off",
    // "prettier/prettier": "error",
    "vue/html-self-closing": 0
  }
};
