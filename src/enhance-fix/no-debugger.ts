import { Rule } from "eslint";
import { Linter } from "eslint";
// 1. 获取原版 no-console 规则
const safeLinter = new Linter({ configType: "eslintrc" });
const originalNoDebugger = safeLinter.getRules().get("no-debugger");

export const noDebuggerWithFix: Rule.RuleModule = {
  meta: {
    ...originalNoDebugger?.meta,
    fixable: "code",
    docs: {
      ...originalNoDebugger?.meta?.docs,
      description: "no-debugger with auto-fix",
    },
  },
  create(context: Rule.RuleContext) {
    let newContext = Object.create(context, {
      report: {
        value: (descriptor) => {
          descriptor.fix = (fixer) => {
            const node = descriptor.node;

            if (node.type === "DebuggerStatement") {
              return fixer.remove(node);
            }
          };
          return context.report(descriptor);
        },
      },
    });

    const result = originalNoDebugger?.create(newContext);

    return result;
  },
};
