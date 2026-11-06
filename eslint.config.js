import { eslintConfig } from "@bluzzi/eslint-config";

export default eslintConfig(
  {},
  {
    ignores: [
      ".output",
      ".nitro",
      ".tanstack",
      ".impeccable",
      "prototypes",
      "src/routeTree.gen.ts",
      "eslint.config.js",
    ],
  },
);
