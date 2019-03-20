export default function(routes: any, resolve: any): void {
  // https://ja.nuxtjs.org/api/configuration-router/#extendroutes
  routes.push({
    name: 'custom-path',
    path: '/example/(c|d)-:a/(e|f)-:b/*',
    component: resolve(__dirname, '../../src/routed-pages/custom-path.vue')
  })
}
