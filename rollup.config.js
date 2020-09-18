import postcss from "rollup-plugin-postcss";
import replace from "@rollup/plugin-replace";

import { terser } from "rollup-plugin-terser";

const dev = process.env.NODE_ENV !== "production";

export default {
  input: "assets/index.js",
  output: {
    sourcemap: false,
    format: "iife",
    file: "public/dist/index.js",
  },
  plugins: [
    replace({
      DEV_MODE: dev,
    }),
    // svg(),
    postcss({
      extract: true,      
      minimize: !dev,
    }),
    !dev && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
