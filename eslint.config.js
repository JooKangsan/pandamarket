const js = require('@eslint/js');
const typescript = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const prettier = require('eslint-plugin-prettier');
const importPlugin = require('eslint-plugin-import');
const nextPlugin = require('@next/eslint-plugin-next');

module.exports = [
  // 기본 JavaScript 규칙
  {
    files: ['**/*.js', '**/*.jsx', 'eslint.config.js'],
    rules: {
      'no-console': 'error',
    },
  },
  // TypeScript 전용 규칙
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: '.',
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: 'readonly',
        JSX: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      import: importPlugin,
      prettier: prettier,
      next: nextPlugin,
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          moduleDirectory: ['node_modules', '.yarn/cache', '.pnp.cjs'],
        },
      },
      react: {
        version: 'detect',
      },
    },
    rules: {
      // TypeScript rules
      '@typescript-eslint/no-explicit-any': 'off',

      // Prettier rules
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],

      // React rules
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',

      // Import rules
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            {
              pattern: 'react*',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'next*',
              group: 'external',
              position: 'after',
            },
            {
              pattern: '@recoil/*',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@pages/*',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@components/*',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@hooks/*',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@lib/*',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@types/*',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@constants/*',
              group: 'internal',
              position: 'after',
            },
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'never',
        },
      ],
      'import/no-unresolved': 'off',
      'import/export': 'error',

      // Other rules
      'no-console': 'error',
      'no-undef': 'error',
    },
  },
];
