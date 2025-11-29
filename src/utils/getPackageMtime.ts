import path from "node:path";
import fs from "node:fs";
/**
 *以此函数获取 package.json 的修改时间戳
 * fs.statSync 是非常轻量的操作，只读取文件元数据，不读取内容
 */
export function getPackageMtime(): number {
  try {
    const pkgPath = path.resolve(process.cwd(), "package.json");
    return fs.statSync(pkgPath).mtimeMs;
    
  } catch {
    // 如果没有 package.json，返回 0
    return 0;
  }
}
