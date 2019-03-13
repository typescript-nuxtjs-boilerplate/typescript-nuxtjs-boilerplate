export default async function({ store, redirect }: any): Promise<void> {
  console.log('authenticated')
  if (!store.getters['auth/isAuthenticated']) {
    await redirect('/example/auth/sign-in')
  }
}
