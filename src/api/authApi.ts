import { AxiosResponse } from 'axios'

import { ResponseData } from '@/types/ResponseData'
import { SessionUser } from '@/types/SessionUser'
import { STATUS_CODE } from '@/enum/global'

import { ApiService } from '@/services/apiService'

export class AuthAPI {
  private api: ApiService

  constructor(apiService: ApiService) {
    this.api = apiService
  }

  public getSession = async (): Promise<SessionUser | undefined> => {
    try {
      const result: AxiosResponse<ResponseData<SessionUser | undefined>> =
        await this.api.get<ResponseData<SessionUser>>('/api/auth/session')
      if (result.status === STATUS_CODE.OK) {
        return result.data.body
      }
      throw new Error(`Unexpected status code: ${result.status}`)
    } catch (error) {
      console.error('Error in GET /api/auth/session:', (error as Error).message)
      return undefined
    }
  }

  public createSession = async (idToken: string): Promise<SessionUser | undefined> => {
    try {
      const result = await this.api.post<ResponseData<SessionUser>, { idToken: string }>('/api/auth/session', {
        idToken,
      })
      if (result.status === STATUS_CODE.CREATED) {
        return result.data.body
      }
      throw new Error(`Unexpected status code: ${result.status}`)
    } catch (error) {
      console.error('Error in POST /api/auth/session:', (error as Error).message)
      return undefined
    }
  }

  public deleteSession = async (): Promise<boolean> => {
    try {
      const result: AxiosResponse = await this.api.delete('/api/auth/session')
      if (result.status === STATUS_CODE.OK) {
        return true
      }
      throw new Error(`Unexpected status code: ${result.status}`)
    } catch (error) {
      console.error('Error in DELETE /api/auth/session:', (error as Error).message)
      return false
    }
  }
}
