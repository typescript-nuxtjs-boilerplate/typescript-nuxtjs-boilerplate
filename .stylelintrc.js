module.exports = {
  extends: [],
  processors: ['@mapbox/stylelint-processor-arbitrary-tags'],
  plugins: [
    'stylelint-scss'
  ],
  ignoreFiles: [
    'src/assets/**/*',
    '.nuxt/**/*',
    'node_modules/**/*'
  ],
  rules: {}
};
