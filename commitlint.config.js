module.exports = {
    extends: ['@commitlint/config-conventional'],
	parserPreset: {
    	parserOpts: {
			headerPattern:  /^((feat|fix|docs|style|refactor|test|chore) (?:\[([^\A-Z)\s]+)\]): (.+))(\n{2}|$)(((?:^.+(\n|$))+(?:\n|$){0,2}?)+(?:(^.+(\n|$))+)|(?:^.+$))?/,
      		headerCorrespondence: ['type', 'scope', 'subject']
      	}
    },
	rules: {
		'body-leading-blank': [1, 'always'],
		'body-max-line-length': [2, 'always', 100],
		'footer-leading-blank': [1, 'always'],
		'footer-max-line-length': [2, 'always', 100],
		'header-max-length': [2, 'always', 100],
		'scope-case': [2, 'always', 'lower-case'],
		'subject-case': [
			2,
			'never',
			['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
		],
		'subject-empty': [2, 'never'],
		'subject-full-stop': [2, 'never', '.'],
		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],
		'type-enum': [
			2,
			'always',
			[
				'build',
				'chore',
				'ci',
				'docs',
				'feat',
				'fix',
				'perf',
				'refactor',
				'revert',
				'style',
				'test',
			],
		],
	},
};