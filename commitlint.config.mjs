/** @type {import('@commitlint/types').UserConfig} */
const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      ['app', 'content', 'components', 'design', 'lib', 'ci', 'deps', 'docs', 'config', 'tests'],
    ],
  },
};

export default config;
