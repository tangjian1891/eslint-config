import { defineConfig } from "eslint/config";
import eslintConfigPrettierFlat from "eslint-config-prettier/flat";
// default add
export default function rules() {
  return defineConfig({
    ...eslintConfigPrettierFlat,
    name: "prettier/rules",
  });
}
