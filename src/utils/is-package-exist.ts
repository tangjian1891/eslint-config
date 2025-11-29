import fs from "node:fs";
import path from "node:path";
import process from "node:process";

interface PackageJson {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
}

// 缓存 package.json 内容，避免重复读取
let pkgCache: PackageJson | null = null;

/**
 * 简易版包存在检测
 * 原理：读取当前工作目录下的 package.json，检查依赖列表
 * 使用缓存机制，同一进程中不会重复读取文件
 */
export function isPackageExists(name: string): boolean {
  // 如果缓存不存在，读取文件
  if (pkgCache === null) {
    try {
      const pkgPath = path.resolve(process.cwd(), "package.json");
      if (fs.existsSync(pkgPath)) {
        pkgCache = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
      } else {
        pkgCache = {};
      }
    } catch (e) {
      // JSON 解析失败等异常情况
      console.warn("[MyESLint] Failed to read package.json:", e);
      pkgCache = {};
    }
  }

  // 检查各个依赖字段
  // 使用 ?. 可选链，防止字段不存在报错
  return !!(
    pkgCache?.dependencies?.[name] ||
    pkgCache?.devDependencies?.[name] ||
    pkgCache?.peerDependencies?.[name]
  );
}
