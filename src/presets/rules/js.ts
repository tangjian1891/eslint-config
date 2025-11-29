import { defineConfig } from "eslint/config";

export default function rules() {
  return defineConfig({
    name: "js/rules",
    rules: {
      "no-console": "off", // close base rule
      "no-debugger": "off", // close base rule
      "no-unused-vars": "off",
    },
  });
}
