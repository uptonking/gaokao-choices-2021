module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  // ESLint extends configurations recursively
  extends: [
    'alloy',
    'alloy/react',
    'alloy/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  // 自定义规则，可以覆盖掉extends的配置,0-off,1-warn,2-error
  rules: {
    'no-param-reassign': 1,
    'no-invalid-this': 1,
    'no-unused-vars': 1,
    'no-empty': 1,
    'no-var': 1,
    'no-return-assign': 1,
    'one-var': 1,
    'no-inner-declarations': 1,
    'guard-for-in': 1,
    'no-promise-executor-return': 1,
    complexity: 1,
    'prefer-const': 1,
    'prefer-spread': 1,
    'prefer-rest-params': 1,
    'prefer-object-spread': 1,
    radix: 1,
    'max-nested-callbacks': 1,
    'max-params': 1,
    'react/no-find-dom-node': 1,
    'react/no-deprecated': 1,
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/prefer-es6-class': 0,
    'react/sort-comp': 1,
    'react/react-in-jsx-scope': 0,
    'react/jsx-no-useless-fragment': 1,
    'react/jsx-key': 1,
    'react/jsx-uses-react': 0,
    'react/jsx-fragments': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-empty-interface': 1,
    '@typescript-eslint/no-empty-function': 1,
    '@typescript-eslint/no-non-null-assertion': 1,
    '@typescript-eslint/no-invalid-this': 1,
    '@typescript-eslint/no-var-requires': 1,
    '@typescript-eslint/no-require-imports': 1,
    '@typescript-eslint/no-duplicate-imports': 1,
    '@typescript-eslint/ban-types': 1,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/member-ordering': 0,
    '@typescript-eslint/consistent-type-definitions': 0,
    '@typescript-eslint/prefer-for-of': 0,
    '@typescript-eslint/prefer-optional-chain': 0,
    '@typescript-eslint/method-signature-style': 1,
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },
};
