import Cookie from 'js-cookie'

export const setToken = (token: string): void => {
  Cookie.set('token', token)
}

export const unsetToken = (): void => {
  Cookie.remove('token')
  window.localStorage.setItem('logout', Date.now() + '')
}

// @ts-ignore
export const getTokenFromCookie = (req: any): string | undefined => {
  if (req && req.headers.cookie) {
    const cookie: string = req.headers.cookie
      .split(';')
      .find((c: string) => c.trim().startsWith('token='))
      .split('=')[1]
    return cookie
  }

  return Cookie.get('token')
}
