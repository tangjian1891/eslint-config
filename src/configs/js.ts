import js from "@eslint/js";
import { defineConfig } from "eslint/config";

function createConfig() {
  return defineConfig({
    name: "js",
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      js,
    },
    extends: [js.configs.recommended],
    languageOptions: {
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
