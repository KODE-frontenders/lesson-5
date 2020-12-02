module.exports = {
  parser: "@typescript-eslint/parser",

  extends: [
    "react-app", // Uses the recommended rules Create React App
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Should be last in the list. Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],

  parserOptions: {
    ecmaVersion: 2020,
    sorceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: "detect",
    },
  },

  rules: {
    complexity: ["warn", { max: 10 }],
    "max-lines": ["warn", { max: 150, skipBlankLines: true }],
    "@typescript-eslint/no-explicit-any": 2,
    "react/jsx-wrap-multilines": 1,
    "no-nested-ternary": 1,
    "react/jsx-no-bind": [
      "warn",
      {
        ignoreDOMComponents: true,
        ignoreRefs: true,
        allowArrowFunctions: false,
        allowFunctions: false,
        allowBind: false,
      },
    ],
    "no-console": ["warn", { allow: ["error", "info"] }],
    "react/destructuring-assignment": [
      1,
      "always",
      { ignoreClassFields: true },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
  },

  overrides: [
    {
      files: ["*.stories.*"],
      rules: {
        complexity: 0,
        "max-lines": 0,
        "@typescript-eslint/no-empty-function": 0,
        "import/no-anonymous-default-export": 0,
      },
    },
  ],
};
