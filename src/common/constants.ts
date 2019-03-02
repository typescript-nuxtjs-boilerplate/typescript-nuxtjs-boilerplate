/**
 * プロジェクト名
 * @type {string}
 */
const pjName: string = require('../../package.json').name;

/**
 * 定数
 */
const Constants = {
  pjName,
};

console.log('Constants: ', Constants);

export default Constants;
