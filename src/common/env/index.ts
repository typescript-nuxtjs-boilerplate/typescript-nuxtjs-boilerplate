import EnvDev from './env.dev'
import EnvStg from './env.stg'
import EnvProd from './env.prod'
import { IEnv } from '@/interface/IEnv'

console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)

let Env: IEnv
if (process.env.NODE_ENV === 'production') {
  Env = EnvProd
} else if (process.env.NODE_ENV === 'staging') {
  Env = EnvStg
} else {
  Env = EnvDev
}

export default Env
