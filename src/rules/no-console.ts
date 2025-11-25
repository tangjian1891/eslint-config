import { Rule } from "eslint";
import { Linter } from "eslint";
// 1. 获取原版 no-console 规则
const safeLinter = new Linter({ configType: "eslintrc" });
const originalNoConsole = safeLinter.getRules().get("no-console");

export const rule: Rule.RuleModule = {
  meta: {
    ...originalNoConsole?.meta,
    fixable: "code",
    docs: {
      ...originalNoConsole?.meta?.docs,
      description: "no-console with auto-fix",
    },
  },
  create(context: Rule.RuleContext) {
    let newContext = Object.create(context, {
      report: {
        value: (descriptor) => {
          descriptor.fix = (fixer) => {
            const node = descriptor.node;
            if (node.parent?.parent?.type === "ExpressionStatement") {
              return fixer.remove(node.parent.parent);
            }
          };
          return context.report(descriptor);
        },
      },
    });

    const result = originalNoConsole?.create(newContext);

    return result;
  },
};
