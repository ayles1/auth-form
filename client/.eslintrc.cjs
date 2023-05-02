module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier'
	],
	'overrides': [],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'react-hooks',
		'@typescript-eslint',
		'prettier'
	],
	'rules': {
		'prettier/prettier': ['error'],
		'indent': [
			'error',
			2
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'react/react-in-jsx-scope': [
			'off'
		],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'@typescript-eslint/semi': [
			'error',
			'always'
		],
		'react/display-name': [
			'off'
		],
		'react/destructuring-assignment': [
			'error',
			'always'
		],
		'react/jsx-no-useless-fragment': [
			'error',
			{
				'allowExpressions': true
			}
		],
		'react/jsx-curly-brace-presence': [
			'warn',
			{
				'props': 'never',
				'children': 'never'
			}
		],
		'react/boolean-prop-naming': [
			'warn',
			{
				'rule': '^(is|has)[A-Z]([A-Za-z0-9]?)+'
			}
		],
		'react/jsx-sort-props': [
			'warn',
			{
				'callbacksLast': true,
				'noSortAlphabetically': true
			}
		]
	}
};
