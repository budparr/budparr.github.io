import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import { nodeResolve } from "@rollup/plugin-node-resolve";
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
    nodeResolve(),
    babel({ babelHelpers: "bundled", presets: ["@babel/preset-env"] }),
    !dev && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
