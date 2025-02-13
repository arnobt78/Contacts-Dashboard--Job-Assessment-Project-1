module.exports = {
  // Define the environment in which the code is expected to run
  env: {
    browser: true, // Browser global variables like `window` and `document`
    es2021: true, // Enable all ECMAScript 2021 globals and features
  },
  // Extend the base configurations
  extends: [
    'eslint:recommended', // Use the recommended rules from ESLint
    'plugin:react/recommended', // Use the recommended rules from the eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Use the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier', // Use the prettier configuration to disable rules that conflict with Prettier
  ],
  // Specify the parser to be used
  parser: '@typescript-eslint/parser', // Use the TypeScript parser for ESLint
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing
    },
    ecmaVersion: 12, // Use ECMAScript 2021 syntax
    sourceType: 'module', // Enable the use of imports
  },
  // Define the plugins to be used
  plugins: ['react', '@typescript-eslint'], // Use the React and TypeScript plugins
  // Define custom rules
  rules: {
    'react/react-in-jsx-scope': 'off', // Disable the rule that requires React to be in scope when using JSX
  },
};
