import { defineConfig } from "eslint/config";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
export function createConfig(options: Record<string, boolean>) {
  if (!options.ci || process.env["CI"] !== "true") return;

  return defineConfig(
    {
      name: "ci-unused-imports",
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
    },
    {
      name: "ci-sort",
      plugins: {
        "simple-import-sort": eslintPluginSimpleImportSort,
      },
      rules: {
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
      },
    }
  );
}
