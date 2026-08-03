/** @type {import('lint-staged').Configuration} */
const config = {
  '*.{ts,tsx,mts}': ['eslint --fix --max-warnings 0', 'prettier --write'],
  '*.{js,mjs,cjs,json,css,md,mdx,yml,yaml}': ['prettier --write'],
};

export default config;
