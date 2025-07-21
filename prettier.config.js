/** @type {import("prettier").Config} */
const config = {
    printWidth: 120,
    tabWidth: 4,
    useTabs: false,
    singleQuote: true,
    trailingComma: 'none',
    semi: true,
    arrowParens: 'always',
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '**/*.astro',
            options: { parser: 'astro' }
        }
    ]
};

export default config;
