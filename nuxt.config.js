import { generateRoutes } from "./util/ghost";
module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#b50d38" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~plugins/filters.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // '@nuxtjs/axios',
    // "@nuxtjs/pwa",
    "@nuxtjs/dotenv",
    "nuxt-purgecss"
  ],
  env: {
    // loaded from .env file locally and from netlify in deployment
    ghostUri: process.env.GHOST_URI,
    ghostKey: process.env.GHOST_KEY,
    siteUrl: process.env.SITE_URL
  },
  /*
   * Generate dynamic routes for static site generations
   */
  generate: {
    subFolders: false,
    routes: generateRoutes
  },
  workbox: {
    dev: false
  },
  /*
   ** Extend routes so multiple routes can use same component
   */
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: "PostIndex",
        path: "/page/:pageNumber",
        component: resolve(__dirname, "pages/index.vue")
      });

      routes.push({
        name: "TagIndex",
        path: "/tag/:slug/page/:pageNumber",
        component: resolve(__dirname, "pages/tag/_slug.vue")
      });

      routes.push({
        name: "AuthorIndex",
        path: "/author/:slug/page/:pageNumber",
        component: resolve(__dirname, "pages/author/_slug.vue")
      });
    }
  },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    // postcss: {
    //   preset: {
    //     features: {
    //       customProperties: true
    //     }
    //   }
    // },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
