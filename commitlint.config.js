module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': () => [2, 'always', 500], // error when the length of the commit message reaches 500 characters
  },
};
