/**
 * makeViewport
 *
 * ua から判定した viewport を生成します
 *
 * @param {ua} ユーザーエージェント
 */
export function makeViewport(ua: any): any {
  let viewport: any = null

  if (ua.isFromIpad()) {
    // iPad の場合
    viewport = {
      hid: 'viewport',
      name: 'viewport',
      content: 'width=1200'
    }
  } else {
    // iPad 以外の場合
    viewport = {
      hid: 'viewport',
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }
  }

  return viewport
}
