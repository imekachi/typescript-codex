module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    '.prettierrc.cjs',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'unused-imports'],
  rules: {
    // Import sorting
    'import/order': [
      'warn',
      {
        pathGroups: [{ pattern: '@/**', group: 'internal' }],
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'never',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
    'sort-imports': ['warn', { ignoreCase: true, ignoreDeclarationSort: true }],
    // Remove unused imports
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
  },
}
