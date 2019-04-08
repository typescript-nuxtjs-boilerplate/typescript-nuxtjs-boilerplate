/**
 * すでにログインしていたらトップにリダイレクトするミドルウェア
 * @param store
 * @param redirect
 */
export default async function({ store, redirect }): Promise<void> {
  console.log('anonymous')
  if (store.getters['auth/isAuthenticated']) {
    await redirect('/example')
  }
}
