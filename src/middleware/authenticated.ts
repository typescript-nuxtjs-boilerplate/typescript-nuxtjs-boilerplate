/**
 * ログインしていなかったらログイン画面にリダイレクトするミドルウェア
 * @param store
 * @param redirect
 */

import { ILoginCheckPayload } from '@/interfaces/api/User/ILoginCheck'

export default async function({ store, redirect }): Promise<void> {
  console.log('authenticated')

  await store.dispatch('auth/loginCheck', {} as ILoginCheckPayload)

  if (!store.getters['auth/isAuthenticated']) {
    await redirect('/example/auth/sign-in')
  }
}
