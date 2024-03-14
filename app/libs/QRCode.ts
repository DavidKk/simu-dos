import qrcode from 'qrcode'
import i18n from '@/store/i18n'

export default class QRCode {
  protected getBox(width: number, height: number) {
    return {
      string: '+',
      style: `font-size:1px;padding:${Math.floor(height / 2)}px ${width}px;line-height:${height}px;`,
    }
  }

  protected printImage(url: string, scale = 1) {
    return new Promise<string[]>((resolve, reject) => {
      const image = new Image()

      image.onload = () => {
        const width = image.width * scale
        const height = image.height * scale
        const dim = this.getBox(width, height)
        resolve([`%c ${dim.string}`, `${dim.style}background:url(${url}) no-repeat;background-size:cover;color:transparent;`])
      }

      image.onerror = (error) => {
        reject(error)
      }

      image.src = url
    })
  }

  public convert(url = document.location.href) {
    return qrcode.toDataURL(url)
  }

  public async print(url = document.location.href) {
    const qrcode = await this.convert(url)
    const codes = await this.printImage(qrcode)
    /* eslint-disable-next-line no-console */
    console.log(`%c ${i18n.qrcode.label}`, 'font-size:14px;font-weight:bold;')
    /* eslint-disable-next-line no-console */
    console.log(...codes)
  }
}

export function printQRCode() {
  new QRCode().print(document.location.href)
}
