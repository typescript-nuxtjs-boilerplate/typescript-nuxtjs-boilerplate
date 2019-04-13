import INuxtRoute from '../interface/INuxtRoute'

export default function(
  resolve: (dirname: string, routeDir: string) => string
): INuxtRoute {
  return {
    name: 'custom-path',
    path: '/example/(c|d)-:a/(e|f)-:b/*',
    component: resolve(__dirname, '../routed-pages/custom-path.vue')
  }
}
