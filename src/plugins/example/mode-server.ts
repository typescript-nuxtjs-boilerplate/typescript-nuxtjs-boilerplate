/**
 * @file SSR 時だけ動く想定のプラグインをセットする
 */

function modeServer() {
  console.log('window object:', modeServer)
}

export default (context: any, inject: any): void => {
  context.$modeServer = modeServer
  inject('modeServer', modeServer)
}
