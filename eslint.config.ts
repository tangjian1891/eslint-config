import { defineConfig } from "eslint/config";
import { createConfigs } from "./src";

export default defineConfig(
  ...createConfigs({
    vue: true,
    typescript: true,
  })
);
