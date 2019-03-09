import EnvDev from './env.dev'
import EnvStg from './env.stg'
import EnvProd from './env.prod'
import { EnvInterface } from '@/interface/EnvInterface'

console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)

let Env: EnvInterface
if (process.env.NODE_ENV === 'production') {
  Env = EnvProd
} else if (process.env.NODE_ENV === 'staging') {
  Env = EnvStg
} else {
  Env = EnvDev
}

export default Env
