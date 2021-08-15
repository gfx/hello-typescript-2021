module.exports = {
  root: true,
  extends: [
    // https://eslint.org/docs/rules/
    "eslint:recommended",
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.ts
    "plugin:@typescript-eslint/recommended",

    // https://github.com/benmosher/eslint-plugin-import
    "plugin:import/recommended",
    "plugin:import/typescript",

    // https://prettier.io/docs/en/integrating-with-linters.html
    // > Make sure to put it last, so it gets the chance to override other configs.
    "prettier",
  ],
  plugins: [
    "@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  settings: {},
  rules: {
    "import/no-unresolved": "off", // cannot handle `paths` in tsconfig
    "import/no-cycle": "error",
    "import/no-default-export": "warn",

    "@typescript-eslint/array-type": ["warn", { default: "generic" }],
    "@typescript-eslint/naming-convention": [
      "warn",
      { "selector": "default", "format": ["camelCase", "UPPER_CASE", "PascalCase"], "leadingUnderscore": "allow" },
      { "selector": "typeLike", "format": ["PascalCase"], "leadingUnderscore": "allow" },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",

    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/ban-ts-comment": "off",
  },
};
