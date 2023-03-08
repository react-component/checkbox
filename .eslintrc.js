module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    'no-template-curly-in-string': 0,
    'prefer-promise-reject-errors': 0,
    'react/no-array-index-key': 0,
    'react/sort-comp': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'jsx-a11y/no-autofocus': 0,
  },
};
