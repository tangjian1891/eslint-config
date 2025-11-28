import { createPromiseConfigs } from "./src";
export default createPromiseConfigs({
  vue: true,
  typescript: true,
  sort: true,
  ci: false, // 手动开启，或者设置环境变量 ci=true
});
