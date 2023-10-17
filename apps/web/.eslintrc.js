module.exports = {
  extends: ['custom/next'],
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
