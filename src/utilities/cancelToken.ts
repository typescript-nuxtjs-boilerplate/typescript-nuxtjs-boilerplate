/**
 * @file キャンセルトークンを扱うユーティリティ
 */

import axios, { CancelToken, CancelTokenSource } from 'axios'

export class CancelTokenMap {
  /** キャンセルトークンを登録するマップ */
  private cancelTokenMap: Map<any, CancelTokenSource>

  /** @constructor */
  public constructor() {
    this.cancelTokenMap = new Map()
  }

  /**
   * キャンセルトークンを生成する
   * @param key キーにする値
   */
  public create(key: any): void {
    if (this.cancelTokenMap.has(key)) return

    this.cancelTokenMap.set(key, axios.CancelToken.source())
  }

  /**
   * キャンセルトークンを取得する
   * @param key キーにする値
   */
  public getToken(key: any, autoCreate = true): CancelToken | undefined {
    autoCreate && this.create(key)

    const cancelTokenSource = this.cancelTokenMap.get(key)

    if (cancelTokenSource == null) return

    return cancelTokenSource.token
  }

  /**
   * 処理をキャンセルする
   * @param key キーにした値。配列可
   * @param message キャンセルメッセージ
   */
  public cancel(key: any, message?: string): void {
    const cancelTokenSource = this.cancelTokenMap.get(key)

    if (cancelTokenSource == null) return

    cancelTokenSource.cancel(message)
  }

  /**
   * すべての処理をキャンセルする
   * @param message キャンセルメッセージ
   */
  public cancelAll(keys: any[], message?: string): void {
    keys.forEach(
      (key): void => {
        this.cancel(key, message)
      }
    )
  }
}

export const cancelToken = new CancelTokenMap()
