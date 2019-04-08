/**
 * Login インターフェイス
 */
export interface ILoginPayload {
  username: string
  password: string
}

export interface IUser {
  loggedIn: boolean
}
