import { defineConfig } from "eslint/config";
import { utils } from "../../utils";

async function createConfig(options: Record<string, boolean>) {
  if (!options.typescript) return [];

  const tseslint = await utils.loadTypescriptEslint();

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
      "@typescript-eslint/ban-ts-comment": "off",
    },
  });
}

export { createConfig };
