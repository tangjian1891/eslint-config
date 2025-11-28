import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import globals from "globals";
// default add
function createConfig() {
  return defineConfig({
    name: "js",
    plugins: {
      js,
    },
    extends: [js.configs.recommended],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.vue
      },
      parserOptions: {
        allowReserved: false,
        ecmaFeatures: {
          globalReturn: false,
          impliedStrict: true,
          jsx: true,
        },
      },
    },
    rules: {},
  });
}

export { createConfig };
