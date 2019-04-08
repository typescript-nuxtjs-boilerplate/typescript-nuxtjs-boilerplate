import Cookie from 'js-cookie'

export const setToken = (token: string): void => {
  Cookie.set('token', token)
}

export const unsetToken = (): void => {
  Cookie.remove('token')
  window.localStorage.setItem('logout', Date.now() + '')
}

// @ts-ignore
export const getTokenFromCookie = (req?: any): string | undefined => {
  // SSR
  if (req && req.headers.cookie) {
    console.log('req.headers.cookie:', req.headers.cookie)
    const cookie: string = req.headers.cookie
      .split(';')
      .find((c: string) => c.trim().startsWith('token='))

    if (!cookie) {
      return undefined
    }

    const token = cookie.split('=')[1]
    return token
  }

  // CSR
  return Cookie.get('token')
}
