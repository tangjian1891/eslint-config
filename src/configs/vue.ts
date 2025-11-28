import { defineConfig } from "eslint/config";

async function createConfig(options: Record<string, boolean>) {
  if (!options.vue) return;
  console.log('vue');
  
  // get async module
  const m = await import("eslint-plugin-vue");
  const pluginVue = m.default;

  //   <script lang="ts">
  if (options.typescript) {
    const mm = await import("vue-eslint-parser");
    const parserVue = mm.default;

    const mmm = await import("typescript-eslint");
    const tseslint = mmm.default;

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
  } else {
    return defineConfig({
      name: "vue",
      files: ["**/*.vue"],
      plugins: {
        vue: pluginVue,
      },
      extends: [pluginVue.configs["flat/recommended"]],
    });
  }
}

export { createConfig };
