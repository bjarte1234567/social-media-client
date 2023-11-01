module.exports = {
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2021,
  },
  
  rules: {
    // add specific eslint rules here
  },
  overrides: [
    {
      files: ["**/*.js"],
      rules: {
        // add rules for test files
      }
    }
  ]
};

  