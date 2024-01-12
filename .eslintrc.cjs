module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/vue3-essential',
		'plugin:@typescript-eslint/recommended'
	],
	'overrides': [
	],
	'parser': 'vue-eslint-parser',
	'parserOptions': {
		'parser': '@typescript-eslint/parser',
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'vue',
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'semi': [ 'error', 'never' ],
		'quotes': [ 'error', 'single' ],
		'no-mixed-spaces-and-tabs': 'error',
		'no-trailing-spaces': 'error',
		'no-multi-spaces': 'error',
		'key-spacing': 'error',
		'eol-last': [ 'error', 'always' ],
		'object-property-newline': 'error',
		'object-curly-spacing': [ 'error', 'always' ],
		'object-curly-newline': [ 'error', {
			'multiline': true,
			'minProperties': 3
		} ],
		'array-bracket-spacing': [ 'error', 'always' ],
		'array-element-newline': [
			'error',
			'consistent',
			{
				'minItems': 3,
				'multiline': true
			}
		],
		'comma-spacing': [ 'error', {
			'before': false,
			'after': true
		} ],
		'comma-dangle': [ 'error', 'never' ],
		'function-paren-newline': [ 'error', { 'minItems': 5 } ],
		'no-empty-function': 'error',
		'keyword-spacing': [ 'error', { 'after': true } ],
		'space-before-blocks': 'error',
		'space-infix-ops': 'error',
		'space-unary-ops': [ 'error', {
			'words': true,
			'nonwords': false
		} ],
		'spaced-comment': [ 'error', 'always' ],
		'semi-spacing': [ 'error', {
			'before': false,
			'after': true
		} ],
		'arrow-body-style': [ 'error', 'as-needed' ],
		'arrow-parens': [ 'error', 'as-needed' ],
		'arrow-spacing': 'error',
		'vue/comment-directive': 'off',
		'vue/multi-word-component-names': 'off',
		'vue/singleline-html-element-content-newline': [ 'off', {
			'ignoreWhenNoAttributes': true,
			'ignoreWhenEmpty': true
		} ],
		'vue/max-attributes-per-line': [ 'error', {
			'singleline': { 'max': 4 },
			'multiline': { max: 3 }
		} ]
	}
}
