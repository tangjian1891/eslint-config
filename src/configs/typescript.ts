import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
function createConfig(options: Record<string, boolean>) {
  if (!options.typescript) return;
  return defineConfig({
    name: "typescript",
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    extends: [tseslint.configs.recommended],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: false, //close type aware ,use ide type checking
      },
    },
    rules: {
      "@typescript-eslint/no-unused-expressions": "off",
    },
  });
}

export { createConfig };
