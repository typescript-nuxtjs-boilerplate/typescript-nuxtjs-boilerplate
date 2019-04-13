import INuxtRoute from '../interface/INuxtRoute'

export default function(
  resolve: (dirname: string, routeDir: string) => string
): INuxtRoute {
  return {
    name: 'include',
    path: '/include',
    component: resolve(__dirname, '../include/include.vue')
  }
}
