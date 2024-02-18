import { isMobile } from '@/services/device'

export default async function qrcode() {
  if (isMobile) {
    return
  }
  
  const { printQRCode } = await import('@/libs/QRCode')
  printQRCode()
}
