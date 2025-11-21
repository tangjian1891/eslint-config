import { defineConfig } from "eslint/config";

import { createConfigs } from "./src";
// eslint.config.js
import { Linter } from "eslint";
// 1. 获取原版 no-console 规则
const safeLinter = new Linter({ configType: "eslintrc" });
const originalNoConsole = safeLinter.getRules().get("no-console");
// const linter = new Linter({ configType: "eslintrc" });
// const originalNoConsole = linter.getRules().get("no-console");
// 2. 定义带 Fix 功能的 Wrapper 规则
// 2. 定义魔改版规则
const noConsoleWithFix = {
  meta: {
    ...originalNoConsole.meta,
    fixable: "code", // 必须保留
    docs: {
      ...originalNoConsole.meta.docs,
      description: "no-console with auto-fix",
    },
  },
  create(context) {
    // --- 核心修改开始 ---

    // 我们不代理 context 本身，而是代理一个空对象 {}
    // 这样就绕过了 Proxy 对 "non-configurable" 属性的限制
    const contextProxy = new Proxy(
      {},
      {
        get(_target, prop) {
          // 1. 拦截 report
          if (prop === "report") {
            return (descriptor) => {
              // 注入 fix 函数
              descriptor.fix = (fixer) => {
                const node = descriptor.node;
                const callExpression = node.parent; // CallExpression

                // 确保是 ExpressionStatement (带分号的那种完整语句)
                if (
                  callExpression &&
                  callExpression.parent &&
                  callExpression.parent.type === "ExpressionStatement"
                ) {
                  const statementNode = callExpression.parent;
                  const sourceCode = context.sourceCode;

                  // --- 智能删除整行逻辑开始 ---

                  // 1. 获取当前行的完整文本
                  const lineNum = statementNode.loc.start.line;
                  const lineText = sourceCode.lines[lineNum - 1];

                  // 2. 获取节点的文本
                  const nodeText = sourceCode.getText(statementNode);

                  // 3. 判断：去除首尾空格后，如果 "整行内容" 等于 "节点内容"
                  // 说明这一行只有这句代码（没有注释，没有其他语句）
                  if (lineText.trim() === nodeText) {
                    // 计算删除范围：从本行行首，删到下一行行首
                    const lineStart = sourceCode.getIndexFromLoc({
                      line: lineNum,
                      column: 0,
                    });

                    // 处理最后一行的情况
                    const isLastLine = lineNum === sourceCode.lines.length;
                    let rangeEnd;

                    if (isLastLine) {
                      // 如果是最后一行，直接删到文件末尾
                      rangeEnd = sourceCode.text.length;
                    } else {
                      // 否则，删到下一行的起始位置（这样就包含了本行的换行符）
                      rangeEnd = sourceCode.getIndexFromLoc({
                        line: lineNum + 1,
                        column: 0,
                      });
                    }

                    return fixer.removeRange([lineStart, rangeEnd]);
                  }

                  // --- 智能删除整行逻辑结束 ---

                  // 4. 兜底：如果这一行后面还有注释 (e.g. console.log(1); // comment)
                  // 或者有其他代码，我们只删除语句本身，不删整行，以免误删其他东西
                  return fixer.remove(statementNode);
                }

                // 嵌入式写法 (if (x) console.log(x)) -> 替换为 void 0
                return fixer.replaceText(callExpression, "void 0");
              };

              // 调用真实的 context.report
              context.report(descriptor);
            };
          }

          // 2. 转发其他属性到真实的 context
          // 注意：这里直接访问 context[prop] 以触发原对象的 Getter
          const value = context[prop];

          // 3. 如果获取的是函数（例如 context.getFilename），需要绑定 this
          if (typeof value === "function") {
            return value.bind(context);
          }

          return value;
        },

        // 为了让规则里的 ('prop' in context) 检查也能通过，我们需要拦截 has
        has(_target, prop) {
          return prop in context;
        },
      }
    );
    // --- 核心修改结束 ---

    // 将在这个“虚假目标”上建立的 Proxy 传给原规则
    return originalNoConsole.create(contextProxy);
  },
};
export default defineConfig(
  ...createConfigs({
    vue: true,
    typescript: true,
    sort: true,
    ci: true, // 自动检车process.env.CI是否为"true"
  }),

  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    plugins: {
      custom: {
        rules: {
          "no-console-mod": noConsoleWithFix,
        },
      },
    },
    rules: {
      "no-console": "error",
      "no-undef": "off",
      // "custom/no-console-mod": "error", // 开启魔改版
    },
  }
);
