import eslintConfigPrettierFlat from "eslint-config-prettier/flat";
import { defineConfig } from "eslint/config";
export function createConfig() {
  return defineConfig(eslintConfigPrettierFlat);
}
