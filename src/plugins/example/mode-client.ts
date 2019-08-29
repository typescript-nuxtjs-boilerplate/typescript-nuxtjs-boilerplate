/**
 * @file CSR 時だけ動く想定のプラグインをセットする
 */

function modeClient() {
  console.log('window object:', window)
}

export default (context: any, inject: any): void => {
  context.$modeClient = modeClient
  inject('modeClient', modeClient)
}
