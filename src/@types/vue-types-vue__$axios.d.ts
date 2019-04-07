import { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios'
import Vue from 'vue'

interface NuxtAxiosInstance extends AxiosInstance {
  // * Methods
  $request<T = any>(config: AxiosRequestConfig): Promise<T>
  $get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
  $delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
  $head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
  $options<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
  $post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>
  $put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>
  $patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>
  // * Helpers
  onRequest(fn: (config: AxiosRequestConfig) => void): void
  onResponse<T = any>(fn: (response: T) => void): void
  onError(fn: (error: AxiosError) => void): void
  onRequestError(fn: (error: AxiosError) => void): void
  onResponseError(fn: (error: AxiosError) => void): void
  setHeader(name: string, value: any, scopes?: string | string[]): void
  setToken(token: string, type: string, scopes?: string | string[]): void
}

declare module 'vue/types/vue' {
  interface Vue {
    $axios: NuxtAxiosInstance
  }
}
