import { ServiceAccount } from 'firebase-admin'

export type ClientAppConfig = {
  backend: { apiTimeout: number; backendUrl: string }
  demo: { demoUser: string; demoPassword: string; demoUid: string }
}

export type ServerAppConfig = {
  firebaseAdminConfig: string | ServiceAccount
  userSessionLifetimeDays: number
}
