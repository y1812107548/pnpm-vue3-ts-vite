module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
		'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended' // 处理prettier和eslint兼容
    ],
    'overrides': [],
    'parser': 'vue-eslint-parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
		'parser': '@typescript-eslint/parser',
        'sourceType': 'module'
    },
    'plugins': [
        'vue',
        '@typescript-eslint',
    ],
    'rules': {
        'indent': [
            'warn',
            2
        ],
        'linebreak-style': [
            'warn',
            'unix'
        ],
        'quotes': [
            'warn',
            'single'
        ],
        'semi': [
            'warn',
            'always'
        ],
    }
};
