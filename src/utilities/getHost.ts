/**
 * getHost - URL から {protocol}://{host}:{port} を繋げた文字列を返します
 *
 * SSR 時と CSR 時で req から取得するか、 window.location から取得するか変わります
 *
 * @param {req} request
 */
import isHTTPS from 'is-https'

export function getHost(req: any, domain?: string): string {
  let host = ''
  let port = ''
  let protocol = ''

  // SSR
  if (req) {
    if (domain) {
      host = domain
    } else {
      host = req.headers.host
      if (host.indexOf(':') > 0) {
        ;[host, port] = host.split(':')
      }
    }

    protocol = isHTTPS(req) ? 'https' : 'http'
    host = host + (port ? ':' + port : '')
    return [protocol, '://', host].join('')
  }

  // CSR
  if (domain) {
    host = domain
  } else {
    host = window.location.host
    if (host.indexOf(':') > 0) {
      ;[host, port] = host.split(':')
    }
  }

  protocol = window.location.protocol
  host = host + (port ? ':' + port : '')
  return [protocol, '//', host].join('')
}
