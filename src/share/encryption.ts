import { Md5 } from 'ts-md5'

export const md5 = (context: string): string => {
  const md5 = new Md5()
  md5.appendStr(context)
  return md5.end().toString()
}
