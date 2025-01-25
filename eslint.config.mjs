import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
    rules:{
      "no-unused-vars": "off"
    },
  },
  {
    languageOptions: {
      globals: globals.node,
      
    }
  },
];