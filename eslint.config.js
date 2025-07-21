import js from '@eslint/js';
import globals from 'globals';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';
import typescriptEslintParser from '@typescript-eslint/parser';
import typescriptEslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

export default [
    js.configs.recommended,
    ...typescriptEslint.configs.recommended,
    ...eslintPluginAstro.configs['flat/recommended'],
    ...pluginVue.configs['flat/recommended'],
    eslintConfigPrettier,
    {
        files: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.vue'],
        languageOptions: {
            parser: typescriptEslintParser,
            parserOptions: {
                project: true,
                sourceType: 'module'
            }
        }
    },
    {
        files: ['./src/**/*.astro'],
        languageOptions: {
            globals: {
                ...globals.browser,
                dataLayer: false
            }
        }
    },
    {
        rules: {
            'no-console': 'warn'
        }
    }
];
