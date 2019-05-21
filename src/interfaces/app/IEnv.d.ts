/**
 * Env インターフェイス
 */
export interface IEnv {
  /** 環境名 */
  envName: string
  /** 内部向けエンドポイント URL */
  internalEndpointUrl: string
  /** 外部向けエンドポイント URL */
  externalEndpointUrl: string
}
