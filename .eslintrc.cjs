/**
 * ESLint configuration.
 *
 * @see https://eslint.org/docs/user-guide/configuring
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
  },
  env: {
    es6: true,
  },

  extends: ["eslint:recommended", "prettier"],

  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: ["plugin:@typescript-eslint/recommended"],
      plugins: ["@typescript-eslint"],
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
    {
      files: [".eslintrc.cjs"],
      env: { node: true },
    },
    {
      files: ["*.cjs"],
      parserOptions: { sourceType: "script" },
    },
  ],

  ignorePatterns: [
    "/.cache",
    "/.git",
    "/.husky",
    "/.yarn",
    "/dist",
    "/queries",
  ],
};
