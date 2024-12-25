import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { configs as tsConfigs } from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

export default [
  // Configuração base do JavaScript
  js.configs.recommended,

  // Configuração para TypeScript
  {
    files: ['**/*.{ts,tsx}'], // Aplica às extensões TypeScript
    languageOptions: {
      parser, // Usa o parser do TypeScript
      ecmaVersion: 2020,
      globals: {
        ...globals.browser, // Remove quaisquer espaços extras nos nomes globais
      },
    },
    rules: {
      ...tsConfigs.recommended.rules, // Adiciona regras recomendadas do TypeScript
    },
  },

  // Configuração para React Hooks
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules, // Adiciona regras recomendadas dos React Hooks
    },
  },

  // Configuração para React Refresh
  {
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
