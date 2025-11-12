import { defineConfig } from "eslint/config";

export function createConfig() {
  return defineConfig({
    ignores: ["node_modules", "dist", "build"],
  });
}
