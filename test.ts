// TypeScript test file for ESLint rules

// unused imports (should trigger unused-imports rule in CI mode)
import { useState } from "react";
import fs from "fs";

// unused variable (should trigger unused-vars)
const unusedVar = "I am not used";

// any type (should trigger @typescript-eslint rules)
const anyValue: any = 123;

// console statement (should trigger ci/no-console in CI mode)
console.log("This is a console statement");

// debugger statement (should trigger ci/no-debugger in CI mode)
debugger;

// unsorted imports (should trigger simple-import-sort in CI mode)
import path from "path";
import { readFile } from "fs/promises";

// unused function parameter
function testFunction(usedParam: string, _unusedParam: number) {
  return usedParam;
}

// no-unused-expressions
const result = testFunction("hello", 42);

export { result };
