/**
 * @file ブラウザからアクセスされた URL と、実際にルーティングされた URL をログに出すミドルウェア
 */

export default function({ route }): void {
  const { name, fullPath } = route

  console.log(`routing fullPath: ${fullPath} matched path: ${name}`)
}
