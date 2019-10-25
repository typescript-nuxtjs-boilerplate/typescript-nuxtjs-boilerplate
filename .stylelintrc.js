module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-rscss/config'
  ],
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    'string-quotes': 'single', // シングルクォーテーションに統一
    'no-empty-source': null, // Vueのため無効化
    'rscss/class-format': [
      false,
      {
        maxDepth: 3 // 親子関係は最大３ネストまで
      }
    ],
    'rscss/no-descendant-combinator': false, // 子孫セレクターを許可する
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true
  },
};
