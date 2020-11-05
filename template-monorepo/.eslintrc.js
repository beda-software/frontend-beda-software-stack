module.exports = {
    env: {
        'jest/globals': true,
    },
    root: true,
    extends: ['@react-native-community', 'prettier', 'prettier/react'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'jest'],
    rules: {
        'react-native/no-inline-styles': 0,
        'no-restricted-imports': ['error', { patterns: ['shared/src', 'aidbox-react/src'] }],
    },
};
