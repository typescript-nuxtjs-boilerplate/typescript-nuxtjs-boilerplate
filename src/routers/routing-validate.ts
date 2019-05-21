import INuxtRoute from '../interfaces/app/INuxtRoute'

export default function(
  resolve: (dirname: string, routeDir: string) => string
): INuxtRoute {
  return {
    name: 'routing-validate',
    path: '/example/routing-validate/:condition/',
    component: resolve(__dirname, '../routed-pages/routing-validate.vue')
  }
}
