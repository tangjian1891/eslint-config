import { createPromiseConfigs } from "./src";
export default createPromiseConfigs({
  vue: true,
  typescript: false,
  sort: true,
  ci: true, // 手动开启，或者设置环境变量 ci=true
});
