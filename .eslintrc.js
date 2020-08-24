module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: { '_': true },
  extends: ['plugin:vue/strongly-recommended'],
  rules: {
    'no-tabs': 0,
    'no-unused-vars': 0,
    'no-return-assign': 0,
    'vue/html-self-closing': 'off',
    'vue/require-default-prop': 0,
    'vue/max-attributes-per-line': [
      // 配置成可允许一行attribute跟着标签
      'error',
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
