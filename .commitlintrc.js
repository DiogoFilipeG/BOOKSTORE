module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      referenceActions: [],
      headerPattern: /^(?:\[([A-Z]+-[0-9]*)\] )?(\w*)(?:\(([\w$.\-* ]*)\))?: (.*)$/,
      headerCorrespondence: ['ticket', 'type', 'scope', 'subject'],
      issuePrefixes: ['GFIE-'],
    },
  },
  rules: {
    'header-max-length': [2, 'always', 72],
    'body-max-line-length': [2, 'always', 72],
    'footer-max-line-length': [2, 'always', 72],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'type-enum': [
      2,
      'always',
      ['build', 'chore', 'ci', 'debug', 'docs', 'feat', 'fix', 'hack', 'perf', 'refactor', 'style', 'test'],
    ],
  },
  ignores: [(message) => message.startsWith('WIP:')],
};
