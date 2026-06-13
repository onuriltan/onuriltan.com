import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier/flat";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // The nav onClick handlers only read refs inside event handlers
      // (deferred), but the rule can't see that through the inline navItems
      // array and flags it. Keep it visible as a warning instead of failing CI.
      "react-hooks/refs": "warn",
    },
  },
  prettierConfig,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Content reference dropped in by hand — not part of the app.
    "rotamat-landing*.jsx",
  ]),
]);

export default eslintConfig;
