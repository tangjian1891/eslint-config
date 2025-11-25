import { defineConfig } from "eslint/config";

import { createConfigs } from "./src";
export default defineConfig(
  ...(await createConfigs({
    vue: true,
    typescript: true,
    sort: true,
    ci: false, // 手动开启，或者设置环境变量 ci=true
  })),
);
