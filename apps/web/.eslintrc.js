module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['next', 'next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  rules: {
    'import/no-default-export': 'off',
    'jsx-a11y/no-autofocus': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
          },
        ],
        'react-hooks/exhaustive-deps': 'off',
      },
    },
  ],
};
