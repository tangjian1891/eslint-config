import { defineConfig } from "eslint/config";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import { noConsole, noDebugger } from "../rules";

// inclue unused-imports , sort-imports and enhance  rules (support --fix)
export function createConfig(options: Record<string, boolean>) {
  if (!options.ci && process.env["ci"] !== "true") return;
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
    },
    {
      name: "ci-fixer",
      files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
      plugins: {
        ci: {
          rules: {
            "no-console": noConsole,
            "no-debugger": noDebugger,
          },
        },
      },
      rules: {
        "no-console": "off", //close base rule
        "no-debugger": "off", // close base rule
        "ci/no-console": "error",
        "ci/no-debugger": "error",
      },
    }
  );
}
