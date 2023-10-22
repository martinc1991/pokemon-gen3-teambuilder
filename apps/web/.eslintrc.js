module.exports = {
  extends: ['next', 'next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  rules: {
    'import/no-default-export': 'off',
    'jsx-a11y/no-autofocus': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
  },
};
