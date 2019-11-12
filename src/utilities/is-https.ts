/**
 * is-https
 *
 * is-https/index.js at master · nuxt-community/is-https - https://github.com/nuxt-community/is-https/blob/master/index.js#L1
 * `xForwardedProto = true` のデフォルト引数の箇所が IE11 でエラーが出るためローカルにコピー
 *
 * @see nuxt-community/is-https: Check if the given request is HTTPS - https://github.com/nuxt-community/is-https
 *
 * @param {req} request
 * @param {xForwardedProto}
 */
function isEmpty(v) {
  return v === undefined || v === null
}

export default function isHTTPS(req, xForwardedProto = true) {
  // Test using req.connection.encrypted
  const encrypted = isEmpty(req.connection.encrypted)
    ? null
    : req.connection.encrypted === true
  if (encrypted) {
    return true
  }

  // Test using req.protocol
  const httpsProtocol = isEmpty(req.protocol) ? null : req.protocol === 'https'
  if (httpsProtocol) {
    return true
  }

  // Test using x-forwarded-proto header
  const httpsXforwarded =
    !xForwardedProto || isEmpty(req.headers['x-forwarded-proto'])
      ? null
      : req.headers['x-forwarded-proto'].includes('https')
  if (httpsXforwarded) {
    return true
  }

  // If no detection method is available return null
  if (
    encrypted === null &&
    httpsProtocol === null &&
    httpsXforwarded === null
  ) {
    return null
  }

  return false
}
