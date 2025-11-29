// 使用 unknown 类型，因为这些是可选的 peerDependencies
// 实际类型会在使用时由 TypeScript 的模块增强自动推断
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LazyModule = any;

/**
 * 加载 typescript-eslint 模块
 */
export async function loadTypescriptEslint(): Promise<LazyModule> {
  return (await import("typescript-eslint")).default;
}

/**
 * 加载 eslint-plugin-vue 模块
 */
export async function loadVuePlugin(): Promise<LazyModule> {
  return (await import("eslint-plugin-vue")).default;
}

/**
 * 加载 vue-eslint-parser 模块
 */
export async function loadVueParser(): Promise<LazyModule> {
  return (await import("vue-eslint-parser")).default;
}
