/** @type {import('stylelint').Config} */
export default {
    extends: [
        'stylelint-config-html/html',
        'stylelint-config-html/vue',
        'stylelint-config-html/astro',
        'stylelint-config-standard-scss',
        'stylelint-config-standard-vue/scss'
    ],
    plugins: ['stylelint-scss', 'stylelint-prettier'],
    overrides: [
        {
            files: ['*.{html,astro,tsx,vue}', '**/*.{html,astro,tsx,vue}'],
            customSyntax: 'postcss-html'
        }
    ],
    rules: {
        'prettier/prettier': true,
        'at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }],
        'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }]
    }
};
