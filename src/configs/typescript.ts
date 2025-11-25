import { defineConfig } from "eslint/config";
async function createConfig(options: Record<string, boolean>) {
  if (!options.typescript) return;

  const mmm = await import("@typescript-eslint/parser");
  const tseslint = mmm.default;
  console.log("拿不到牛马", mmm);

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
