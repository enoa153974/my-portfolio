/** @type {import('@markuplint/ml-config').Config} */
export default {
    extends: ['markuplint:recommended'],
    parser: {
        '.astro$': '@markuplint/astro-parser',
        '.tsx$': '@markuplint/jsx-parser',
        '.vue$': '@markuplint/vue-parser'
    },
    specs: {
        '.tsx$': '@markuplint/react-spec',
        '.vue$': '@markuplint/vue-spec'
    },
    rules: {
        'character-reference': false,
        'permitted-contents': false,
        'required-h1': false
    },
    nodeRules: [
        {
            selector: 'head',
            rules: {
                'required-element': {
                    options: {
                        ignoreHasMutableContents: true
                    }
                }
            }
        }
    ]
};
