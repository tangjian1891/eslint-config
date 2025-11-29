import { defineConfig } from "eslint/config";

export default function rules() {
  return defineConfig({
    name: "typescript/rules",
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
    },
  });
}
