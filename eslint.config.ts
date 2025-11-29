import { createPromiseConfigs } from "./src";

console.time("[MyESLint] Total Config Factory time");
let c = createPromiseConfigs({
  vue: true,
  // typescript: true,
  sort: true,
  // ci: true, // 手动开启，或者设置环境变量 ci=true
});
console.timeEnd("[MyESLint] Total Config Factory time");

export default c;
