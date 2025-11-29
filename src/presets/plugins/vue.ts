import { defineConfig } from "eslint/config";
import { utils } from "../../utils";

async function createVueAndTypescriptConfig(pluginVue: any) {
  const [parserVue, tseslint] = await Promise.all([
    utils.loadVueParser(),
    utils.loadTypescriptEslint(),
  ]);

  return defineConfig({
    name: "vue&typescript",
    files: ["**/*.vue"],
    plugins: {
      vue: pluginVue,
      "@typescript-eslint": tseslint.plugin,
    },
    extends: [
      pluginVue.configs["flat/recommended"],
      tseslint.configs.recommended,
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: parserVue,
      parserOptions: {
        parser: tseslint.parser,
        projectService: false, // close type aware ,use volar  type checking
        extraFileExtensions: [".vue"],
      },
    },
  });
}

async function createVueConfig(pluginVue: any) {
  return defineConfig({
    name: "vue",
    files: ["**/*.vue"],
    plugins: {
      vue: pluginVue,
    },
    extends: [pluginVue.configs["flat/recommended"]],
  });
}

async function createConfig(options: Record<string, boolean>) {
  if (!options.vue) return [];

  const pluginVue = await utils.loadVuePlugin();

  return options.typescript
    ? createVueAndTypescriptConfig(pluginVue)
    : createVueConfig(pluginVue);
}

export { createConfig };
