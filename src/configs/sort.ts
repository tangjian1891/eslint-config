import { defineConfig } from "eslint/config";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";

export function createConfig(options) {
  if (!options.sort) return;

  return defineConfig({
    name: "sort",
    plugins: {
      "simple-import-sort": eslintPluginSimpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  });
}
