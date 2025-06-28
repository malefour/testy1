import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
    overrides: [
      {
        files: ['src/**/*.{ts,tsx,js,jsx}'],
        rules: {
          'no-restricted-imports': [
            'error',
            {
              paths: [
                {
                  name: '../backend',
                  message: 'Do not import backend modules into frontend code.'
                },
                {
                  name: '../shared/backend-only',
                  message: 'Do not import backend-only shared modules into frontend.'
                }
              ]
            }
          ]
        }
      }
    ]
  }
);
