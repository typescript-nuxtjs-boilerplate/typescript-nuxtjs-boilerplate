/**
 * ログインしていなかったらログイン画面にリダイレクトするミドルウェア
 * @param store
 * @param redirect
 */

import { getTokenFromCookie } from '@/utilities/'
import { ILoginCheckPayload, ILoginCheck } from '@/interface/User/ILoginCheck'

export default async function({ store, redirect }): Promise<void> {
  console.log('authenticated')

  const token = getTokenFromCookie()
  await store.dispatch('auth/loginCheck', {
    token
  } as ILoginCheckPayload)

  if (!store.getters['auth/isAuthenticated']) {
    await redirect('/example/auth/sign-in')
  }
}
