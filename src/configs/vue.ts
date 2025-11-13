import { defineConfig } from "eslint/config";
import pluginVue from "eslint-plugin-vue";
import tseslint from "typescript-eslint";
import parserVue from "vue-eslint-parser";

function createConfig(options: any) {
  if (!options.vue) return;
  //   <script lang="ts">
  if (options.typescript) {
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
