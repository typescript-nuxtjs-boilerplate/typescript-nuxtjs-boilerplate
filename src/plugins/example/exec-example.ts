/**
 * @file example の plugin を実行するプラグイン
 */

export default ({ $modeClient, $modeServer, app, req, error }): void => {
  // CSR
  // NOTE: mode: 'client' にしているので、 SSR 時は $modeClient が undefined になる
  $modeClient && $modeClient()

  // SSR
  // NOTE: mode: 'server' にしているので、 CSR 時は $modeServer が undefined になる
  $modeServer && $modeServer()
}
