import KEYCODES from '@/constants/keycode'

export function isKey(key: string): key is keyof typeof KEYCODES {
  return key in KEYCODES
}
