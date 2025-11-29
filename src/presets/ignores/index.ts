import { defineConfig } from "eslint/config";

export default [
  function createConfig() {
    return defineConfig({
      name: "ignore",
      ignores: ["node_modules", "dist", "build"],
    });
  },
];
