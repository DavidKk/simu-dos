module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    /** 项目 ts 配置文件 */
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-import', 'prettier'],
  rules: {
    /** 类型导出必须使用 type */
    '@typescript-eslint/consistent-type-exports': 'warn',
    /** 类型导入必须使用 type */
    '@typescript-eslint/consistent-type-imports': 'warn',
    /** 不能使用 any */
    '@typescript-eslint/no-explicit-any': 'off',
    /** 必须声明返回类型 */
    '@typescript-eslint/explicit-function-return-type': 'off',
    /** 必须声明入参类型 */
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    /**
     * 基础类型复制无需声明类型
     * @see https://typescript-eslint.io/rules/no-inferrable-types
     */
    '@typescript-eslint/no-inferrable-types': 'warn',
    /** interface 名字前缀 */
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
  },
}
