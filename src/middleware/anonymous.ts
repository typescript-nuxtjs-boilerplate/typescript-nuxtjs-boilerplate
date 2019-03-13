export default async function({ store, redirect }: any): Promise<void> {
  console.log('anonymous')
  if (store.getters['auth/isAuthenticated']) {
    await redirect('/example')
  }
}
