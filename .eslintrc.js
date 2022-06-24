module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true,
	},

	parserOptions: {
		ecmaVersion: 13,
		sourceType: 'module',
		allowImportExportEverywhere: true,
	},

	rules: {
		eqeqeq: ['warn'],

		'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],

		'no-const-assign': ['error'],

		'no-debugger': ['error'],

		'no-dupe-keys': ['warn'],

		'no-undef': ['warn'],

		'no-unreachable': ['warn'],
		'no-unused-vars': ['warn'],
		'no-use-before-define': ['warn'],

		'sort-imports': [
			'warn',
			{
				ignoreCase: false,
				ignoreDeclarationSort: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
				allowSeparatedGroups: true,
			},
		],
	},
};
