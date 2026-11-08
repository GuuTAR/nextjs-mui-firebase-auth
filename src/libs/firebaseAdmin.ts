import 'server-only'

import { App, cert, getApp, getApps, initializeApp } from 'firebase-admin/app'
import { Auth, getAuth } from 'firebase-admin/auth'

import { configService } from '@/services/configService'

class FirebaseAdmin {
  private app: App | undefined

  constructor() {
    if (getApps().length) {
      this.app = getApp()
    } else {
      const { firebaseAdminConfig } = configService.getServerConfig()
      if (typeof firebaseAdminConfig === 'string') return
      if (!firebaseAdminConfig.projectId || !firebaseAdminConfig.privateKey || !firebaseAdminConfig.clientEmail) return

      this.app = initializeApp({ credential: cert(firebaseAdminConfig) })
    }
  }

  public getAuth = (): Auth => {
    return getAuth(this.app)
  }
}

export const firebaseAdmin = new FirebaseAdmin()
