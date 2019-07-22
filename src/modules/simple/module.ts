import path from 'path'

export default function SimpleModule(this: any, moduleOptions): void {
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.ts'),
    fileName: 'simple.ts'
  })
}
