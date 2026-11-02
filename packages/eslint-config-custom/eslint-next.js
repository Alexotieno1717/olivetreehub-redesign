module.exports = {
  ...require('./.eslintrc.js'),
  extends: ['next', 'next/core-web-vitals', 'turbo', 'prettier'],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
};
