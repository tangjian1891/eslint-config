import { defineConfig } from "eslint/config";
import eslintConfigPrettierFlat from "eslint-config-prettier/flat";
export function createConfig() {
  return defineConfig(eslintConfigPrettierFlat);
}
