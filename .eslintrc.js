module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
    allowImportExportEverywhere: true,
  },

  rules: {
    "no-console": ["warn", { allow: ["info", "warn", "error"] }],

    "sort-imports": [
      "warn",
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: true,
      },
    ],
  },
};
