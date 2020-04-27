module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:eslint-comments/recommended",
  ],
  env: {
    jest: true,
    browser: true,
    es6: true,
    node: true,
  },
  parser: "babel-eslint",
  globals: {
    __DEV__: true,
  },
  plugins: ["react", "react-native", "prettier", "react-hooks"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    sourceType: "module",
  },
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".js", ".jsx", ".ts", ".tsx"],
    },
    "import/resolver": {
      "babel-module": {},
    },
  },
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: true,
        printWidth: 100,
      },
    ],
    // "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "import/no-unresolved": [2, { caseSensitive: false }],
    "import/no-extraneous-dependencies": 2,
    "import/prefer-default-export": 0,
    "react/destructuring-assignment": 2,
    "no-continue": 0,
    camelcase: 0,
    "react/prefer-stateless-function": 0,
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": "off",
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-raw-text": 2,
    "react-native/no-single-element-style-arrays": 2,
    "react-hooks/exhaustive-deps": 0,
    "no-unused-vars": [
      "error",
      {
        args: "all",
      },
    ],
    "symbol-description": "off",
    "class-methods-use-this": "off",
    "react/no-typos": "off",
    "no-underscore-dangle": "off",
    radix: "off",
    "no-restricted-globals": "off",
    "global-require": "off",
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
      },
    ],
    "react/sort-comp": [
      "error",
      {
        order: [
          "static-variables",
          "static-methods",
          "state",
          "instance-variables",
          "lifecycle",
          "everything-else",
          "rendering",
          "methods",
          "events",
          "/^set.+Ref$/",
        ],
      },
    ],
    "react/jsx-props-no-spreading": [
      0,
      {
        ".js": "enforce",
        custom: "enforce",
        explicitSpread: "enforce",
      },
    ],
    "react/static-property-placement": 0,
    "no-async-promise-executor": 0,
    "react/prop-types": 1,
    "react/no-did-update-set-state": 0,
    "react/state-in-constructor": 0,
    "react-hooks/rules-of-hooks": 0,
  },
};
