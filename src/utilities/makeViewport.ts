/**
 * makeViewport
 *
 * ua から判定した viewport を生成します
 *
 * @param {ua} ユーザーエージェント
 * @param {locale} ローカライズファイル
 */
export function makeViewport(ua: any, locale: any): any {
  let viewport: any = null

  if (ua.isFromIpad()) {
    // iPad の場合
    viewport = {
      hid: locale('meta.viewport.ipad.hid'),
      name: locale('meta.viewport.ipad.name'),
      content: locale('meta.viewport.ipad.content')
    }
    // viewport = {
    //   hid: 'viewport',
    //   name: 'viewport',
    //   content: 'width=1200'
    // }
  } else {
    // iPad 以外の場合
    viewport = {
      hid: locale('meta.viewport.else.hid'),
      name: locale('meta.viewport.else.name'),
      content: locale('meta.viewport.else.content')
    }
    // viewport = {
    //   hid: 'viewport',
    //   name: 'viewport',
    //   content: 'width=device-width, initial-scale=1'
    // }
  }

  return viewport
}
