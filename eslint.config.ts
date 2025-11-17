import { defineConfig } from "eslint/config";

import { createConfigs } from "./src";
console.log(process.env["CI"]);

export default defineConfig(
  ...createConfigs({
    vue: true,
    typescript: true,
    sort: true,
    ci: true, // 自动检车process.env.CI是否为"true"
  })
);
