module.exports = {
  /**
   * 设置为根目录
   * @see https://eslint.org/docs/latest/user-guide/configuring/configuration-files#cascading-and-hierarchy
   */
  root: true,
  extends: ['prettier'],
  env: {
    node: true,
  },
  plugins: ['eslint-plugin-import', 'prettier'],
  rules: {
    /** 请与 `.prettierrc.js` 保持一致 */
    'max-len': [
      'error',
      {
        /** 一行的字符数, 如果超过会进行换行 */
        code: 180,
        tabWidth: 2,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        ignoreStrings: true,
      },
    ],
    semi: ['error', 'never'],
    'no-console': 'warn',
    /** 不能重复引入 */
    'import/no-duplicates': 'warn',
    /** 引用必须在依赖中有声明 */
    'import/no-extraneous-dependencies': [
      'warn',
      {
        /**
         * SRC 下不能有只声明在 devDependencies 的依赖
         * 特定情况可以通过 `// eslint-disable-next-line import/no-extraneous-dependencies` 忽略
         */
        devDependencies: ['**/*.spec.ts', '**/*/jest.config.*.ts'],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts'],
      extends: ['.eslintrc/ts.js'],
    },
    {
      files: ['**/*.js'],
      extends: ['.eslintrc/cjs.js'],
    },
    {
      files: ['**/*.mjs'],
      extends: ['.eslintrc/esm.js'],
    },
  ],
}
