import { defineConfig } from "eslint/config";
import eslintConfigPrettierFlat from "eslint-config-prettier/flat";
// default add 
export function createConfig() {
  return defineConfig(eslintConfigPrettierFlat);
}
