import { defineConfig } from "eslint/config";

export default function rules(options: Record<string, boolean>) {
  return defineConfig({
    name: "vue/rules",
    rules: {},
  });
}
