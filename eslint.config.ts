import { defineConfig } from "eslint/config";
import unusedImports from "eslint-plugin-unused-imports";

import { createConfigs } from "./src";
export default defineConfig(
  ...createConfigs({
    vue: true,
    typescript: true,
    sort: true,
  }),
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  }
);
