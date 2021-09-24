module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    commonjs: true,
    browser: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.js', '**/__tests__/**/*.js'],
      extends: ['plugin:testing-library/react', 'plugin:jest-dom/recommended'],
    },
  ],
  plugins: ['testing-library', 'jest-dom'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
