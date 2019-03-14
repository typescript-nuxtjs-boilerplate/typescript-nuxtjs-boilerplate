import { getTokenFromCookie } from '@/utilities/'

export default async function({ isServer, store, req }: any): Promise<void> {
  console.log('check-auth')
  if (isServer && !req) {
    return
  }

  const token = getTokenFromCookie(req)
  await store.dispatch('auth/loginCheck', token)
}
