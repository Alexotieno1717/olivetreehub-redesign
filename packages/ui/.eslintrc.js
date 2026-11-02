/* eslint-disable no-undef */
module.exports = {
    ...require('eslint-config-custom/.eslintrc.js'),
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: './tsconfig.json',
      ecmaVersion: "latest",
      env: {
        "es6": true
      },
    },
  }
