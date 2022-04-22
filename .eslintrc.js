module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: [
    'jsdoc'
  ],
  extends: [
    'plugin:vue/essential',
    'plugin:jsdoc/recommended',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
