/**
 * @file Vuex内で共通して使う型、インターフェース
 */

/** ベースのActionのペイロード */
interface BaseAxiosAciton {
  key?: symbol
  force?: boolean
}

/** Axiosのリクエストを伴うアクションのペイロード */
export type AxiosAction<T, P = {}> = BaseAxiosAciton &
  (T extends void ? {} : { data: T }) &
  P
