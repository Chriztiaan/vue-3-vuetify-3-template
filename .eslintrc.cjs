/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    'extends': [
        'plugin:import/typescript',
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript'
    ],
    parserOptions: {
        "sourceType": "module",
        "ecmaVersion": 'latest'
    },
    rules: {
        semi: [2, 'always'],
        eqeqeq: [0, 'never'],
        "vue/multi-word-component-names": 'off'
    }
};
