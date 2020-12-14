module.exports = {
    env: {
        browser: true,
        'jest/globals': true,
    },
    root: true,
    extends: ['@react-native-community', 'prettier', 'prettier/react'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'jest', 'import'],
    rules: {
        'react-native/no-inline-styles': 0,
        'no-restricted-imports': ['error', { patterns: ['aidbox-react/lib'] }],
        'prettier/prettier': 0,
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', ['index', 'sibling', 'parent']],
                'newlines-between': 'always',
                pathGroupsExcludedImportTypes: ['builtin'],
                pathGroups: [
                    {
                        pattern: 'aidbox-react/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: 'shared/**',
                        group: 'internal',
                        position: 'after',
                    },
                    {
                        pattern: 'src/**',
                        group: 'internal',
                        position: 'after',
                    },
                ],
                alphabetize: { order: 'asc', caseInsensitive: true },
            },
        ],
    },
};
