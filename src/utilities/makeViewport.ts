/**
 * makeViewport
 *
 * ua から判定した viewport を生成します
 *
 * @param {ua} ユーザーエージェント（ua で判定しない場合はとくに使用しない）
 * @param {locale} ローカライズファイル
 */
export function makeViewport(ua: any, locale: any): any {
  if (process.server) {
    return {}
  }

  console.log('screen.width:', screen.width)

  let viewport: any = null

  if (screen.width < 321) {
    // iPhoneSE/5の時、375pxサイズ縮小
    viewport = {
      hid: locale('meta.viewport.small.hid'),
      name: locale('meta.viewport.small.name'),
      content: locale('meta.viewport.small.content')
    }
  } else if (screen.width < 768 || screen.width >= 1024) {
    // SP/PCサイズの時、通常
    viewport = {
      hid: locale('meta.viewport.normal.hid'),
      name: locale('meta.viewport.normal.name'),
      content: locale('meta.viewport.normal.content')
    }
  } else {
    // タブレットサイズの時、1200pxサイズ縮小
    viewport = {
      hid: locale('meta.viewport.else.hid'),
      name: locale('meta.viewport.else.name'),
      content: locale('meta.viewport.else.content')
    }
  }

  // if (ua.isFromIpad()) {
  //   // iPad の場合
  //   viewport = {
  //     hid: locale('meta.viewport.ipad.hid'),
  //     name: locale('meta.viewport.ipad.name'),
  //     content: locale('meta.viewport.ipad.content')
  //   }
  //   // viewport = {
  //   //   hid: 'viewport',
  //   //   name: 'viewport',
  //   //   content: 'width=1200'
  //   // }
  // } else {
  //   // iPad 以外の場合
  //   viewport = {
  //     hid: locale('meta.viewport.else.hid'),
  //     name: locale('meta.viewport.else.name'),
  //     content: locale('meta.viewport.else.content')
  //   }
  //   // viewport = {
  //   //   hid: 'viewport',
  //   //   name: 'viewport',
  //   //   content: 'width=device-width, initial-scale=1'
  //   // }
  // }

  return viewport
}
