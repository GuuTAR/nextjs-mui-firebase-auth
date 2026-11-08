import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app'
import { Auth, getAuth, inMemoryPersistence, setPersistence } from 'firebase/auth'

import { configService } from '@/services/configService'

class FirebaseClient {
  private app: FirebaseApp | undefined

  constructor() {
    configService.getFirebaseClientConfig().then((firebaseConfig) => {
      this.app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)
    })
  }

  /**
   * The server-side session cookie is the source of truth, so the client SDK keeps
   * its sign-in in memory only and is signed out right after the cookie is created.
   */
  public getAuth = async (): Promise<Auth> => {
    const auth: Auth = getAuth(this.app)
    await setPersistence(auth, inMemoryPersistence)
    return auth
  }
}

export const firebaseClient = new FirebaseClient()
