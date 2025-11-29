import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import { defineConfig } from "eslint/config";

function createConfig(options: Record<string, boolean>) {
  if (!options.ci && process.env["ci"] !== "true") return [];
  return defineConfig({
    name: "simple-import-sort/setup",
    plugins: {
      "simple-import-sort": eslintPluginSimpleImportSort,
    },
  });
}

export { createConfig };
