export default function(routes: any, resolve: any): void {
  routes.push({
    name: 'include',
    path: '/include',
    component: resolve(__dirname, '../../src/include/include.vue')
  })
}
