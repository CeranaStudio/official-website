module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['eslint:recommended', '@nuxtjs/eslint-config-typescript', 'prettier'],
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'vue', 'prettier'],
    rules: {
        'vue/multi-word-component-names': 'off',
        'prettier/prettier': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_'
            }
        ]
    }
}
