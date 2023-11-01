module.exports = {
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2021,
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  rules: {
    //add any rules for elsint
  },
};
  "extends": "eslint:recommended",
  "overrides": [
    {
      "files": ["**/*.cy.js"],
      "env": { "cypress/globals": true },
      "plugins": ["cypress"],
      "extends": ["plugin:cypress/recommended"],
      "rules": {
        "cypress/no-unnecessary-waiting": "off",
        "no-unused-vars": "off"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  }
}

  