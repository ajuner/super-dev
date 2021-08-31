module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    // enUS: all rules docs https://eslint.org/docs/rules/
    // zhCN: 所有规则文档 https://eslint.bootcss.com/docs/rules/
    // 基础规则 全部 ES 项目通用
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'quote-props': 'off',
    // 结尾必须有逗号(主要缓解增加一行对象属性，导致 git 变更记录是两行的情况)
    'comma-dangle': ['error', 'always-multiline'],
    // 逗号必须在一行的结尾
    'comma-style': ['error', 'last'],
    // 禁止混合使用不同的操作符 'error','off'
    'no-mixed-operators': 'off',
    // 禁止未使用过的变量 default: ['error', { vars: 'local' }]
    'no-unused-vars': ['off'],
    // 强制在代码块中开括号前和闭括号后有空格
    'block-spacing': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    // 要求使用分号代替 ASI (semi)
    semi: ['error', 'always'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],

    /* vue 项目专用 */
    'vue/script-setup-uses-vars': 'off',
    'vue/require-default-prop': 'warn',
    'vue/singleline-html-element-content-newline': ['off'],
    // 模板中组件名称使用 kebab-case 模式
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],
    'vue/custom-event-name-casing': 'off',
    /* typescript */
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // disable `function-return` the rule for all files
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],
    // bug fix
    'template-curly-spacing': 'off',
    'vue/experimental-script-setup-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
