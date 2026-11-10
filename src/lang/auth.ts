import { LANGUAGE } from '@/enum/global'

export const SIGN_IN_SUCCESS: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Signed in successfully.',
  [LANGUAGE.THAI]: 'เข้าสู่ระบบสำเร็จ',
}

export const SIGN_IN_FAILED: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Sign in failed. Please try again.',
  [LANGUAGE.THAI]: 'เข้าสู่ระบบไม่สำเร็จ กรุณาลองอีกครั้ง',
}

export const SIGN_OUT_SUCCESS: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Signed out successfully.',
  [LANGUAGE.THAI]: 'ออกจากระบบสำเร็จ',
}

export const SIGN_OUT_FAILED: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Sign out failed. Please try again.',
  [LANGUAGE.THAI]: 'ออกจากระบบไม่สำเร็จ กรุณาลองอีกครั้ง',
}

export const LOAD_USER_FAILED: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Failed to load user data. Please try again.',
  [LANGUAGE.THAI]: 'โหลดข้อมูลผู้ใช้ไม่สำเร็จ กรุณาลองอีกครั้ง',
}
