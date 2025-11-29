import { defineConfig } from "eslint/config";

export default function rules() {
  return defineConfig({
    name: "unused-imports/rules",
    rules: {
      "unused-imports/no-unused-vars": "off",
    },
  });
}
